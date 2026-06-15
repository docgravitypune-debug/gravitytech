import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PageHero from "../components/PageHero.jsx";
import ServicesSection from "../sections/home/ServicesSection.jsx";
import ProcessSection from "../sections/home/ProcessSection.jsx";
import { pageHeroes } from "../pageHeroes.js";
import { routes } from "../routes.js";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="page-with-hero">
        <PageHero {...pageHeroes.services} />
        <ServicesSection />
        <ProcessSection />
      </main>
      <Footer
        description="Java, Python, analytics, React, and cloud delivery services with mentor-led project labs."
        links={[
          { href: routes.projects, label: "Projects" },
          { href: routes.about, label: "About" },
          { href: routes.contact, label: "Contact" },
          { href: routes.careers, label: "Careers" },
        ]}
        heading="Service tracks"
        tracks={["Java Pods", "Python AI", "Analytics", "Web & Cloud"]}
      />
    </>
  );
}
