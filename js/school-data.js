/**
 * S.M.V. GOVERNMENT MODEL HIGHER SECONDARY SCHOOL, THIRUVANANTHAPURAM
 * Central Data Configuration File
 * 
 * Instructions for School Admin:
 * Edit the fields below to update school information, announcements, news, gallery images, and administration details.
 */

export const SMVSchoolData = {
  schoolInfo: {
    fullName: "S.M.V. Government Model Higher Secondary School",
    shortName: "SMV School",
    location: "Thiruvananthapuram",
    state: "Kerala",
    subtag: "Government of Kerala",
    established: 1834,
    phone: "0471 2338180",
    email: "smvghsstrivandrum@yahoo.co.in",
    address: "MG Road, Overbridge, Thiruvananthapuram, Kerala - 695001",
    googleMapUrl: "https://maps.google.com/maps?q=SMV+Government+Model+Higher+Secondary+School+Thiruvananthapuram&t=&z=15&ie=UTF8&iwloc=&output=embed",
    wikipediaUrl: "https://en.wikipedia.org/wiki/SMV_High_School,_Thiruvananthapuram",
    introVideoYoutubeId: "dQw4w9WgXcQ"
  },

  principalMessage: {
    name: "[Official Name]",
    designation: "Principal / Headmaster",
    image: "images/principal.jpg",
    summary: "Welcome to S.M.V. Government Model Higher Secondary School, one of the pioneer government educational institutions in Thiruvananthapuram. We strive for academic excellence, holistic character development, and empowering students with 21st-century skills.",
    fullMessage: "[Add official principal's detailed message here. You can update this section with the Principal's welcome note, vision for the academic year, and advice to students and parents.]"
  },

  announcements: [
    {
      id: 1,
      title: "Plus One Higher Secondary Admission Guidelines 2026-27",
      category: "Admission Notice",
      date: "August 10, 2026",
      urgent: true,
      link: "#",
      description: "[Official admission announcement and allotment list details will be posted here.]"
    },
    {
      id: 2,
      title: "Terminal Examination Timetable Announcement",
      category: "Examination Updates",
      date: "August 08, 2026",
      urgent: false,
      link: "#",
      description: "[Official examination schedule for High School and Higher Secondary sections.]"
    },
    {
      id: 3,
      title: "Parent Teacher Association (PTA) General Body Meeting",
      category: "PTA Updates",
      date: "August 05, 2026",
      urgent: false,
      link: "#",
      description: "[Notice regarding upcoming PTA meeting in the school auditorium.]"
    },
    {
      id: 4,
      title: "National Service Scheme (NSS) Independence Day Parade",
      category: "School Circulars",
      date: "August 02, 2026",
      urgent: false,
      link: "#",
      description: "[Details regarding student participation in Independence Day celebrations.]"
    },
    {
      id: 5,
      title: "Notification for School Onam Vacation 2026",
      category: "Holiday Notice",
      date: "July 28, 2026",
      urgent: false,
      link: "#",
      description: "[Official circular detailing school closing and re-opening dates.]"
    }
  ],

  latestNews: [
    {
      id: 101,
      title: "Annual Day & Merit Day Celebrations",
      category: "Events",
      date: "August 05, 2026",
      image: "images/news-annual-day.jpg",
      summary: "[Official event information regarding Annual Day celebrations, chief guests, and prize distribution will appear here.]"
    },
    {
      id: 102,
      title: "State Level Kalolsavam Winners Honored",
      category: "Achievements",
      date: "July 20, 2026",
      image: "images/news-kalolsavam.jpg",
      summary: "[Details of SMV School students securing top ranks in District & State Youth Festivals will appear here.]"
    },
    {
      id: 103,
      title: "Inauguration of New High-Tech Science Lab",
      category: "Facilities",
      date: "July 12, 2026",
      image: "images/news-science-lab.jpg",
      summary: "[Information on the upgraded Physics, Chemistry, and Biology laboratories equipped with modern instruments.]"
    },
    {
      id: 104,
      title: "SMV School Athletics Team Wins District Championship",
      category: "Sports",
      date: "June 30, 2026",
      image: "images/news-sports.jpg",
      summary: "[Highlights and achievements of the school sports team in the District Inter-School Sports Meet.]"
    }
  ],

  academicStreams: [
    {
      id: "science",
      name: "Higher Secondary - Science Stream",
      description: "Comprehensive curriculum in Physics, Chemistry, Mathematics, Biology, and Computer Science.",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology / Computer Science", "English", "Malayalam / Hindi"],
      seats: "[Editable Seat Capacity]"
    },
    {
      id: "commerce",
      name: "Higher Secondary - Commerce Stream",
      description: "In-depth study of Accountancy, Business Studies, Economics, and Mathematics/Computer Application.",
      subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics / Computer Application", "English", "Malayalam / Hindi"],
      seats: "[Editable Seat Capacity]"
    },
    {
      id: "humanities",
      name: "Higher Secondary - Humanities Stream",
      description: "Rich exposure to History, Economics, Political Science, Sociology, and Literature.",
      subjects: ["History", "Economics", "Political Science", "Sociology / Journalism", "English", "Malayalam / Hindi"],
      seats: "[Editable Seat Capacity]"
    }
  ],

  facilities: [
    {
      title: "Smart Classrooms",
      description: "Interactive smart boards, high-speed connectivity, and audio-visual multimedia teaching systems.",
      image: "images/facility-smart-class.jpg",
      icon: "bi-display"
    },
    {
      title: "Science Laboratories",
      description: "Fully-equipped modern labs for Physics, Chemistry, and Biology practical work.",
      image: "images/facility-science-lab.jpg",
      icon: "bi-activity"
    },
    {
      title: "Computer Laboratory",
      description: "State-of-the-art computer center with broadband connectivity and modern computing software.",
      image: "images/facility-computer-lab.jpg",
      icon: "bi-pc-display"
    },
    {
      title: "Central Library",
      description: "Vast collection of academic books, reference guides, periodicals, journals, and digital reading corner.",
      image: "images/facility-library.jpg",
      icon: "bi-book"
    },
    {
      title: "School Auditorium",
      description: "Spacious assembly and cultural hall for hosting school events, seminars, and performances.",
      image: "images/facility-auditorium.jpg",
      icon: "bi-building-gear"
    },
    {
      title: "Playground & Sports Field",
      description: "Dedicated grounds for football, cricket, athletics, basketball court, and physical fitness activities.",
      image: "images/facility-sports.jpg",
      icon: "bi-trophy"
    }
  ],

  gallery: [
    { id: 1, title: "Historic Main School Building", category: "school", image: "images/gallery/school-1.jpg" },
    { id: 2, title: "Smart Classroom Session", category: "academic", image: "images/gallery/academic-1.jpg" },
    { id: 3, title: "Annual Sports Meet Track Event", category: "sports", image: "images/gallery/sports-1.jpg" },
    { id: 4, title: "State School Kalolsavam Performance", category: "arts", image: "images/gallery/arts-1.jpg" },
    { id: 5, title: "Onam Celebrations in Campus", category: "celebrations", image: "images/gallery/celebration-1.jpg" },
    { id: 6, title: "Science Exhibition Demonstration", category: "academic", image: "images/gallery/academic-2.jpg" },
    { id: 7, title: "NSS & Student Police Cadets Parade", category: "events", image: "images/gallery/event-1.jpg" },
    { id: 8, title: "Football Tournament Champions", category: "sports", image: "images/gallery/sports-2.jpg" }
  ],

  administration: {
    principal: {
      name: "Name: [Official Name]",
      title: "Principal / Headmaster",
      qualification: "M.Sc., M.Ed.",
      email: "smvghsstrivandrum@yahoo.co.in",
      phone: "0471 2338180"
    },
    vicePrincipal: {
      name: "Name: [Official Name]",
      title: "Vice Principal",
      qualification: "M.A., M.Ed.",
      email: "smvghsstrivandrum@yahoo.co.in"
    },
    headsOfDepartments: [
      { dept: "Department of Physics", head: "Name: [Official Name]" },
      { dept: "Department of Chemistry", head: "Name: [Official Name]" },
      { dept: "Department of Mathematics", head: "Name: [Official Name]" },
      { dept: "Department of Biology", head: "Name: [Official Name]" },
      { dept: "Department of Computer Science", head: "Name: [Official Name]" },
      { dept: "Department of Commerce", head: "Name: [Official Name]" },
      { dept: "Department of English", head: "Name: [Official Name]" },
      { dept: "Department of Malayalam", head: "Name: [Official Name]" }
    ],
    officeStaff: [
      { designation: "Senior Superintendent", name: "Name: [Official Name]" },
      { designation: "Head Clerk", name: "Name: [Official Name]" },
      { designation: "Librarian", name: "Name: [Official Name]" },
      { designation: "Lab Assistant", name: "Name: [Official Name]" }
    ]
  }
};
