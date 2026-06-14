import { motion } from "framer-motion";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import { lifeAtGravityTech } from "../../data.js";

const collageItems = [
  { image: "career-team-sprint.svg", label: "Project sprint" },
  { image: "career-mentor-review.svg", label: "Mentor review" },
  { image: "career-demo-day.svg", label: "Demo day" },
  { image: "career-analytics-lab.svg", label: "Analytics lab" },
];

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
          {collageItems.map((item, index) => (
            <motion.div
              className={`life-photo life-photo-${index + 1}`}
              initial={{ opacity: 0, y: 28, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              key={item.label}
            >
              <img src={`/assets/${item.image}`} alt="" loading="lazy" />
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
