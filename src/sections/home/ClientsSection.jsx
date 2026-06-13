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
              <span key={`${client}-${index}`}>{client}</span>
            ))}
          </div>
        </div>
        <div className="client-grid" aria-label="GravityTech client list">
          {clients.map((client) => (
            <article className="client-card glass-card" key={client}>
              <span>{getInitials(client)}</span>
              <h3>{client}</h3>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
