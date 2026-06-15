import AnimatedSection from "../../components/AnimatedSection.jsx";
import GradientCard from "../../components/GradientCard.jsx";
import ProSectionHeading from "../../components/ProSectionHeading.jsx";
import { valuePillars } from "../../data.js";

const variants = ["cyan", "violet", "lime", "sunset"];

export default function ValuePillarsSection() {
  return (
    <AnimatedSection className="pro-section pro-pillars">
      <div className="container">
        <ProSectionHeading
          eyebrow="Convert investment into value"
          title="What looks like a delivery problem is often an execution problem in disguise."
          center
        />

        <div className="pro-pillar-grid">
          {valuePillars.map((pillar, index) => (
            <GradientCard
              className="pro-pillar-card"
              delay={index * 0.06}
              key={pillar.title}
              variant={variants[index % variants.length]}
            >
              <span className="pro-pillar-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </GradientCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
