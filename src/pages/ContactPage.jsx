import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageHero from "../components/PageHero.jsx";
import ContactSection from "../sections/home/ContactSection.jsx";
import { pageHeroes } from "../pageHeroes.js";
import { routes } from "../routes.js";

export default function ContactPage({ showToast }) {
  return (
    <>
      <Header />
      <main className="page-with-hero">
        <PageHero {...pageHeroes.contact} />
        <ContactSection showToast={showToast} />
      </main>
      <Footer
        description="Start a project conversation with GravityTech Software."
        links={[
          { href: routes.services, label: "Services" },
          { href: routes.projects, label: "Projects" },
          { href: routes.careers, label: "Careers" },
          { href: routes.jobs, label: "Openings" },
        ]}
        heading="Contact tracks"
        tracks={["Java", "Python", "Analytics", "React"]}
      />
    </>
  );
}
