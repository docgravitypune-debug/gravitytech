import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import HeroSection from "../sections/home/HeroSection.jsx";
import ProblemSection from "../sections/home/ProblemSection.jsx";
import StatementSection from "../sections/home/StatementSection.jsx";
import ValuePillarsSection from "../sections/home/ValuePillarsSection.jsx";
import ServicesSection from "../sections/home/ServicesSection.jsx";
import ProcessSection from "../sections/home/ProcessSection.jsx";
import ProjectsSection from "../sections/home/ProjectsSection.jsx";
import ImpactSection from "../sections/home/ImpactSection.jsx";
import AboutPreviewSection from "../sections/home/AboutPreviewSection.jsx";
import ClientsSection from "../sections/home/ClientsSection.jsx";
import TestimonialsSection from "../sections/shared/TestimonialsSection.jsx";
import CareerCta from "../sections/home/CareerCta.jsx";
import ContactSection from "../sections/home/ContactSection.jsx";
import { routes } from "../routes.js";

export default function HomePage({ showToast }) {
  return (
    <>
      <Header page="home" />
      <main className="home-page">
        <HeroSection />
        <ProblemSection />
        <StatementSection />
        <ValuePillarsSection />
        <ServicesSection />
        <ProcessSection />
        <ProjectsSection />
        <ImpactSection />
        <AboutPreviewSection />
        <ClientsSection />
        <TestimonialsSection />
        <CareerCta />
        <ContactSection showToast={showToast} />
      </main>
      <Footer
        description="Enterprise-minded software delivery, client project labs, and career-ready real-time project work."
        links={[
          { href: `${routes.home}#services`, label: "Services" },
          { href: routes.about, label: "About" },
          { href: `${routes.home}#projects`, label: "Projects" },
          { href: `${routes.home}#clients`, label: "Clients" },
          { href: `${routes.careers}#reviews`, label: "Reviews" },
          { href: routes.careers, label: "Careers" },
        ]}
        tracks={["Java", "Python", "Data Analytics", "React"]}
      />
    </>
  );
}
