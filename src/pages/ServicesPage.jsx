import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageHero from "../components/PageHero.jsx";
import ExploreTilesSection from "../sections/home/ExploreTilesSection.jsx";
import EnterpriseServicesHub from "../sections/services/EnterpriseServicesHub.jsx";
import ProcessSection from "../sections/home/ProcessSection.jsx";
import { pageHeroes } from "../pageHeroes.js";
import { routes } from "../routes.js";
import { FolderKanban, Handshake } from "lucide-react";

const serviceQuickTiles = [
  {
    title: "Project Catalog",
    description: "Browse delivery-ready tracks across Java, Python, analytics, and web.",
    to: routes.projects,
    variant: "cyan",
    icon: FolderKanban,
  },
  {
    title: "Client Partners",
    description: "Meet the teams that collaborate with GravityTech on real software work.",
    to: routes.clients,
    variant: "violet",
    icon: Handshake,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="page-with-hero services-page">
        <PageHero {...pageHeroes.services} />
        <EnterpriseServicesHub />
        <ExploreTilesSection
          eyebrow="Continue exploring"
          tiles={serviceQuickTiles}
          title="Projects and clients are one click away."
        />
        <ProcessSection />
      </main>
      <Footer
        description="ERP, CRM, payroll, talent acquisition, and enterprise solutions with mentor-led delivery."
        links={[
          { href: routes.projects, label: "Projects" },
          { href: routes.about, label: "About" },
          { href: routes.contact, label: "Contact" },
          { href: routes.careers, label: "Careers" },
        ]}
        heading="Service tracks"
        tracks={["ERP", "CRM", "Payroll", "Talent Acquisition"]}
      />
    </>
  );
}
