"use strict";

const projects = [
  {
    title: "Pertamina RU IV - IT Dashboard & Scheduling",
    shortTitle: "Pertamina RU IV - IT Dashboard & Scheduling",
    year: "2025",
    role: "UI/UX DESIGNER",

    desc: "Designed operational dashboards and collaborative scheduling interfaces to support more structured monitoring, maintenance planning, and room-booking workflows at Pertamina RU IV.",

    overview: "During my UI/UX internship at Fungsi IT RU IV, Kilang Pertamina Internasional, I contributed to the design of two internal digital solutions. The first was an IT services dashboard supporting preventive-maintenance planning and operational monitoring. The second was a web-based collaborative room-scheduling system for co-working spaces, designed using a Human-Centered Design approach to make room availability, booking, and employee scheduling more structured and accessible.",

    challenge: "Operational monitoring and scheduling processes were still handled through fragmented or manual workflows. Teams found it difficult to track maintenance activities, monitor progress, check room availability, avoid overlapping schedules, and coordinate the use of shared collaborative spaces efficiently.",

    solution: "Conducted user-centered exploration and translated operational requirements into structured user flows, wireframes, prototypes, and dashboard visualizations. The resulting interfaces centralized maintenance monitoring and collaborative room scheduling while providing clearer information hierarchy, booking status, schedule visibility, and more consistent interaction patterns.",

    features: [
      "Centralized preventive-maintenance scheduling and monitoring",
      "IT services dashboard with operational data visualization",
      "Collaborative room availability and booking interface",
      "Employee and room-scheduling workflow management",
      "Conflict prevention for overlapping room reservations",
      "Structured booking status and schedule information",
      "Human-Centered Design approach based on user needs",
      "Collaboration with developers and internal IT teams"
    ],

    tags: [
      "Figma",
      "Adobe XD",
      "Human-Centered Design",
      "User Research",
      "User Flow",
      "Wireframing",
      "Prototyping",
      "Data Visualization"
    ],

    image: "assets/projects/pertamina.jpeg",

    caseUrl: "https://www.figma.com/proto/bfwdXuydQWPOVdolYyqOd2/Project-IT-Services-Dashboard?node-id=163-3264&t=S7sAzlCkNzVqPvHp-1",
    caseCta: "View Dashboard Prototype",

    caseUrl2: "https://www.figma.com/design/mQY9zsMTE0XeCcQ5p3tF1v/KP-Sistem-Penjadwalan-Otomatis?node-id=0-1&t=aXtJxUFBOdBbfSth-1",
    caseCta2: "View Scheduling Design"
  },
  {
    title: "NBA Training Camp App",
    shortTitle: "NBA Training Camp",
    year: "2024",
    role: "UI/UX DESIGNER",
    desc: "A smooth registration and participant-interaction experience supported by a reusable design system.",
    overview: "Designed a registration and user-interaction interface for an NBA Training Camp application, focused on a smooth onboarding experience.",
    challenge: "Training-camp registration flows are often lengthy and confusing, leading to drop-offs and inconsistent interfaces.",
    solution: "Built an intuitive registration flow supported by reusable components for faster iteration and a consistent visual language.",
    features: [
      "Simplified registration flow",
      "Reusable component-based design system",
      "Consistent UI patterns for developer handoff",
      "Interaction flow designed for clarity"
    ],
    tags: ["Figma", "Design System", "Prototyping", "Wireframing"],
    image: "assets/projects/nba.jpeg",
    caseUrl: "https://www.figma.com/proto/DDPj3J1GrJ2e1nkG28DpmK/NBA-Training-Camp-Website?node-id=358-33&starting-point-node-id=358%3A33&t=W5KZKSU9gCwJgbn9-1",
    caseCta: "View Prototype"
  },
  {
    title: "House Price Prediction in Tebet",
    shortTitle: "House Price Prediction",
    year: "2024",
    role: "RESEARCHER & DEVELOPER",
    desc: "A regression-based model built from more than 1,000 real-world property listings in Tebet.",
    overview: "Built a regression model to estimate house prices in Tebet using a real-world property dataset.",
    challenge: "Raw listings contained missing values, duplicates, and inconsistent formatting that made direct analysis unreliable.",
    solution: "Cleaned and processed 1,000+ listings, then developed a reproducible model focused on data accuracy and explainable results.",
    features: [
      "Data-cleaning pipeline for 1,000+ listings",
      "Regression-based price prediction",
      "Reproducible and accuracy-focused workflow",
      "Structured process from raw data to output"
    ],
    tags: ["Python", "Pandas", "NumPy", "Regression Modeling"],
    image: "assets/projects/house-price.jpeg",
    caseUrl: "assets/projects/house-price-paper.pdf",
    caseCta: "View Research Paper"
  },
  {
    title: "HitTix — Concert Ticket Booking Platform",
    shortTitle: "HitTix",
    year: "2024",
    role: "UI/UX DESIGNER",
    desc: "A web-based concert discovery and ticket-booking experience, from browsing through checkout.",
    overview: "Designed the concert discovery and booking experience for HitTix from browsing to checkout.",
    challenge: "Confusing browsing and booking processes can lead to user drop-off, especially during high-demand releases.",
    solution: "Designed intuitive event browsing, detail, and booking flows aligned with the platform's system and database logic.",
    features: [
      "Streamlined event discovery",
      "Clear guided booking journey",
      "Collaborative system and database design",
      "PHP and MySQL backend-integration support"
    ],
    tags: ["Figma", "PHP", "MySQL", "System Analysis", "Database Design"],
    image: "assets/projects/hittix.jpeg",
    caseUrl: "https://github.com/sasaaa1504/HitTix",
    caseCta: "View Repository"
  },
  {
    title: "Posyandu Harapan Bunda Information System",
    shortTitle: "Posyandu Harapan Bunda",
    year: "2025",
    role: "UI/UX DESIGNER",
    desc: "A healthcare information system for registration, queues, and health-data recording.",
    overview: "Designed a web-based system supporting community-healthcare administration from registration to health-data recording.",
    challenge: "Paper-based record keeping makes participant registration, service queues, and data tracking slow and error-prone.",
    solution: "Designed a structured digital system covering registration, service queues, and health-data recording.",
    features: [
      "Participant profile management",
      "Digital service queues",
      "Structured health-data recording",
      "System design supporting operational efficiency"
    ],
    tags: ["Figma", "System Design", "Data Management"],
    image: "assets/projects/posyandu.jpeg",
    caseUrl: "https://www.figma.com/design/XujZDoCS5Lv8Yq1umJemmB/POSYANDU-WEBSITE?node-id=227-3005&t=q6BpYqJppELPjVKq-1",
    caseCta: "View Design"
  },
  {
    title: "Concert Lineup Optimization Dashboard",
    shortTitle: "Concert Lineup Optimizer",
    year: "2026",
    role: "UI/UX DESIGNER & FRONTEND CONTRIBUTOR",

    desc: "Designed and contributed to the frontend implementation of a dashboard for optimizing concert lineups based on energy flow, artist popularity, and headliner placement.",

    overview: "Designed a web-based dashboard that helps concert and music-festival organizers generate optimized artist performance schedules using a Genetic Algorithm. I contributed to the UI/UX design and frontend implementation, transforming complex scheduling parameters and optimization results into a clear and accessible digital experience.",

    challenge: "Concert lineup planning involves multiple considerations, including artist popularity, performance energy, and strategic headliner placement. The main challenge was presenting complex configuration options and optimization results through an interface that remains intuitive, structured, and easy for event organizers to use.",

    solution: "Designed a structured user flow covering festival-data management, algorithm configuration, and optimized lineup results. I also contributed to translating the interface design into reusable frontend components while maintaining a consistent visual hierarchy, responsive layout, and clear data presentation.",

    features: [
      "Festival and artist dataset management interface",
      "Genetic Algorithm parameter configuration flow",
      "Dashboard summary for festival and artist data",
      "Optimized lineup and energy-flow visualization",
      "Clear headliner placement indicators",
      "Responsive frontend interface",
      "PDF export for generated concert lineups"
    ],

    tags: [
      "Figma",
      "UI/UX Design",
      "React.js",
      "Tailwind CSS",
      "Prototyping",
      "Data Visualization"
    ],

    image: "assets/projects/concert-lineup-dashboard.jpeg",
    caseUrl: "https://github.com/odynamic/Lineup-Concert-Optimization",
    caseCta: "View Repository"
  },
  {
    title: "Expense & Budget Visualizer",
    shortTitle: "Budget Visualizer",
    year: "2026",
    role: "FRONTEND DEVELOPER & UI DESIGNER",

    desc: "A mobile-friendly web application for recording daily transactions, monitoring expenses, and visualizing spending patterns by category.",

    overview: "Developed as a mini project for the CodingCamp-20July26 bootcamp, this web application helps users record, organize, and visualize their daily expenses. The application provides transaction management, category-based visualizations, monthly summaries, and budget-limit indicators through a simple and accessible interface.",

    challenge: "Managing daily expenses manually makes it difficult for users to understand their spending patterns, compare expenses across categories, and identify transactions that exceed their personal budget. The project also required all data and interactions to work directly in the browser without a backend or external database.",

    solution: "Designed and developed a responsive expense-management dashboard using vanilla HTML, CSS, and JavaScript. Browser LocalStorage was used to preserve transaction data, while Chart.js was integrated to transform expense records into an easy-to-understand category-based pie chart.",

    features: [
      "Transaction input with item, amount, category, and month fields",
      "Required-field validation before transaction submission",
      "Scrollable transaction list with delete functionality",
      "Automatically updated total expense balance",
      "Category-based expense visualization using Chart.js",
      "Monthly expense summaries and category filtering",
      "Transaction sorting by amount or category",
      "Budget-limit settings with overspending indicators",
      "Persistent transaction data using Browser LocalStorage"
    ],

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Chart.js",
      "LocalStorage",
      "Responsive Design"
    ],

    image: "assets/projects/expense-budget-visualizer.jpeg",

      caseUrl: "https://github.com/sasaaa1504/CodingCamp-20July26-KhansaNurKhalisah",
      caseCta: "View Repository"
  },
  {
    title: "Khansa Nur Khalisah — Static Portfolio",
    shortTitle: "Personal Portfolio Website",
    year: "2026",
    role: "UI/UX DESIGNER & FRONTEND DEVELOPER",

    desc: "Designed and developed a responsive personal portfolio website showcasing projects, experiences, skills, certificates, and professional contact information.",

    overview: "Designed and developed a personal portfolio website to present my multidisciplinary experience across UI/UX design, data analytics, data management, and digital product development. The website was built using vanilla HTML, CSS, and JavaScript, making it lightweight, accessible, and easy to deploy through GitHub and Vercel.",

    challenge: "The main challenge was organizing a large amount of professional information into a cohesive and engaging experience without overwhelming visitors. The website also needed to remain responsive across laptop, tablet, and mobile screens while supporting several interactive components without relying on external frameworks.",

    solution: "Created a futuristic and responsive portfolio interface with a structured content hierarchy, reusable project cards, interactive case-study modals, category-based experience filtering, and touch-friendly carousels. Content was separated from presentation logic through JavaScript data arrays, allowing projects, experiences, skills, and certificates to be updated without changing the main HTML structure.",

    features: [
      "Responsive layout for desktop, tablet, and mobile screens",
      "Dynamic project cards with interactive case-study modals",
      "Experience filtering by internship, organization, and project",
      "Swipe-enabled skills and certificate carousels",
      "Automatic certificate slider with navigation controls",
      "Responsive mobile navigation with hamburger menu",
      "Downloadable CV and integrated social-media links",
      "Data-driven content management using JavaScript arrays",
      "GitHub integration and automatic deployment through Vercel"
    ],

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "UI/UX Design",
      "Vercel"
    ],

    image: "assets/projects/personal-portfolio-website.jpeg",

    caseUrl: "https://portofolio-khansa-nur-khalisah.vercel.app",

    caseCta: "View Live Website"
  }
];

const experiences = [
  ["organization", "2026", "Public Relations", "Volunteer Purwokerto", "Managed external communication, community engagement, and partnerships for social initiatives."],
  ["internship", "2025", "UI/UX Designer Intern", "Kilang Pertamina Internasional", "Designed an IT service monitoring dashboard and data-visualization mockups with developers and IT teams."],
  ["organization", "2025", "Chairman of Dies Natalis Informatics", "Faculty of Engineering, Unsoed", "Led 6 divisions and 40+ committee members through planning, resources, budgets, and execution."],
  ["organization", "2025", "Digital Marketing", "Smartani Greenhouse IoT Monitoring", "Built brand awareness through consistent Instagram and TikTok content strategy."],
  ["organization", "2025", "Tracer Study Surveyor Team", "Faculty of Engineering, Unsoed", "Collected and verified alumni career data for evaluation, accreditation, and graduate-employability reporting."],
  ["project", "2025", "Posyandu Harapan Bunda", "UI/UX Designer", "Designed a healthcare system for administration, registration, service queues, and health-data recording."],
  ["organization", "2024", "Data Analysis & Research Staff", "BEM Unsoed", "Analyzed organizational data and prepared research-based recommendations for internal programs."],
  ["project", "2024", "Dreamday Planner", "UI/UX Designer", "Designed order, scheduling, and event-management flows and refined them through usability testing."],
  ["project", "2024", "House Price Prediction in Tebet", "Researcher & Developer", "Cleaned 1,000+ property listings and developed a regression model using Python, Pandas, and NumPy."],
  ["project", "2024", "NBA Training Camp App", "UI/UX Designer", "Designed registration experiences and reusable components for interface consistency."],
  ["project", "2024", "HitTix Concert Ticket Booking", "UI/UX Designer", "Designed discovery, event-detail, and booking flows while contributing to system and database design."],
  ["internship", "2023", "Organizational Internship", "BEM Unsoed", "Supported departmental initiatives while learning organizational operations, collaboration, and student leadership."]
].map(([category, year, title, place, text]) => ({ category, year, title, place, text }));

const filters = [
  { id: "all", label: "All Experience", icon: "✦" },
  { id: "internship", label: "Internship", icon: "▣" },
  { id: "organization", label: "Organization", icon: "◎" },
  { id: "project", label: "Project Experience", icon: "◇" }
];

const skillGroups = [
  ["01", "Data & Analytics", ["Python", "Pandas", "NumPy", "Data Analysis", "Microsoft Excel", "Google Sheets"]],
  ["02", "Data Management", ["SQL", "MySQL", "Database Systems", "Data Cleaning", "Data Recording"]],
  ["03", "UI/UX Design", ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping", "Design System"]],
  ["04", "Development & Systems", ["PHP", "MySQL", "System Analysis", "Web Development", "Backend Integration"]],
  ["05", "Digital & Collaboration", ["Canva", "Digital Marketing", "Social Media", "Microsoft Office", "Team Leadership"]],
  ["06", "Project & Organization Management", ["Event Planning", "Budget & Timeline Management", "Cross-functional Coordination", "Public Relations", "Stakeholder Communication"]]
].map(([code, title, skills]) => ({ code, title, skills }));

const certificates = [
  ["01", "pertamina-internship.jpg", "Pertamina internship certificate"],
  ["02", "hmif-2025.jpg", "HMIF Unsoed 2025 certificate"],
  ["03", "dies-natalis.jpg", "Dies Natalis Informatics certificate"],
  ["04", "bem-impulse.jpg", "BEM Unsoed Impulse certificate"],
  ["05", "research-data-2024.jpg", "Research and Data staff certificate"],
  ["06", "student-summit-2024.jpg", "Soedirman Student Summit 2024 certificate"],
  ["07", "revou-digital-marketing.jpg", "RevoU Digital Marketing certificate"],
  ["08", "revou-data-analytics.jpg", "RevoU Data Analytics certificate"],
  ["09", "inflasi-2023.jpg", "INFLASI 2023 certificate"],
  ["10", "excel-bootcamp-2026.jpg", "Microsoft Excel bootcamp certificate"],
  ["11", "sertiflustrum.jpeg", "sertifikatlustrum"],
  ["12", "sertifpelatihandesign.jpeg", "Pelatihan Design"],
  ["13", "sertifpraktikum.jpeg", "Awarding Best Team"],
  ["14", "sertifseniko.jpeg", "Panitia Seniko"],
].map(([number, file, alt]) => ({ number, src: `assets/certificates/${file}`, alt }));

const state = {
  experienceFilter: "all",
  skill: 0,
  certificate: 0,
  skillSwipeStart: null,
  certificateSwipeStart: null
};

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const tagsHtml = (tags) => tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");

function renderProjects() {
  document.querySelector("#projects-grid").innerHTML = projects.map((project, index) => `
    <article class="project-card">
      <div class="project-number">0${index + 1}</div>
      <div class="project-content">
        <p>${project.year} / ${escapeHtml(project.role)}</p>
        <h3>${escapeHtml(project.shortTitle)}</h3>
        <p>${escapeHtml(project.desc)}</p>
        <p class="core-tech-label">CORE TECHNOLOGIES</p>
        <div class="tags">${tagsHtml(project.tags)}</div>
       <button
        type="button"
        data-project="${index}"
        class="case-study-button"
        aria-label="View ${escapeHtml(project.title)} case study"
      >
        <span>View Case Study</span>
        <svg class="button-arrow" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M4 12L12 4M6 4h6v6"></path>
        </svg>
      </button>
      </div>
    </article>
  `).join("");
}

function openProject(index) {
  const project = projects[index];
  const modal = document.querySelector("#case-modal");
  document.querySelector("#case-image").src = project.image;
  document.querySelector("#case-image").alt = `${project.shortTitle} interface preview`;
  document.querySelector("#case-number").textContent = `CASE STUDY / 0${index + 1}`;
  document.querySelector("#case-year").textContent = project.year;
  document.querySelector("#case-study-title").textContent = project.title;
  document.querySelector("#case-role").textContent = project.role;
  document.querySelector("#case-overview").textContent = project.overview;
  document.querySelector("#case-challenge").textContent = project.challenge;
  document.querySelector("#case-solution").textContent = project.solution;
  document.querySelector("#case-features").innerHTML = project.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("");
  document.querySelector("#case-tags").innerHTML = tagsHtml(project.tags);
  const link = document.querySelector("#case-link");
link.href = project.caseUrl;
link.innerHTML = `${escapeHtml(project.caseCta)}&nbsp; ↗`;

let secondLink = document.querySelector("#case-link-secondary");

if (!secondLink) {
  secondLink = link.cloneNode(true);
  secondLink.id = "case-link-secondary";
  link.insertAdjacentElement("afterend", secondLink);
}

if (project.caseUrl2) {
  secondLink.href = project.caseUrl2;
  secondLink.innerHTML = `${escapeHtml(project.caseCta2 || "View Additional Project")}&nbsp; ↗`;
  secondLink.hidden = false;
} else {
  secondLink.hidden = true;
  secondLink.removeAttribute("href");
}

modal.hidden = false;
document.body.style.overflow = "hidden";
document.querySelector(".case-close").focus();
  document.body.style.overflow = "hidden";
  document.querySelector(".case-close").focus();
}

function closeProject() {
  document.querySelector("#case-modal").hidden = true;
  document.body.style.overflow = "";
}

function renderExperienceTabs() {
  document.querySelector("#experience-tabs").innerHTML = filters.map((filter) => {
    const count = filter.id === "all" ? experiences.length : experiences.filter((item) => item.category === filter.id).length;
    return `<button type="button" role="tab" data-filter="${filter.id}" aria-selected="${state.experienceFilter === filter.id}" class="${state.experienceFilter === filter.id ? "active" : ""}"><span>${filter.icon}</span>${filter.label}<small>${count}</small></button>`;
  }).join("");
}

function renderTimeline() {
  const visible = experiences.filter((item) => state.experienceFilter === "all" || item.category === state.experienceFilter);
  document.querySelector("#timeline").innerHTML = visible.map((item) => `
    <article class="timeline-entry">
      <div class="timeline-year">${item.year}</div>
      <div class="timeline-dot"></div>
      <div class="timeline-copy">
        <span class="experience-type">${filters.find((filter) => filter.id === item.category).label}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p class="place">${escapeHtml(item.place)}</p>
        <p>${escapeHtml(item.text)}</p>
      </div>
    </article>
  `).join("");
}

function positionClass(index, active, length) {
  if (index === active) return "active";
  if (index === (active - 1 + length) % length) return "previous";
  if (index === (active + 1) % length) return "next";
  return "hidden";
}

function renderSkills() {
  document.querySelector("#skills-track").innerHTML = skillGroups.map((group, index) => `
    <article class="skill-slide ${positionClass(index, state.skill, skillGroups.length)}" aria-hidden="${index !== state.skill}">
      <div class="skill-head"><span>${group.code}</span><div class="skill-icon">✦</div></div>
      <h3>${escapeHtml(group.title)}</h3>
      <div class="skill-tags">${tagsHtml(group.skills)}</div>
    </article>
  `).join("");
  document.querySelector("#skill-dots").innerHTML = skillGroups.map((group, index) => `<button type="button" data-skill="${index}" class="${index === state.skill ? "active" : ""}" aria-label="Show ${escapeHtml(group.title)}" aria-current="${index === state.skill}"></button>`).join("");
}

function changeSkill(direction) {
  state.skill = (state.skill + direction + skillGroups.length) % skillGroups.length;
  renderSkills();
}

function renderCertificates() {
  document.querySelector("#certificate-track").innerHTML = certificates.map((item, index) => `
    <figure class="certificate-slide ${positionClass(index, state.certificate, certificates.length)}" aria-hidden="${index !== state.certificate}">
      <div class="certificate-image">
        <img src="${item.src}" alt="${escapeHtml(item.alt)}">
        <b>${item.number} / ${String(certificates.length).padStart(2, "0")}</b>
      </div>
    </figure>
  `).join("");
  document.querySelector("#certificate-dots").innerHTML = certificates.map((_, index) => `<button type="button" data-certificate="${index}" class="${index === state.certificate ? "active" : ""}" aria-label="Show certificate ${index + 1}" aria-current="${index === state.certificate}"></button>`).join("");
}

function changeCertificate(direction) {
  state.certificate = (state.certificate + direction + certificates.length) % certificates.length;
  renderCertificates();
}

function setupNavigation() {
  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector(".nav");
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.textContent = isOpen ? "×" : "☰";
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
  nav.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    nav.classList.remove("open");
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-expanded", "false");
  });
}

function setupInteractions() {
  document.addEventListener("click", (event) => {
    const projectButton = event.target.closest("[data-project]");
    if (projectButton) openProject(Number(projectButton.dataset.project));

    const filterButton = event.target.closest("[data-filter]");
    if (filterButton) {
      state.experienceFilter = filterButton.dataset.filter;
      renderExperienceTabs();
      renderTimeline();
    }

    const skillDot = event.target.closest("[data-skill]");
    if (skillDot) {
      state.skill = Number(skillDot.dataset.skill);
      renderSkills();
    }

    const skillAction = event.target.closest("[data-skill-action]");
    if (skillAction) changeSkill(skillAction.dataset.skillAction === "next" ? 1 : -1);

    const certificateDot = event.target.closest("[data-certificate]");
    if (certificateDot) {
      state.certificate = Number(certificateDot.dataset.certificate);
      renderCertificates();
    }

    const certificateAction = event.target.closest("[data-certificate-action]");
    if (certificateAction) changeCertificate(certificateAction.dataset.certificateAction === "next" ? 1 : -1);
  });

  document.querySelector(".case-close").addEventListener("click", closeProject);
  document.querySelector("#case-modal").addEventListener("mousedown", (event) => {
    if (event.target === event.currentTarget) closeProject();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !document.querySelector("#case-modal").hidden) closeProject();
  });

  const bindSwipe = (element, startKey, callback) => {
    element.addEventListener("touchstart", (event) => { state[startKey] = event.touches[0].clientX; }, { passive: true });
    element.addEventListener("touchend", (event) => {
      if (state[startKey] === null) return;
      const distance = event.changedTouches[0].clientX - state[startKey];
      if (Math.abs(distance) > 45) callback(distance < 0 ? 1 : -1);
      state[startKey] = null;
    }, { passive: true });
  };
  bindSwipe(document.querySelector("#skills-carousel"), "skillSwipeStart", changeSkill);
  bindSwipe(document.querySelector("#certificate-carousel"), "certificateSwipeStart", changeCertificate);
}

function setupAboutAnimation() {
  const about = document.querySelector("#about");
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    about.classList.add("is-visible");
    observer.disconnect();
  }, { threshold: 0.35 });
  observer.observe(about);
}

renderProjects();
renderExperienceTabs();
renderTimeline();
renderSkills();
renderCertificates();
setupNavigation();
setupInteractions();
setupAboutAnimation();

window.setInterval(() => changeCertificate(1), 5000);

/* Portfolio loading screen */
const preloader = document.querySelector("#preloader");
const loadingPercentage = document.querySelector("#loading-percentage");
const loadingProgress = document.querySelector("#loading-progress");

if (preloader && loadingPercentage && loadingProgress) {
  document.body.classList.add("loading");

  let loadingValue = 0;

  const loadingInterval = setInterval(() => {
    loadingValue += Math.floor(Math.random() * 8) + 2;

    if (loadingValue >= 100) {
      loadingValue = 100;
      clearInterval(loadingInterval);

      setTimeout(() => {
        preloader.classList.add("hide");
        document.body.classList.remove("loading");

        setTimeout(() => {
          preloader.remove();
        }, 700);
      }, 450);
    }

    loadingPercentage.textContent = `${loadingValue}%`;
    loadingProgress.style.width = `${loadingValue}%`;
  }, 90);
}
/* Dark and light mode */
const themeToggle = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
  document.documentElement.setAttribute("data-theme", "light");
}

function updateThemeButton() {
  if (!themeToggle) return;

  const isLight =
    document.documentElement.getAttribute("data-theme") === "light";

  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark mode" : "Switch to light mode"
  );
}

updateThemeButton();

themeToggle?.addEventListener("click", () => {
  const isLight =
    document.documentElement.getAttribute("data-theme") === "light";

  if (isLight) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("portfolio-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("portfolio-theme", "light");
  }

  updateThemeButton();
});