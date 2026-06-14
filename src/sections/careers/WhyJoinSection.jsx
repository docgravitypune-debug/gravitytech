import { motion } from "framer-motion";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import { whyJoinGravityTech } from "../../data.js";

const imageBase = "/assets/";

export default function WhyJoinSection() {
  return (
    <AnimatedSection className="section why-join-section">
      <div className="container why-join-wrap">
        <div className="why-join-heading">
          <div>
            <p className="eyebrow">Why join GravityTech</p>
            <h2>Because you deserve more than just a project.</h2>
          </div>
          <p>
            We give you a space to learn, contribute, receive feedback, and build work that feels
            close to real software delivery.
          </p>
        </div>
        <div className="why-join-timeline">
          {whyJoinGravityTech.map((item, index) => (
            <motion.article
              className={`why-join-row ${index % 2 ? "reverse" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              key={item.title}
            >
              <div className="why-join-image">
                <img src={`${imageBase}${item.image}`} alt={item.alt} loading="lazy" />
              </div>
              <div className="why-join-copy">
                <span>{item.kicker}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
