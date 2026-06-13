(function () {
  "use strict";

  const projectData = [
    {
      title: "Java CRM and Lead Management",
      category: "java",
      level: "Intermediate",
      timeline: "4 modules",
      description:
        "Build a Spring Boot CRM with lead capture, role-based access, status workflows, and dashboard reporting.",
      skills: ["Spring Boot", "REST API", "MySQL"],
    },
    {
      title: "Java Inventory and Billing System",
      category: "java",
      level: "Advanced",
      timeline: "5 modules",
      description:
        "Create purchase, stock, invoice, tax, and admin reporting modules for a business operations platform.",
      skills: ["Java", "Hibernate", "Admin UI"],
    },
    {
      title: "Python Automation Suite",
      category: "python",
      level: "Beginner",
      timeline: "3 modules",
      description:
        "Automate file processing, email alerts, spreadsheet cleanup, and daily report generation for client teams.",
      skills: ["Python", "Pandas", "Automation"],
    },
    {
      title: "Python AI Support Assistant",
      category: "python",
      level: "Advanced",
      timeline: "5 modules",
      description:
        "Prototype a support assistant with ticket classification, knowledge search, and response suggestions.",
      skills: ["Python", "NLP", "Flask"],
    },
    {
      title: "Sales Data Analytics Dashboard",
      category: "analytics",
      level: "Intermediate",
      timeline: "4 modules",
      description:
        "Analyze sales trends, product performance, region comparisons, and monthly KPIs with interactive charts.",
      skills: ["SQL", "Dashboards", "KPIs"],
    },
    {
      title: "Customer Churn Analytics",
      category: "analytics",
      level: "Advanced",
      timeline: "4 modules",
      description:
        "Prepare data, identify churn patterns, create scoring logic, and present insights for retention planning.",
      skills: ["Python", "EDA", "Reporting"],
    },
    {
      title: "Client Project Portal",
      category: "web",
      level: "Intermediate",
      timeline: "4 modules",
      description:
        "Deliver a responsive portal for project updates, document sharing, task progress, and client feedback.",
      skills: ["HTML", "JavaScript", "UX"],
    },
    {
      title: "Cloud-Ready Admin Dashboard",
      category: "web",
      level: "Advanced",
      timeline: "5 modules",
      description:
        "Build a secure admin dashboard with analytics cards, user management, deployment notes, and QA checklist.",
      skills: ["Frontend", "APIs", "Cloud"],
    },
  ];

  const careerTracks = [
    {
      title: "Java Developer Project Work",
      type: "Internship / Fresher",
      description:
        "Work on APIs, database schemas, admin flows, authentication, and enterprise project documentation.",
      tags: ["Java", "Spring Boot", "MySQL"],
    },
    {
      title: "Python Developer Project Work",
      type: "Internship / Fresher",
      description:
        "Practice automation, backend routes, data scripts, AI prototypes, and practical client utilities.",
      tags: ["Python", "Flask", "Automation"],
    },
    {
      title: "Data Analytics Project Work",
      type: "Internship / Fresher",
      description:
        "Clean data, write SQL, build dashboards, explain KPIs, and convert raw data into client insights.",
      tags: ["SQL", "Pandas", "Dashboard"],
    },
    {
      title: "Frontend and Full-Stack Trainee",
      type: "Project-based",
      description:
        "Create responsive pages, dashboards, reusable UI sections, API integrations, and demo-ready flows.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Software Testing and QA",
      type: "Project-based",
      description:
        "Write test cases, verify features, document bugs, validate workflows, and support release checklists.",
      tags: ["Manual QA", "Test Cases", "Bug Reports"],
    },
    {
      title: "Client Documentation Assistant",
      type: "Project-based",
      description:
        "Prepare project briefs, user guides, screenshots, demo scripts, and handover documentation.",
      tags: ["Docs", "Demos", "Delivery"],
    },
  ];

  const storageKeys = {
    project: "gravitytech_project_requests",
    career: "gravitytech_career_applications",
  };

  document.addEventListener("DOMContentLoaded", () => {
    setupNavigation();
    setYear();
    renderProjects("all");
    renderCareerTracks();
    setupProjectFilters();
    setupForms();
    renderApplicationList();
    animateCounters();
  });

  function setupNavigation() {
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.querySelector("#primary-menu");

    if (!toggle || !menu) {
      return;
    }

    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      document.body.classList.toggle("menu-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    menu.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        menu.classList.remove("open");
        document.body.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  function setYear() {
    document.querySelectorAll("[data-year]").forEach((element) => {
      element.textContent = String(new Date().getFullYear());
    });
  }

  function renderProjects(filter) {
    const grid = document.querySelector("#project-grid");

    if (!grid) {
      return;
    }

    const projects =
      filter === "all"
        ? projectData
        : projectData.filter((project) => project.category === filter);

    grid.innerHTML = projects
      .map(
        (project) => `
          <article class="project-card">
            <header>
              <div>
                <span class="tag">${formatCategory(project.category)}</span>
                <h3>${project.title}</h3>
              </div>
              <span class="card-icon">${getCategoryInitial(project.category)}</span>
            </header>
            <p>${project.description}</p>
            <div class="project-meta">
              <span>${project.level}</span>
              <span>${project.timeline}</span>
              ${project.skills.map((skill) => `<span>${skill}</span>`).join("")}
            </div>
          </article>
        `,
      )
      .join("");
  }

  function setupProjectFilters() {
    const buttons = document.querySelectorAll("[data-filter]");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        renderProjects(button.getAttribute("data-filter") || "all");
      });
    });
  }

  function renderCareerTracks() {
    const grid = document.querySelector("#career-grid");

    if (!grid) {
      return;
    }

    grid.innerHTML = careerTracks
      .map(
        (track) => `
          <article class="career-card">
            <header>
              <div>
                <span class="tag">${track.type}</span>
                <h3>${track.title}</h3>
              </div>
            </header>
            <p>${track.description}</p>
            <div class="career-meta">
              ${track.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            <a class="button button-small" href="#apply" data-track="${track.title}">Apply for this track</a>
          </article>
        `,
      )
      .join("");

    grid.querySelectorAll("[data-track]").forEach((link) => {
      link.addEventListener("click", () => {
        const trackSelect = document.querySelector('form[data-form="career"] select[name="track"]');

        if (trackSelect instanceof HTMLSelectElement) {
          trackSelect.value = link.getAttribute("data-track") || "";
        }
      });
    });
  }

  function setupForms() {
    document.querySelectorAll("form[data-form]").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!(form instanceof HTMLFormElement) || !form.reportValidity()) {
          return;
        }

        const formType = form.getAttribute("data-form");
        const data = Object.fromEntries(new FormData(form).entries());
        const entry = {
          ...data,
          submittedAt: new Date().toISOString(),
        };

        if (formType === "career") {
          saveEntry(storageKeys.career, entry);
          renderApplicationList();
          showToast("Application saved. GravityTech can connect this form to a backend next.");
        } else {
          saveEntry(storageKeys.project, entry);
          showToast("Requirement saved locally. We can add backend email or CRM integration next.");
        }

        form.reset();
      });
    });
  }

  function saveEntry(key, entry) {
    const existing = readEntries(key);
    existing.unshift(entry);
    localStorage.setItem(key, JSON.stringify(existing.slice(0, 8)));
  }

  function readEntries(key) {
    try {
      const value = localStorage.getItem(key);
      const parsed = value ? JSON.parse(value) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.warn("Unable to read saved GravityTech entries", error);
      return [];
    }
  }

  function renderApplicationList() {
    const list = document.querySelector("#application-list");

    if (!list) {
      return;
    }

    const applications = readEntries(storageKeys.career).slice(0, 4);

    if (applications.length === 0) {
      list.innerHTML = "<li>No applications submitted in this browser yet.</li>";
      return;
    }

    list.innerHTML = applications
      .map((application) => {
        const submittedDate = new Date(application.submittedAt).toLocaleDateString(undefined, {
          month: "short",
          day: "numeric",
          year: "numeric",
        });

        return `<li><strong>${application.name}</strong> - ${application.track} (${submittedDate})</li>`;
      })
      .join("");
  }

  function animateCounters() {
    const counters = document.querySelectorAll("[data-count-to]");

    if (counters.length === 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      counters.forEach((counter) => {
        counter.textContent = counter.getAttribute("data-count-to") || "0";
      });
      return;
    }

    counters.forEach((counter) => {
      const target = Number(counter.getAttribute("data-count-to"));
      const duration = 900;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.round(target * progress);
        counter.textContent = target === 100 ? `${value}%` : String(value);

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      }

      requestAnimationFrame(tick);
    });
  }

  function showToast(message) {
    const toast = document.querySelector(".toast");

    if (!toast) {
      return;
    }

    toast.textContent = message;
    toast.classList.add("visible");
    window.clearTimeout(showToast.timeoutId);
    showToast.timeoutId = window.setTimeout(() => {
      toast.classList.remove("visible");
    }, 4200);
  }

  function formatCategory(category) {
    const labels = {
      analytics: "Data Analytics",
      java: "Java",
      python: "Python",
      web: "Web & Cloud",
    };

    return labels[category] || category;
  }

  function getCategoryInitial(category) {
    const labels = {
      analytics: "DA",
      java: "J",
      python: "Py",
      web: "UX",
    };

    return labels[category] || "GT";
  }
})();
