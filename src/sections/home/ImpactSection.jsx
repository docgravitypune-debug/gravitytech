import AnimatedSection from '../../components/AnimatedSection.jsx';
import ProSectionHeading from '../../components/ProSectionHeading.jsx';
import { outcomeStats } from '../../data.js';

export default function ImpactSection() {
  return (
    <AnimatedSection className="section section-muted">
      <div className="container">
        <ProSectionHeading eyebrow="Measurable outcomes" title="How partners realize value with GravityTech." center />
        <div className="impact-stats">
          {outcomeStats.slice(0, 4).map((stat) => (
            <article key={stat.label}>
              <strong>{stat.value}</strong>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
