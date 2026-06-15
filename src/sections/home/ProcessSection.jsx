import { motion } from "framer-motion";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import SectionHeading from "../../components/SectionHeading.jsx";
import { processSteps } from "../../data.js";

export default function ProcessSection() {
  return (
    <AnimatedSection id="process" className="section section-porto porto-process-section">
      <div className="container">
        <SectionHeading
          eyebrow="How delivery works"
          title="From client signal to launch-ready demo."
          center
          porto
        />
        <ol className="porto-process-timeline">
          {processSteps.map((step, index) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span className="porto-process-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </AnimatedSection>
  );
}
