import { ArrowRight } from "lucide-react";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import { impactStats } from "../../data.js";

export default function ImpactSection() {
  return (
    <AnimatedSection className="section impact-section">
      <div className="container impact-grid">
        <div className="impact-copy">
          <p className="eyebrow">Execution problem solved</p>
          <h2>Real project work needs structure, not just training.</h2>
          <p>
            Like modern enterprise delivery teams, GravityTech focuses on direction, context,
            quality gates, and measurable outcomes so client work and career practice both become
            usable software.
          </p>
          <a className="button button-secondary" href="#process">
            See delivery method <ArrowRight size={18} />
          </a>
        </div>
        <div className="impact-stats">
          {impactStats.map((stat) => (
            <article className="impact-card glass-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <h3>{stat.label}</h3>
              <p>{stat.description}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
