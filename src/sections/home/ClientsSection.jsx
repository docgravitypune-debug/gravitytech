import AnimatedSection from "../../components/AnimatedSection.jsx";
import GradientCard from "../../components/GradientCard.jsx";
import ProSectionHeading from "../../components/ProSectionHeading.jsx";
import { clients } from "../../data.js";
import { getInitials } from "../../utils/format.js";

const variants = ["cyan", "violet", "lime", "sunset"];

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
          {clients.map((client, index) => (
            <GradientCard
              className="pro-client-item"
              delay={Math.min(index * 0.03, 0.28)}
              key={client.name}
              variant={variants[index % variants.length]}
            >
              <span className="pro-client-avatar">{getInitials(client.name)}</span>
              <div>
                <h3>{client.name}</h3>
                <p>{client.sector}</p>
              </div>
            </GradientCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
