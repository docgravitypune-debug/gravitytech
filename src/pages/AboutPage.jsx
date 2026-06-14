import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import AnimatedBackground from "../components/AnimatedBackground.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx";
import { aboutStats, aboutValues, processSteps } from "../data.js";
import { Icon } from "../utils/icons.jsx";
import { routes } from "../routes.js";

export default function AboutPage() {
  return (
    <>
      <Header page="about" />
      <main>
        <section className="about-hero section futuristic-hero">
          <AnimatedBackground />
          <div className="container about-hero-grid">
            <div>
              <p className="eyebrow pulse-label">About GravityTech Software</p>
              <h1>
                Practical software delivery for clients and <span className="text-gradient">future-ready talent.</span>
              </h1>
            </div>
            <p>
              GravityTech Software helps clients shape real software projects and helps candidates
              gain experience through guided, production-style project work.
            </p>
          </div>
        </section>

        <AnimatedSection className="section section-muted">
          <div className="container about-story-grid">
            <div>
              <p className="eyebrow">Who we are</p>
              <h2>We are a project-first software studio.</h2>
              <p>
                We build websites, dashboards, automation utilities, APIs, analytics systems, QA
                checklists, and client-ready documentation. Our process is designed so every project
                produces visible progress, reviewable work, and clear handover material.
              </p>
            </div>
            <div className="about-stat-grid">
              {aboutStats.map((stat) => (
                <article className="glass-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="section">
          <div className="container">
            <div className="section-heading split">
              <div>
                <p className="eyebrow">Our values</p>
                <h2>Designed for quality, clarity, and growth.</h2>
              </div>
              <p>
                Our team keeps projects practical with scoped requirements, delivery checkpoints,
                readable code, useful documentation, and honest feedback.
              </p>
            </div>
            <div className="about-value-grid">
              {aboutValues.map((value) => (
                <article className="glass-card" key={value.title}>
                  <Icon name={value.icon} size={34} />
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="section section-dark">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">How we work</p>
              <h2>Every project moves through a simple delivery system.</h2>
            </div>
            <ol className="process-grid">
              {processSteps.map((step) => (
                <li className="glass-card dark-card" key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </AnimatedSection>
      </main>
      <Footer
        description="GravityTech Software builds practical client software and career-ready project experiences."
        links={[
          { href: `${routes.home}#services`, label: "Services" },
          { href: `${routes.home}#projects`, label: "Projects" },
          { href: routes.careers, label: "Careers" },
          { href: routes.jobs, label: "Openings" },
        ]}
        heading="Focus"
        tracks={["Delivery", "Mentorship", "Analytics", "Automation"]}
      />
    </>
  );
}
