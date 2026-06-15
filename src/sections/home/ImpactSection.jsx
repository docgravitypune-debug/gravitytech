import AnimatedSection from "../../components/AnimatedSection.jsx";
import GradientCard from "../../components/GradientCard.jsx";
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
          {outcomeStats.map((stat, index) => (
            <GradientCard
              className="pro-outcome-card"
              delay={index * 0.08}
              key={stat.label}
              variant="glass"
            >
              <strong>{stat.value}</strong>
              <p>{stat.label}</p>
            </GradientCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
