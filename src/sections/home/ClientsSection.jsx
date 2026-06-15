import { motion } from "framer-motion";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import SectionHeading from "../../components/SectionHeading.jsx";
import { clients } from "../../data.js";
import { getInitials } from "../../utils/format.js";

export default function ClientsSection() {
  return (
    <AnimatedSection id="clients" className="section section-porto">
      <div className="container">
        <SectionHeading
          eyebrow="Our clients"
          title="Trusted by software, education, consulting, and infrastructure teams."
          center
          porto
        >
          GravityTech supports real-time project work and technology delivery for a diverse client
          network across modern business sectors.
        </SectionHeading>

        <div className="porto-client-logos" aria-label="GravityTech client names">
          {clients.map((client, index) => (
            <motion.span
              key={client.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.3) }}
            >
              {client.name}
            </motion.span>
          ))}
        </div>

        <div className="porto-client-grid" aria-label="GravityTech client list">
          {clients.map((client, index) => (
            <motion.article
              className={`porto-client-card client-accent-${client.accent}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.28) }}
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
