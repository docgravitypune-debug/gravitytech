import { useEffect, useMemo, useRef, useState } from "react";
import logoUrl from "../assets/logo.svg";
import {
  careerTracks,
  categoryIcons,
  categoryLabels,
  clients,
  processSteps,
  projectData,
  services,
} from "./data";
import { readEntries, saveEntry, storageKeys } from "./storage";

const projectTracks = ["all", "java", "python", "analytics", "web"];
const currentYear = new Date().getFullYear();

export default function App({ page }) {
  const [toast, setToast] = useState("");
  const toastTimer = useRef();

  useEffect(() => {
    document.title =
      page === "careers"
        ? "Careers | GravityTech Software"
        : "GravityTech Software | Real-Time Client Projects";
  }, [page]);

  useEffect(() => {
    if (!toast) {
      return undefined;
    }

    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(""), 4200);

    return () => window.clearTimeout(toastTimer.current);
  }, [toast]);

  const showToast = (message) => setToast(message);

  return (
    <>
      {page === "careers" ? <CareersPage showToast={showToast} /> : <HomePage showToast={showToast} />}
      <Toast message={toast} />
    </>
  );
}

function Header({ page }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const links =
    page === "careers"
      ? [
          { href: "index.html#services", label: "Services" },
          { href: "index.html#projects", label: "Projects" },
          { href: "#openings", label: "Openings" },
          { href: "#apply", label: "Apply" },
        ]
      : [
          { href: "#services", label: "Services" },
          { href: "#projects", label: "Projects" },
          { href: "#process", label: "Process" },
          { href: "#clients", label: "Clients" },
          { href: "careers.html", label: "Careers" },
        ];

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Primary navigation">
        <Brand href="index.html" size={54} />
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span />
          <span />
          <span />
        </button>
        <ul id="primary-menu" className={`nav-links ${isOpen ? "open" : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="button button-small"
              href={page === "careers" ? "index.html#contact" : "#contact"}
              onClick={closeMenu}
            >
              {page === "careers" ? "Hire Us" : "Start a Project"}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Brand({ href, footer = false, size = 46 }) {
  return (
    <a
      className={`brand ${footer ? "brand-footer" : ""}`}
      href={href}
      aria-label="GravityTech Software home"
    >
      <img src={logoUrl} alt="" width={size} height={size} />
      <span>
        <strong>GravityTech</strong>
        <small>Software</small>
      </span>
    </a>
  );
}

function HomePage({ showToast }) {
  return (
    <>
      <Header page="home" />
      <main>
        <HomeHero />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <ClientsSection />
        <CareerCta />
        <ContactSection showToast={showToast} />
      </main>
      <Footer
        description="Dynamic software project delivery and career-ready real-time project work."
        links={[
          { href: "#services", label: "Services" },
          { href: "#projects", label: "Projects" },
          { href: "#clients", label: "Clients" },
          { href: "careers.html", label: "Careers" },
        ]}
        tracks={["Java", "Python", "Data Analytics"]}
      />
    </>
  );
}

function HomeHero() {
  const metricItems = useMemo(
    () => [
      { label: "Project modules", value: 24 },
      { label: "Technology tracks", value: 6 },
      { label: "Practical focus", value: 100, suffix: "%" },
    ],
    [],
  );
  const metrics = useAnimatedMetrics(metricItems);

  return (
    <section className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Client project delivery + career-ready training</p>
          <h1>Build real software projects with GravityTech Software.</h1>
          <p className="hero-text">
            We help businesses launch dependable technology solutions and give candidates practical
            exposure to real-time client project work across Java, Python, data analytics, web apps,
            and cloud-ready systems.
          </p>
          <div className="hero-actions">
            <a className="button" href="#projects">
              Explore Tech Projects
            </a>
            <a className="button button-secondary" href="careers.html">
              Apply for Project Work
            </a>
          </div>
          <dl className="hero-metrics" aria-label="GravityTech delivery highlights">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <dt>
                  {metric.current}
                  {metric.suffix || ""}
                </dt>
                <dd>{metric.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <aside className="hero-card" aria-label="Featured project lab">
          <div className="orbit-card">
            <img src={logoUrl} alt="GravityTech Software logo" />
            <h2>Real-Time Client Project Lab</h2>
            <p>
              Join guided delivery sprints, contribute to practical modules, and learn how
              production software is planned, built, tested, and shipped.
            </p>
            <ul className="check-list">
              <li>Java enterprise APIs</li>
              <li>Python automation and ML</li>
              <li>Data analytics dashboards</li>
              <li>Client documentation and demos</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="section section-muted">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">What we offer</p>
          <h2>Technology services for clients and learners.</h2>
          <p>
            GravityTech Software combines project delivery, practical mentoring, and
            industry-oriented development tracks so every engagement produces usable work.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="card-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const projects = useMemo(
    () =>
      activeFilter === "all"
        ? projectData
        : projectData.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">Dynamic project catalog</p>
            <h2>Choose a technology track.</h2>
          </div>
          <p>
            Filter live project ideas by technology. These examples can be customized for client
            requirements, student capstones, internships, and corporate portfolios.
          </p>
        </div>
        <div className="filter-bar" role="tablist" aria-label="Project technology filters">
          {projectTracks.map((track) => (
            <button
              className={`filter-button ${activeFilter === track ? "active" : ""}`}
              key={track}
              type="button"
              onClick={() => setActiveFilter(track)}
            >
              {categoryLabels[track]}
            </button>
          ))}
        </div>
        <div id="project-grid" className="project-grid" aria-live="polite">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <header>
        <div>
          <span className="tag">{categoryLabels[project.category]}</span>
          <h3>{project.title}</h3>
        </div>
        <span className="card-icon">{categoryIcons[project.category] || "GT"}</span>
      </header>
      <p>{project.description}</p>
      <div className="project-meta">
        <span>{project.level}</span>
        <span>{project.timeline}</span>
        {project.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </article>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="section section-dark">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">How delivery works</p>
          <h2>From client requirement to working demo.</h2>
        </div>
        <ol className="process-grid">
          {processSteps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ClientsSection() {
  return (
    <section id="clients" className="section section-muted">
      <div className="container">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">Our clients</p>
            <h2>Trusted by growing software, education, and infrastructure teams.</h2>
          </div>
          <p>
            GravityTech Software supports real-time project work and technology delivery for a
            diverse client network across software services, consultancy, engineering, education,
            and infrastructure.
          </p>
        </div>
        <div className="client-grid" aria-label="GravityTech client list">
          {clients.map((client) => (
            <article className="client-card" key={client}>
              <span>{getClientInitials(client)}</span>
              <h3>{client}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareerCta() {
  return (
    <section className="section">
      <div className="container cta-panel">
        <div>
          <p className="eyebrow">Careers and internships</p>
          <h2>Want real-time project experience?</h2>
          <p>
            Apply for GravityTech's project work program and select the technology track that best
            matches your goals.
          </p>
        </div>
        <a className="button" href="careers.html">
          View Career Page
        </a>
      </div>
    </section>
  );
}

function ContactSection({ showToast }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const saved = saveEntry(storageKeys.project, {
      ...data,
      submittedAt: new Date().toISOString(),
    });

    showToast(
      saved
        ? "Requirement saved locally. We can add backend email or CRM integration next."
        : "Requirement received, but this browser blocked local demo storage.",
    );
    form.reset();
  };

  return (
    <section id="contact" className="section section-muted">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Start with GravityTech</p>
          <h2>Tell us what you want to build.</h2>
          <p>
            Share your project requirement or learning goal. The demo form stores your request
            locally in this browser and can be connected to a backend later.
          </p>
          <div className="contact-list">
            <a href="mailto:hello@gravitytechsoftware.com">hello@gravitytechsoftware.com</a>
            <a href="tel:+919999999999">+91 99999 99999</a>
            <span>Java | Python | Data Analytics | Web Apps</span>
          </div>
        </div>
        <form className="form-card" onSubmit={handleSubmit}>
          <label>
            Full name
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            Email address
            <input name="email" type="email" placeholder="you@example.com" required />
          </label>
          <label>
            Project interest
            <select name="interest" required defaultValue="">
              <option value="">Select a track</option>
              <option>Java Project</option>
              <option>Python Project</option>
              <option>Data Analytics Project</option>
              <option>Website / Cloud Project</option>
              <option>Client Software Development</option>
            </select>
          </label>
          <label>
            Requirement
            <textarea
              name="message"
              rows="4"
              placeholder="Describe your project or training need"
              required
            />
          </label>
          <button className="button" type="submit">
            Submit Requirement
          </button>
          <p className="form-note">
            No backend is connected yet; submissions are saved in local storage for demo review.
          </p>
        </form>
      </div>
    </section>
  );
}

function CareersPage({ showToast }) {
  const [selectedTrack, setSelectedTrack] = useState("");
  const [applications, setApplications] = useState(() => readEntries(storageKeys.career));

  const handleTrackApply = (track) => {
    setSelectedTrack(track);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const entry = {
      ...data,
      submittedAt: new Date().toISOString(),
    };
    const saved = saveEntry(storageKeys.career, entry);

    if (saved) {
      setApplications(readEntries(storageKeys.career));
    }

    showToast(
      saved
        ? "Application saved. GravityTech can connect this form to a backend next."
        : "Application received, but this browser blocked local demo storage.",
    );
    setSelectedTrack("");
    form.reset();
  };

  return (
    <>
      <Header page="careers" />
      <main>
        <CareerHero />
        <OpeningsSection onTrackApply={handleTrackApply} />
        <ProgramHighlights />
        <ApplicationSection
          applications={applications}
          onSubmit={handleSubmit}
          selectedTrack={selectedTrack}
          setSelectedTrack={setSelectedTrack}
        />
        <FaqSection />
      </main>
      <Footer
        description="Apply for practical client-style project work and software career growth."
        links={[
          { href: "index.html#services", label: "Services" },
          { href: "index.html#projects", label: "Projects" },
          { href: "#apply", label: "Apply" },
        ]}
        heading="Career tracks"
        tracks={["Java Developer", "Python Developer", "Data Analyst"]}
      />
    </>
  );
}

function CareerHero() {
  return (
    <section className="hero section career-hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Careers and real-time project work</p>
          <h1>Grow with live client-style software projects.</h1>
          <p className="hero-text">
            GravityTech Software welcomes freshers, interns, and early-career developers who want
            hands-on project exposure in Java, Python, data analytics, web apps, and software
            delivery practices.
          </p>
          <div className="hero-actions">
            <a className="button" href="#apply">
              Apply Now
            </a>
            <a className="button button-secondary" href="#openings">
              See Tracks
            </a>
          </div>
        </div>
        <aside className="career-panel">
          <h2>What you will practice</h2>
          <ul className="check-list">
            <li>Requirement analysis from real client scenarios</li>
            <li>Git, code reviews, documentation, and demos</li>
            <li>Backend, frontend, analytics, and deployment tasks</li>
            <li>Portfolio-ready project outcomes</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

function OpeningsSection({ onTrackApply }) {
  return (
    <section id="openings" className="section section-muted">
      <div className="container">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">Open project tracks</p>
            <h2>Choose your career path.</h2>
          </div>
          <p>
            Each track is designed around practical client project tasks so applicants can build
            confidence with production-style work.
          </p>
        </div>
        <div id="career-grid" className="career-grid" aria-live="polite">
          {careerTracks.map((track) => (
            <article className="career-card" key={track.title}>
              <header>
                <div>
                  <span className="tag">{track.type}</span>
                  <h3>{track.title}</h3>
                </div>
              </header>
              <p>{track.description}</p>
              <div className="career-meta">
                {track.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a
                className="button button-small"
                href="#apply"
                onClick={() => onTrackApply(track.title)}
              >
                Apply for this track
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramHighlights() {
  return (
    <section className="section">
      <div className="container learning-grid">
        <div>
          <p className="eyebrow">Program highlights</p>
          <h2>Built around real delivery habits.</h2>
          <p>
            Our career page focuses on practical outcomes: working modules, technical
            presentations, reusable components, and project documentation.
          </p>
        </div>
        <div className="highlight-list">
          <article>
            <h3>Mentored sprint work</h3>
            <p>Break client requirements into tickets and deliver usable software increments.</p>
          </article>
          <article>
            <h3>Technology specialization</h3>
            <p>Pick Java, Python, data analytics, frontend, or full-stack project work.</p>
          </article>
          <article>
            <h3>Demo-ready portfolio</h3>
            <p>Prepare explanations, screenshots, documentation, and deployment notes.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function ApplicationSection({ applications, onSubmit, selectedTrack, setSelectedTrack }) {
  return (
    <section id="apply" className="section section-dark">
      <div className="container application-grid">
        <div>
          <p className="eyebrow">Apply now</p>
          <h2>Submit your career interest.</h2>
          <p>
            Complete the form to register interest in GravityTech project work. The dynamic demo
            saves applications locally and shows a recent submission list below.
          </p>
          <div className="saved-applications">
            <h3>Recent local applications</h3>
            <ul id="application-list">
              {applications.length === 0 ? (
                <li>No applications submitted in this browser yet.</li>
              ) : (
                applications.slice(0, 4).map((application) => (
                  <li key={`${application.email}-${application.submittedAt}`}>
                    <strong>{application.name}</strong> - {application.track} (
                    {formatDate(application.submittedAt)})
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        <form className="form-card form-card-light" onSubmit={onSubmit}>
          <label>
            Full name
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            Email address
            <input name="email" type="email" placeholder="you@example.com" required />
          </label>
          <label>
            Phone number
            <input name="phone" type="tel" placeholder="+91 99999 99999" required />
          </label>
          <label>
            Preferred track
            <select
              name="track"
              required
              value={selectedTrack}
              onChange={(event) => setSelectedTrack(event.target.value)}
            >
              <option value="">Select a track</option>
              <option>Java Developer Project Work</option>
              <option>Python Developer Project Work</option>
              <option>Data Analytics Project Work</option>
              <option>Frontend / Full-Stack Project Work</option>
              <option>Software Testing and QA</option>
            </select>
          </label>
          <label>
            Experience level
            <select name="experience" required defaultValue="">
              <option value="">Select experience</option>
              <option>Fresher</option>
              <option>Student / Intern</option>
              <option>0-1 Year</option>
              <option>1-3 Years</option>
              <option>Career Switcher</option>
            </select>
          </label>
          <label>
            Tell us about your goal
            <textarea
              name="message"
              rows="4"
              placeholder="Mention skills, project interests, and availability"
              required
            />
          </label>
          <button className="button" type="submit">
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="section">
      <div className="container faq-wrap">
        <div className="section-heading">
          <p className="eyebrow">Questions</p>
          <h2>Career page FAQ.</h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>Do I need previous project experience?</summary>
            <p>
              No. Freshers and students can apply. We match tasks to the selected track and current
              skill level.
            </p>
          </details>
          <details>
            <summary>Which technologies are available?</summary>
            <p>
              GravityTech focuses on Java, Python, data analytics, frontend, full-stack, cloud, and
              QA project work.
            </p>
          </details>
          <details>
            <summary>Can client requirements be customized?</summary>
            <p>
              Yes. Project modules can be shaped around client workflows, academic requirements, or
              portfolio goals.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}

function Footer({ description, links, tracks, heading = "Tracks" }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Brand href="index.html" footer />
          <p>{description}</p>
        </div>
        <div>
          <h3>Explore</h3>
          {links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div>
          <h3>{heading}</h3>
          {tracks.map((track) => (
            <span key={track}>{track}</span>
          ))}
        </div>
      </div>
      <p className="copyright">&copy; {currentYear} GravityTech Software. All rights reserved.</p>
    </footer>
  );
}

function Toast({ message }) {
  return (
    <div className={`toast ${message ? "visible" : ""}`} role="status" aria-live="polite">
      {message}
    </div>
  );
}

function useAnimatedMetrics(metrics) {
  const [progress, setProgress] = useState(() => metrics.map(() => 0));

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setProgress(metrics.map((metric) => metric.value));
      return undefined;
    }

    let frameId;
    const start = performance.now();
    const duration = 900;

    function tick(now) {
      const ratio = Math.min((now - start) / duration, 1);
      setProgress(metrics.map((metric) => Math.round(metric.value * ratio)));

      if (ratio < 1) {
        frameId = requestAnimationFrame(tick);
      }
    }

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [metrics]);

  return metrics.map((metric, index) => ({
    ...metric,
    current: progress[index],
  }));
}

function formatDate(value) {
  return new Date(value).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getClientInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}
