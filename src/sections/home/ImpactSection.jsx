import { motion } from "framer-motion";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import { impactStats } from "../../data.js";

export default function ImpactSection() {
  return (
    <AnimatedSection className="section porto-counter-section">
      <div className="container porto-counter-grid">
        <div className="porto-counter-copy">
          <p className="porto-eyebrow light">Why GravityTech</p>
          <h2>Real project work needs structure, not just training.</h2>
          <p>
            Like modern enterprise delivery teams, we focus on direction, context, quality gates,
            and measurable outcomes so client work and career practice both become usable software.
          </p>
          <a className="button porto-button-light" href="#process">
            See delivery method
          </a>
        </div>
        <div className="porto-counter-stats">
          {impactStats.map((stat, index) => (
            <motion.article
              className="porto-counter-card"
              key={stat.label}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <strong>{stat.value}</strong>
              <h3>{stat.label}</h3>
              <p>{stat.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
