import AnimatedSection from "../../components/AnimatedSection.jsx";
import GradientCard from "../../components/GradientCard.jsx";
import { careerPerkHighlights, perksBenefits } from "../../data.js";
import { Icon } from "../../utils/icons.jsx";

const variants = ["cyan", "violet", "lime", "sunset"];

export default function PerksBenefitsSection() {
  return (
    <AnimatedSection className="section section-muted perks-section">
      <div className="container">
        <div className="perks-heading">
          <div>
            <p className="eyebrow">Perks and benefits</p>
            <h2>
              Perks and <span className="text-gradient">Benefits</span>
            </h2>
          </div>
          <p>
            We support your growth in and out of work through mentoring, flexibility, real project
            practice, transparent feedback, and portfolio-focused outcomes.
          </p>
        </div>
        <div className="perks-ribbon" aria-label="Career perks highlights">
          {careerPerkHighlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="perks-grid">
          {perksBenefits.map((perk, index) => (
            <GradientCard
              className={`perk-card perk-card-${index + 1}`}
              delay={index * 0.05}
              key={perk.title}
              variant={variants[index % variants.length]}
            >
              <span className="perk-icon">
                <Icon name={perk.icon} size={36} />
              </span>
              <h3>{perk.title}</h3>
              <p>{perk.description}</p>
            </GradientCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
