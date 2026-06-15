import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageHero from "../components/PageHero.jsx";
import ProblemSection from "../sections/home/ProblemSection.jsx";
import StatementSection from "../sections/home/StatementSection.jsx";
import ValuePillarsSection from "../sections/home/ValuePillarsSection.jsx";
import ImpactSection from "../sections/home/ImpactSection.jsx";
import AboutPreviewSection from "../sections/home/AboutPreviewSection.jsx";
import TestimonialsSection from "../sections/shared/TestimonialsSection.jsx";
import CareerCta from "../sections/home/CareerCta.jsx";
import { pageHeroes } from "../pageHeroes.js";
import { routes } from "../routes.js";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="page-with-hero">
        <PageHero {...pageHeroes.home} />
        <ProblemSection />
        <StatementSection />
        <ValuePillarsSection />
        <ImpactSection />
        <AboutPreviewSection />
        <TestimonialsSection />
        <CareerCta />
      </main>
      <Footer
        description="Enterprise-minded software delivery, client project labs, and career-ready real-time project work."
        links={[
          { href: routes.services, label: "Services" },
          { href: routes.about, label: "About" },
          { href: routes.projects, label: "Projects" },
          { href: routes.clients, label: "Clients" },
          { href: `${routes.careers}#reviews`, label: "Reviews" },
          { href: routes.careers, label: "Careers" },
        ]}
        tracks={["Java", "Python", "Data Analytics", "React"]}
      />
    </>
  );
}
