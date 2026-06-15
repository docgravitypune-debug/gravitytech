import AnimatedSection from "../../components/AnimatedSection.jsx";
import InteractiveGlassCard from "../../components/InteractiveGlassCard.jsx";
import SectionHeading from "../../components/SectionHeading.jsx";
import { services } from "../../data.js";
import { Icon } from "../../utils/icons.jsx";

export default function ServicesSection() {
  return (
    <AnimatedSection id="services" className="section section-muted">
      <div className="container">
        <SectionHeading
          eyebrow="What we offer"
          title="Technology services with a project-lab mindset."
          split
        >
          GravityTech Software combines project delivery, practical mentoring, and
          industry-oriented development tracks so every engagement produces usable work.
        </SectionHeading>
        <div className="service-grid">
          {services.map((service, index) => (
            <InteractiveGlassCard
              className={`service-card glass-card accent-${service.accent}`}
              delay={index * 0.06}
              key={service.title}
            >
              <span className="card-icon">
                <Icon name={service.icon} size={24} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </InteractiveGlassCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
