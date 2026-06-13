import AnimatedSection from "../../components/AnimatedSection.jsx";
import SectionHeading from "../../components/SectionHeading.jsx";
import { careerJourney } from "../../data.js";

export default function CareerJourneySection() {
  return (
    <AnimatedSection className="section section-muted career-journey-section">
      <div className="container">
        <SectionHeading eyebrow="Your GravityTech journey" title="A clear path from applicant to project contributor." split>
          The career workflow is designed like a delivery program: select a track, join guided
          sprint work, improve through review, and leave with a demo-ready portfolio story.
        </SectionHeading>
        <div className="journey-grid">
          {careerJourney.map((step) => (
            <article className="journey-card glass-card" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
