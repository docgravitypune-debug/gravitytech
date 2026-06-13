import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import HeroSection from "../sections/home/HeroSection.jsx";
import ServicesSection from "../sections/home/ServicesSection.jsx";
import ImpactSection from "../sections/home/ImpactSection.jsx";
import ProjectsSection from "../sections/home/ProjectsSection.jsx";
import ProcessSection from "../sections/home/ProcessSection.jsx";
import ClientsSection from "../sections/home/ClientsSection.jsx";
import TestimonialsSection from "../sections/shared/TestimonialsSection.jsx";
import CareerCta from "../sections/home/CareerCta.jsx";
import ContactSection from "../sections/home/ContactSection.jsx";

export default function HomePage({ showToast }) {
  return (
    <>
      <Header page="home" />
      <main>
        <HeroSection />
        <ServicesSection />
        <ImpactSection />
        <ProjectsSection />
        <ProcessSection />
        <ClientsSection />
        <TestimonialsSection />
        <CareerCta />
        <ContactSection showToast={showToast} />
      </main>
      <Footer
        description="Futuristic software delivery, client project labs, and career-ready real-time project work."
        links={[
          { href: "#services", label: "Services" },
          { href: "#projects", label: "Projects" },
          { href: "#clients", label: "Clients" },
          { href: "#reviews", label: "Reviews" },
          { href: "careers.html", label: "Careers" },
        ]}
        tracks={["Java", "Python", "Data Analytics", "React"]}
      />
    </>
  );
}
