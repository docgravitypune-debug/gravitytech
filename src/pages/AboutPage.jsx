import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageHero from "../components/PageHero.jsx";
import CoditasFeatureRows from "../components/CoditasFeatureRows.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx";
import { aboutStats, aboutValues, processSteps, aboutFeatureRows } from "../data.js";
import { Icon } from "../utils/icons.jsx";
import { pageHeroes } from "../pageHeroes.js";
import { routes } from "../routes.js";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="page-with-hero">
        <PageHero {...pageHeroes.about} />
        <CoditasFeatureRows
          rows={aboutFeatureRows}
          intro={{
            eyebrow: "Who we are",
            title: "A project-first",
            titleAccent: "software studio",
            subtitle: "We build practical software with clarity, quality, and momentum.",
          }}
        />

        <AnimatedSection className="pro-section pro-about">
          <div className="container about-story-grid">
            <div>
              <p className="pro-eyebrow">Who we are</p>
              <h2>We are a project-first software studio.</h2>
              <p>
                We build websites, dashboards, automation utilities, APIs, analytics systems, QA
                checklists, and client-ready documentation. Our process is designed so every project
                produces visible progress, reviewable work, and clear handover material.
              </p>
            </div>
            <div className="about-stat-grid">
              {aboutStats.map((stat) => (
                <article className="pro-form-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="pro-section">
          <div className="container">
            <div className="pro-section-head center">
              <p className="pro-eyebrow">Our values</p>
              <h2>Designed for quality, clarity, and growth.</h2>
              <p className="pro-section-copy">
                Our team keeps projects practical with scoped requirements, delivery checkpoints,
                readable code, useful documentation, and honest feedback.
              </p>
            </div>
            <div className="about-value-grid">
              {aboutValues.map((value) => (
                <article className="pro-pillar-card" key={value.title}>
                  <Icon name={value.icon} size={34} />
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="pro-section pro-methods">
          <div className="container">
            <div className="pro-section-head center">
              <p className="pro-eyebrow">How we work</p>
              <h2>Every project moves through a simple delivery system.</h2>
            </div>
            <ol className="pro-process-steps">
              {processSteps.map((step) => (
                <li key={step.number}>
                  <strong>{step.number}</strong>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </AnimatedSection>
      </main>
      <Footer
        description="GravityTech Software builds practical client software and career-ready project experiences."
        links={[
          { href: routes.services, label: "Services" },
          { href: routes.projects, label: "Projects" },
          { href: routes.careers, label: "Careers" },
          { href: routes.jobs, label: "Openings" },
        ]}
        heading="Focus"
        tracks={["Delivery", "Mentorship", "Analytics", "Automation"]}
      />
    </>
  );
}
