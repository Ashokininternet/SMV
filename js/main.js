/**
 * S.M.V. GOVERNMENT MODEL HIGHER SECONDARY SCHOOL, THIRUVANANTHAPURAM
 * Main Interactive Logic & Placeholder Handler
 */

document.addEventListener('DOMContentLoaded', () => {
  initSVGPlaceholderFallbacks();
  renderAnnouncements();
  renderLatestNews();
  renderGallery();
  initSearchModal();
  initScrollTopBtn();
  initContactForm();
});

/**
 * Creates high-quality inline SVG canvas fallbacks if local files are missing
 */
function initSVGPlaceholderFallbacks() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', function() {
      const altText = this.alt || 'SMV School';
      const width = this.width || 400;
      const height = this.height || 300;
      
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 400 300" preserveAspectRatio="none">
          <rect width="400" height="300" fill="#0f2b48"/>
          <rect x="20" y="20" width="360" height="260" fill="none" stroke="#d97706" stroke-width="2" stroke-dasharray="6,6"/>
          <circle cx="200" cy="120" r="45" fill="#006837" opacity="0.8"/>
          <text x="200" y="128" fill="#ffffff" font-size="28" font-weight="bold" text-anchor="middle" font-family="sans-serif">SMV</text>
          <text x="200" y="210" fill="#e2e8f0" font-size="14" font-weight="bold" text-anchor="middle" font-family="sans-serif">[ ${altText} ]</text>
          <text x="200" y="235" fill="#f59e0b" font-size="12" text-anchor="middle" font-family="sans-serif">Placeholder Image</text>
        </svg>
      `;
      this.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    });
  });
}

/**
 * Render Announcements Panel
 */
function renderAnnouncements() {
  const container = document.getElementById('announcements-container');
  if (!container || !window.SMVSchoolData) return;

  const listHtml = SMVSchoolData.announcements.map(item => `
    <div class="announcement-item">
      <div class="announcement-meta">
        <span class="badge-notice ${item.urgent ? 'badge-urgent' : 'badge-normal'}">${item.category}</span>
        <span class="announcement-date"><i class="bi bi-calendar3 me-1"></i>${item.date}</span>
      </div>
      <a href="${item.link}" class="announcement-title-text" onclick="showNoticeModal(${item.id}); return false;">
        ${item.title}
      </a>
    </div>
  `).join('');

  container.innerHTML = listHtml;
}

/**
 * Render Latest News Cards
 */
function renderLatestNews() {
  const container = document.getElementById('latest-news-container');
  if (!container || !window.SMVSchoolData) return;

  const newsHtml = SMVSchoolData.latestNews.map(item => `
    <div class="col-md-6 col-lg-3 mb-4">
      <div class="news-card">
        <div class="news-img-holder">
          <img src="${item.image}" alt="${item.title}" class="img-fluid" onerror="this.onerror=null;">
          <span class="news-category-tag">${item.category}</span>
        </div>
        <div class="news-body">
          <div class="news-date"><i class="bi bi-clock me-1"></i>${item.date}</div>
          <h4 class="news-title">${item.title}</h4>
          <p class="news-desc">${item.summary}</p>
          <a href="news.html" class="btn-link-smv mt-auto">Read More <i class="bi bi-arrow-right"></i></a>
        </div>
      </div>
    </div>
  `).join('');

  container.innerHTML = newsHtml;
}

/**
 * Render Photo Gallery Grid
 */
function renderGallery(filter = 'all') {
  const container = document.getElementById('gallery-grid-container');
  if (!container || !window.SMVSchoolData) return;

  const items = filter === 'all' 
    ? SMVSchoolData.gallery 
    : SMVSchoolData.gallery.filter(i => i.category === filter);

  const galleryHtml = items.map(item => `
    <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div class="gallery-item-card" onclick="openLightbox('${item.image}', '${item.title}')">
        <img src="${item.image}" alt="${item.title}" class="img-fluid">
        <div class="gallery-item-overlay">
          <p class="gallery-item-title">${item.title}</p>
          <span class="badge bg-warning text-dark text-uppercase mt-1" style="font-size: 0.68rem;">${item.category}</span>
        </div>
      </div>
    </div>
  `).join('');

  container.innerHTML = galleryHtml;
  initSVGPlaceholderFallbacks();
}

/**
 * Gallery Filter Buttons Handler
 */
function filterGallery(category, btnElement) {
  document.querySelectorAll('.gallery-filter-btn').forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  renderGallery(category);
}

/**
 * Lightbox Modal Handler
 */
function openLightbox(imgSrc, title) {
  const modalImg = document.getElementById('lightboxModalImg');
  const modalTitle = document.getElementById('lightboxModalTitle');
  const modalElem = document.getElementById('lightboxModal');
  
  if (modalImg && modalTitle && modalElem) {
    modalImg.src = imgSrc;
    modalTitle.textContent = title;
    const bsModal = new bootstrap.Modal(modalElem);
    bsModal.show();
    initSVGPlaceholderFallbacks();
  }
}

/**
 * Notice Detail Modal
 */
function showNoticeModal(noticeId) {
  const notice = SMVSchoolData.announcements.find(a => a.id === noticeId);
  if (!notice) return;

  alert(`[ANNOUNCEMENT DETAILS]\n\nTitle: ${notice.title}\nCategory: ${notice.category}\nDate: ${notice.date}\n\n${notice.description}`);
}

/**
 * Instant Site Search Modal Logic
 */
function initSearchModal() {
  const searchInput = document.getElementById('siteSearchInput');
  const searchResults = document.getElementById('searchResultsContainer');
  if (!searchInput || !searchResults) return;

  const searchablePages = [
    { title: "Home Page", url: "index.html", tags: "home main principal welcome news" },
    { title: "About SMV School & History", url: "about.html", tags: "about history principal message mission vision" },
    { title: "Administration & Staff Roster", url: "administration.html", tags: "administration staff principal teachers headmaster" },
    { title: "Plus One & Plus Two Academics", url: "academics.html", tags: "academics science commerce humanities syllabus" },
    { title: "Academic Subject Departments", url: "departments.html", tags: "departments physics chemistry maths computer biology" },
    { title: "Student Life & Extracurriculars", url: "student-life.html", tags: "nss ncc spc sports arts clubs youth festival" },
    { title: "Campus Facilities & Smart Labs", url: "facilities.html", tags: "facilities smart classroom library auditorium computer lab" },
    { title: "Achievements & Awards", url: "achievements.html", tags: "achievements kalolsavam rankings state sports awards" },
    { title: "News & Announcements Archive", url: "news.html", tags: "news circulars updates holiday timetable" },
    { title: "School Photo Gallery", url: "gallery.html", tags: "gallery photos events campus pictures" },
    { title: "Contact Us & Location Map", url: "contact.html", tags: "contact phone email address location google map" }
  ];

  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    if (!query) {
      searchResults.innerHTML = '<p class="text-muted text-center py-4">Type a key term above to search school pages and notices...</p>';
      return;
    }

    const matches = searchablePages.filter(p => p.title.toLowerCase().includes(query) || p.tags.includes(query));

    if (matches.length === 0) {
      searchResults.innerHTML = '<p class="text-danger text-center py-4"><i class="bi bi-exclamation-circle me-1"></i> No matching pages found.</p>';
    } else {
      searchResults.innerHTML = matches.map(m => `
        <div class="p-3 mb-2 bg-light rounded border">
          <h6 class="mb-1"><a href="${m.url}" class="text-navy text-decoration-none font-weight-bold">${m.title}</a></h6>
          <small class="text-muted">Direct link: ${m.url}</small>
        </div>
      `).join('');
    }
  });
}

/**
 * Scroll to Top Button
 */
function initScrollTopBtn() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/**
 * Contact Inquiry Form Handler
 */
function initContactForm() {
  const form = document.getElementById('schoolContactForm');
  const alertBox = document.getElementById('contactFormAlert');
  if (!form || !alertBox) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alertBox.className = 'alert alert-success d-block mb-3';
    alertBox.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i> Thank you! Your message has been recorded. [Editable form submission handler]';
    form.reset();
  });
}

/**
 * YouTube Video Modal Handler
 */
function openVideoModal() {
  const videoModalElem = document.getElementById('videoModal');
  const videoIframe = document.getElementById('videoModalIframe');
  
  if (videoModalElem && videoIframe && window.SMVSchoolData) {
    const videoId = SMVSchoolData.schoolInfo.introVideoYoutubeId || 'dQw4w9WgXcQ';
    videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    const bsModal = new bootstrap.Modal(videoModalElem);
    bsModal.show();

    videoModalElem.addEventListener('hidden.bs.modal', function () {
      videoIframe.src = '';
    });
  }
}
