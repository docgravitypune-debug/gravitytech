import { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import TestimonialsSection from "../sections/shared/TestimonialsSection.jsx";
import CareerHero from "../sections/careers/CareerHero.jsx";
import OpeningsSection from "../sections/careers/OpeningsSection.jsx";
import ProgramHighlights from "../sections/careers/ProgramHighlights.jsx";
import ApplicationSection from "../sections/careers/ApplicationSection.jsx";
import FaqSection from "../sections/careers/FaqSection.jsx";
import { readEntries, saveEntry, storageKeys } from "../storage.js";

export default function CareersPage({ showToast }) {
  const [selectedTrack, setSelectedTrack] = useState("");
  const [applications, setApplications] = useState(() => readEntries(storageKeys.career));

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const entry = {
      ...data,
      submittedAt: new Date().toISOString(),
    };
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
    form.reset();
  };

  return (
    <>
      <Header page="careers" />
      <main>
        <CareerHero />
        <OpeningsSection onTrackApply={setSelectedTrack} />
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
          { href: "index.html#services", label: "Services" },
          { href: "index.html#projects", label: "Projects" },
          { href: "index.html#clients", label: "Clients" },
          { href: "#reviews", label: "Reviews" },
          { href: "#apply", label: "Apply" },
        ]}
        heading="Career tracks"
        tracks={["Java Developer", "Python Developer", "Data Analyst", "React Trainee"]}
      />
    </>
  );
}
