import { motion } from "framer-motion";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import GradientCard from "../../components/GradientCard.jsx";
import ServiceHero from "../../components/ServiceHero.jsx";
import ProSectionHeading from "../../components/ProSectionHeading.jsx";
import { routes } from "../../routes.js";

const featureVariants = ["cyan", "violet", "lime", "sunset"];

export default function ServiceDetailLayout({ service }) {
  return (
    <div className="service-detail-panel" id={`service-${service.id}`}>
      <ServiceHero service={service} />

      <AnimatedSection className="pro-section service-detail-body">
        <div className="container">
          <ProSectionHeading
            eyebrow={service.title}
            title={`What ${service.cardTitle} delivery includes`}
            center
          />

          <div className="service-feature-grid">
            {service.features.map((feature, index) => (
              <GradientCard
                className="service-feature-card"
                delay={index * 0.07}
                key={feature.title}
                variant={featureVariants[index % featureVariants.length]}
              >
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </GradientCard>
            ))}
          </div>

          <div className="service-outcome-band">
            <h3>Measurable outcomes</h3>
            <div className="service-outcome-grid">
              {service.outcomes.map((outcome, index) => (
                <motion.article
                  className="service-outcome-card"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  key={outcome.label}
                >
                  <strong>{outcome.value}</strong>
                  <p>{outcome.label}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="service-detail-cta">
            <p>Ready to scope your {service.cardTitle} project with GravityTech?</p>
            <a className="button pro-button" href={routes.contact}>
              Start a conversation
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
