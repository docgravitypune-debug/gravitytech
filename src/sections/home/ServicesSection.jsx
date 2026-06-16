import AnimatedSection from '../../components/AnimatedSection.jsx';
import ProSectionHeading from '../../components/ProSectionHeading.jsx';
import { services } from '../../data.js';
import { Icon } from '../../utils/icons.jsx';

export default function ServicesSection({ showHeading = false }) {
  return (
    <AnimatedSection id="services" className="section section-dark">
      <div className="container">
        {showHeading ? (
          <ProSectionHeading
            eyebrow="Explore our services"
            title="Technology services built for enterprise-grade delivery."
            center
          />
        ) : null}

        <div className="services-grid">
          {services.slice(0, 4).map((service, index) => (
            <article className="service-card" key={service.title}>
              <span className={`service-icon-wrap service-icon-${index + 1}`}>
                <Icon name={service.icon} size={22} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
