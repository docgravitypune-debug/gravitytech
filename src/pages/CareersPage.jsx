import { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import TestimonialsSection from "../sections/shared/TestimonialsSection.jsx";
import CareerHero from "../sections/careers/CareerHero.jsx";
import LifeAtSection from "../sections/careers/LifeAtSection.jsx";
import WhyJoinSection from "../sections/careers/WhyJoinSection.jsx";
import PerksBenefitsSection from "../sections/careers/PerksBenefitsSection.jsx";
import OpeningsSection from "../sections/careers/OpeningsSection.jsx";
import CareerJourneySection from "../sections/careers/CareerJourneySection.jsx";
import ProgramHighlights from "../sections/careers/ProgramHighlights.jsx";
import ApplicationSection from "../sections/careers/ApplicationSection.jsx";
import FaqSection from "../sections/careers/FaqSection.jsx";
import { readEntries, saveEntry, storageKeys } from "../storage.js";
import { routes } from "../routes.js";

export default function CareersPage({ showToast }) {
  const [selectedTrack, setSelectedTrack] = useState("");
  const [applications, setApplications] = useState(() => readEntries(storageKeys.career));

  const handleSubmit = (data) => {
    const entry = {
      ...data,
      resumeName: data.resume?.name || "",
      resumeSize: data.resume?.size || 0,
      submittedAt: new Date().toISOString(),
    };
    delete entry.resume;
    const saved = saveEntry(storageKeys.career, entry);

    if (saved) {
      setApplications(readEntries(storageKeys.career));
    }

    showToast(
      saved
        ? "Application saved. GravityTech can connect this form to a backend next."
        : "Application received, but this browser blocked local demo storage.",
    );
    setSelectedTrack("");
  };

  return (
    <>
      <Header page="careers" />
      <main>
        <CareerHero />
        <LifeAtSection />
        <WhyJoinSection />
        <PerksBenefitsSection />
        <OpeningsSection onTrackApply={setSelectedTrack} />
        <CareerJourneySection />
        <ProgramHighlights />
        <TestimonialsSection />
        <ApplicationSection
          applications={applications}
          onSubmit={handleSubmit}
          selectedTrack={selectedTrack}
          setSelectedTrack={setSelectedTrack}
        />
        <FaqSection />
      </main>
      <Footer
        description="Apply for practical client-style project work and software career growth."
        links={[
          { href: `${routes.home}#services`, label: "Services" },
          { href: `${routes.home}#projects`, label: "Projects" },
          { href: `${routes.home}#clients`, label: "Clients" },
          { href: `${routes.careers}#reviews`, label: "Reviews" },
          { href: `${routes.careers}#apply`, label: "Apply" },
        ]}
        heading="Career tracks"
        tracks={["Java Developer", "Python Developer", "Data Analyst", "React Trainee"]}
      />
    </>
  );
}
