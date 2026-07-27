"use strict";

const projects = [
  {
    title: "Pertamina RU IV Employee Scheduling System",
    shortTitle: "Pertamina Scheduling System",
    year: "2025",
    role: "UI/UX DESIGNER",
    desc: "A preventive-maintenance scheduling interface designed around real operational needs at Fungsi IT RU IV.",
    overview: "Designed a scheduling interface for Fungsi IT RU IV, Kilang Pertamina Internasional, to support and automate preventive maintenance planning for internal operational teams.",
    challenge: "Preventive-maintenance scheduling was handled manually, making it difficult to track timelines, avoid overlapping schedules, and monitor progress across internal units.",
    solution: "Designed an intuitive interface based on user research and operational needs so teams can plan, track, and monitor preventive-maintenance activities in one structured view.",
    features: [
      "Centralized preventive-maintenance scheduling",
      "Interface tailored to operational workflows",
      "Data-visualization mockups for daily monitoring",
      "Collaboration with developers and IT staff across 3+ internal tools"
    ],
    tags: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping"],
    image: "assets/projects/pertamina.jpeg",
    caseUrl: "https://www.figma.com/proto/mQY9zsMTE0XeCcQ5p3tF1v/KP-Sistem-Penjadwalan-Otomatis?node-id=411-4182&t=DL4AQhd9WBNx9XKB-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    caseCta: "View Prototype"
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
    caseUrl: "https://www.figma.com/proto/qJ4QGUwDaIIHGEriH5aqTW/HitTix?node-id=183-229&t=XT8BV5s969mO0h5z-1",
    caseCta: "View Prototype"
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
  ["10", "excel-bootcamp-2026.jpg", "Microsoft Excel bootcamp certificate"]
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
        <button type="button" data-project="${index}" aria-label="View ${escapeHtml(project.title)} case study">View Case Study&nbsp; ↗</button>
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
  modal.hidden = false;
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
