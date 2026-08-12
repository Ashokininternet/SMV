const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'images');
const galleryDir = path.join(__dirname, 'images', 'gallery');

if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
if (!fs.existsSync(galleryDir)) fs.mkdirSync(galleryDir, { recursive: true });

function createSVGPlaceholder(title, subtitle, width = 800, height = 500, bg = '#0f2b48') {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${bg};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0a192f;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#grad)"/>
  <rect x="20" y="20" width="${width - 40}" height="${height - 40}" fill="none" stroke="#d97706" stroke-width="2" stroke-dasharray="8,8" opacity="0.6"/>
  <circle cx="${width/2}" cy="${height/2 - 20}" r="40" fill="#006837" opacity="0.8"/>
  <text x="${width/2}" y="${height/2 - 12}" fill="#ffffff" font-size="24" font-weight="bold" text-anchor="middle" font-family="Segoe UI, sans-serif">SMV</text>
  <text x="${width/2}" y="${height/2 + 40}" fill="#ffffff" font-size="20" font-weight="bold" text-anchor="middle" font-family="Segoe UI, sans-serif">[ ${title} ]</text>
  <text x="${width/2}" y="${height/2 + 65}" fill="#f59e0b" font-size="14" text-anchor="middle" font-family="Segoe UI, sans-serif">${subtitle}</text>
  <text x="${width/2}" y="${height - 35}" fill="#94a3b8" font-size="12" text-anchor="middle" font-family="Segoe UI, sans-serif">Replace with official school photo in /images/</text>
</svg>`;
}

const files = [
  { path: 'hero-school.jpg', title: 'Main School Campus Building', subtitle: 'Hero Banner Image 1' },
  { path: 'hero-campus.jpg', title: 'Interactive Science & IT Labs', subtitle: 'Hero Banner Image 2' },
  { path: 'principal.jpg', title: "Principal / Headmaster Photo", subtitle: 'Replace with Principal official photo', w: 400, h: 400 },
  { path: 'news-annual-day.jpg', title: 'Annual Day Celebrations', subtitle: 'News Thumbnail' },
  { path: 'news-kalolsavam.jpg', title: 'State Kalolsavam Winners', subtitle: 'News Thumbnail' },
  { path: 'news-science-lab.jpg', title: 'Hi-Tech Science Lab Inauguration', subtitle: 'News Thumbnail' },
  { path: 'news-sports.jpg', title: 'Athletics District Championship', subtitle: 'News Thumbnail' },
  { path: 'facility-smart-class.jpg', title: 'Smart Classrooms', subtitle: 'Facility Preview' },
  { path: 'facility-science-lab.jpg', title: 'Science Laboratories', subtitle: 'Facility Preview' },
  { path: 'facility-computer-lab.jpg', title: 'Computer Center', subtitle: 'Facility Preview' },
  { path: 'facility-library.jpg', title: 'Central Library', subtitle: 'Facility Preview' },
  { path: 'facility-auditorium.jpg', title: 'School Auditorium', subtitle: 'Facility Preview' },
  { path: 'facility-sports.jpg', title: 'Playground & Sports Grounds', subtitle: 'Facility Preview' },
  { path: 'gallery/school-1.jpg', title: 'Historic Main Building', subtitle: 'Gallery - School' },
  { path: 'gallery/academic-1.jpg', title: 'Smart Classroom Session', subtitle: 'Gallery - Academic' },
  { path: 'gallery/sports-1.jpg', title: 'Sports Meet Track Event', subtitle: 'Gallery - Sports' },
  { path: 'gallery/arts-1.jpg', title: 'Kalolsavam Performance', subtitle: 'Gallery - Arts' },
  { path: 'gallery/celebration-1.jpg', title: 'Onam Celebrations', subtitle: 'Gallery - Celebrations' },
  { path: 'gallery/academic-2.jpg', title: 'Science Exhibition', subtitle: 'Gallery - Academic' },
  { path: 'gallery/event-1.jpg', title: 'NSS & SPC Cadet Parade', subtitle: 'Gallery - Events' },
  { path: 'gallery/sports-2.jpg', title: 'Football Team Trophy', subtitle: 'Gallery - Sports' },
];

files.forEach(f => {
  const filePath = path.join(targetDir, f.path);
  const svg = createSVGPlaceholder(f.title, f.subtitle, f.w || 800, f.h || 500);
  fs.writeFileSync(filePath, svg, 'utf8');
});

console.log('Successfully generated all placeholder image files in /images!');
