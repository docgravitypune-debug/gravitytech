import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageHero from "../components/PageHero.jsx";
import ClientsSection from "../sections/home/ClientsSection.jsx";
import TestimonialsSection from "../sections/shared/TestimonialsSection.jsx";
import { pageHeroes } from "../pageHeroes.js";
import { routes } from "../routes.js";

export default function ClientsPage() {
  return (
    <>
      <Header />
      <main className="page-with-hero">
        <PageHero {...pageHeroes.clients} />
        <ClientsSection />
        <TestimonialsSection />
      </main>
      <Footer
        description="GravityTech partners with software, education, consulting, and infrastructure teams."
        links={[
          { href: routes.services, label: "Services" },
          { href: routes.projects, label: "Projects" },
          { href: routes.about, label: "About" },
          { href: routes.contact, label: "Contact" },
        ]}
        heading="Client sectors"
        tracks={["Software", "Education", "Consulting", "Infrastructure"]}
      />
    </>
  );
}
