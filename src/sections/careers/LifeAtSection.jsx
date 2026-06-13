import { motion } from "framer-motion";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import { lifeAtGravityTech } from "../../data.js";

export default function LifeAtSection() {
  return (
    <AnimatedSection className="section section-muted life-section">
      <div className="container life-grid">
        <div className="life-copy">
          <p className="eyebrow">Life at GravityTech</p>
          <h2>
            Life at <span className="text-gradient">GravityTech</span>
          </h2>
          <div className="life-story-list">
            {lifeAtGravityTech.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="life-collage" aria-label="GravityTech team culture visuals">
          {["Project sprint", "Mentor review", "Demo day", "Analytics lab"].map((label, index) => (
            <motion.div
              className={`life-photo life-photo-${index + 1}`}
              initial={{ opacity: 0, y: 28, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              key={label}
            >
              <span>{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
