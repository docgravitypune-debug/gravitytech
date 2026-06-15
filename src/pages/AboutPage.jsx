import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageHero from "../components/PageHero.jsx";
import CoditasFeatureRows from "../components/CoditasFeatureRows.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx";
import GradientCard from "../components/GradientCard.jsx";
import ExploreTilesSection from "../sections/home/ExploreTilesSection.jsx";
import { aboutStats, aboutValues, processSteps, aboutFeatureRows } from "../data.js";
import { FolderKanban, Handshake } from "lucide-react";
import { Icon } from "../utils/icons.jsx";
import { pageHeroes } from "../pageHeroes.js";
import { routes } from "../routes.js";

const variants = ["cyan", "violet", "lime", "sunset"];

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
        <ExploreTilesSection
          eyebrow="Discover more"
          tiles={[
            {
              title: "Project Catalog",
              description: "See the modules and tracks GravityTech delivers.",
              to: routes.projects,
              variant: "cyan",
              icon: FolderKanban,
            },
            {
              title: "Client Network",
              description: "Explore the partners that trust our delivery model.",
              to: routes.clients,
              variant: "violet",
              icon: Handshake,
            },
          ]}
          title="Browse projects and clients from here."
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
              {aboutStats.map((stat, index) => (
                <GradientCard
                  className="about-stat-card"
                  delay={index * 0.05}
                  key={stat.label}
                  variant={variants[index % variants.length]}
                >
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </GradientCard>
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
              {aboutValues.map((value, index) => (
                <GradientCard
                  className="about-value-card"
                  delay={index * 0.06}
                  key={value.title}
                  variant={variants[index % variants.length]}
                >
                  <Icon name={value.icon} size={34} />
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </GradientCard>
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
              {processSteps.map((step, index) => (
                <GradientCard
                  as="li"
                  className="pro-process-step-card"
                  delay={index * 0.05}
                  key={step.number}
                  variant={variants[index % variants.length]}
                >
                  <strong>{step.number}</strong>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </GradientCard>
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
          { href: routes.clients, label: "Clients" },
        ]}
        heading="Focus"
        tracks={["Delivery", "Mentorship", "Analytics", "Automation"]}
      />
    </>
  );
}
