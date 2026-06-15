import AnimatedSection from "../../components/AnimatedSection.jsx";
import ProSectionHeading from "../../components/ProSectionHeading.jsx";
import { clients } from "../../data.js";
import { getInitials } from "../../utils/format.js";

export default function ClientsSection({ showHeading = false }) {
  return (
    <AnimatedSection id="clients" className="pro-section pro-clients">
      <div className="container">
        {showHeading ? (
          <ProSectionHeading
            eyebrow="Our clients"
            title="Trusted by software, education, consulting, and infrastructure teams."
            center
          />
        ) : null}

        <div className="pro-client-wall" aria-label="GravityTech client partners">
          {clients.map((client) => (
            <article className="pro-client-item" key={client.name}>
              <span>{getInitials(client.name)}</span>
              <div>
                <h3>{client.name}</h3>
                <p>{client.sector}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
