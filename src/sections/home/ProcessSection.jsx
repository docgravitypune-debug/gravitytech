import AnimatedSection from "../../components/AnimatedSection.jsx";
import SectionHeading from "../../components/SectionHeading.jsx";
import { processSteps } from "../../data.js";

export default function ProcessSection() {
  return (
    <AnimatedSection id="process" className="section section-dark process-section">
      <div className="container">
        <SectionHeading eyebrow="How delivery works" title="From client signal to launch-ready demo." />
        <ol className="process-grid">
          {processSteps.map((step) => (
            <li className="glass-card dark-card" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </AnimatedSection>
  );
}
