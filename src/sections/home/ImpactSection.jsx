import AnimatedSection from "../../components/AnimatedSection.jsx";
import ProSectionHeading from "../../components/ProSectionHeading.jsx";
import { outcomeStats } from "../../data.js";

export default function ImpactSection() {
  return (
    <AnimatedSection className="pro-section pro-outcomes">
      <div className="container">
        <ProSectionHeading
          eyebrow="Measurable outcomes"
          title="How partners realize value with GravityTech."
          center
          light
        />

        <div className="pro-outcome-grid">
          {outcomeStats.map((stat) => (
            <article className="pro-outcome-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
