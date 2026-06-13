import { motion } from "framer-motion";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import SectionHeading from "../../components/SectionHeading.jsx";
import { clients } from "../../data.js";
import { getInitials } from "../../utils/format.js";

export default function ClientsSection() {
  return (
    <AnimatedSection id="clients" className="section section-muted clients-section">
      <div className="container">
        <SectionHeading
          eyebrow="Our clients"
          title="Trusted by software, education, consulting, and infrastructure teams."
          split
        >
          GravityTech Software supports real-time project work and technology delivery for a diverse
          client network across modern business sectors.
        </SectionHeading>
        <div className="client-marquee" aria-hidden="true">
          <div>
            {[...clients, ...clients].map((client, index) => (
              <span key={`${client.name}-${index}`}>{client.name}</span>
            ))}
          </div>
        </div>
        <div className="client-grid" aria-label="GravityTech client list">
          {clients.map((client, index) => (
            <motion.article
              className={`client-card glass-card client-accent-${client.accent}`}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.035, 0.28) }}
              key={client.name}
            >
              <span>{getInitials(client.name)}</span>
              <div>
                <h3>{client.name}</h3>
                <p>{client.sector}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
