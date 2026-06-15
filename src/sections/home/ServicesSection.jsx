import { motion } from "framer-motion";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import SectionHeading from "../../components/SectionHeading.jsx";
import { services } from "../../data.js";
import { Icon } from "../../utils/icons.jsx";

export default function ServicesSection() {
  return (
    <AnimatedSection id="services" className="section section-porto">
      <div className="container">
        <SectionHeading
          eyebrow="What we offer"
          title="Technology services with a project-lab mindset."
          center
          porto
        >
          GravityTech combines project delivery, practical mentoring, and industry-oriented
          development tracks so every engagement produces usable work.
        </SectionHeading>
        <div className="porto-service-grid">
          {services.map((service, index) => (
            <motion.article
              className={`porto-service-card accent-${service.accent}`}
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <span className="porto-icon-circle">
                <Icon name={service.icon} size={22} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="porto-read-more">Learn more</span>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
