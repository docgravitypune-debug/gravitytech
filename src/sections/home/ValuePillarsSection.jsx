import AnimatedSection from "../../components/AnimatedSection.jsx";
import ProSectionHeading from "../../components/ProSectionHeading.jsx";
import { valuePillars } from "../../data.js";

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
            <article className="pro-pillar-card" key={pillar.title}>
              <span className="pro-pillar-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
