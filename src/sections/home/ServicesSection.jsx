import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import ProSectionHeading from "../../components/ProSectionHeading.jsx";
import { services } from "../../data.js";
import { Icon } from "../../utils/icons.jsx";

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  const goNext = () => setActiveIndex((index) => (index + 1) % services.length);
  const goPrev = () => setActiveIndex((index) => (index - 1 + services.length) % services.length);

  return (
    <AnimatedSection id="services" className="pro-section pro-services">
      <div className="container">
        <ProSectionHeading
          eyebrow="Explore our services"
          title="Technology services built for enterprise-grade delivery."
          center
        />

        <div className="pro-service-explorer">
          <div className="pro-service-nav">
            <span className="pro-service-counter">
              {String(activeIndex + 1).padStart(2, "0")}/{String(services.length).padStart(2, "0")}
            </span>
            <div className="pro-service-controls">
              <button type="button" aria-label="Previous service" onClick={goPrev}>
                <ChevronLeft size={20} />
              </button>
              <button type="button" aria-label="Next service" onClick={goNext}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <article className="pro-service-panel">
            <span className="pro-service-icon">
              <Icon name={activeService.icon} size={28} />
            </span>
            <h3>{activeService.title}</h3>
            <p>{activeService.description}</p>
          </article>

          <div className="pro-service-tabs" role="tablist" aria-label="Service categories">
            {services.map((service, index) => (
              <button
                className={index === activeIndex ? "active" : ""}
                key={service.title}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
