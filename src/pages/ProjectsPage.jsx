import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageHero from "../components/PageHero.jsx";
import ProjectsSection from "../sections/home/ProjectsSection.jsx";
import { pageHeroes } from "../pageHeroes.js";
import { routes } from "../routes.js";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="page-with-hero">
        <PageHero {...pageHeroes.projects} />
        <ProjectsSection />
      </main>
      <Footer
        description="Explore GravityTech project tracks across Java, Python, analytics, and web delivery."
        links={[
          { href: routes.services, label: "Services" },
          { href: routes.jobs, label: "Openings" },
          { href: routes.careers, label: "Careers" },
          { href: routes.contact, label: "Contact" },
        ]}
        heading="Project tracks"
        tracks={["Java CRM", "Python AI", "Analytics", "React Portal"]}
      />
    </>
  );
}
