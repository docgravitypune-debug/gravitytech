import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import { routes } from "../../routes.js";

export default function CareerCta() {
  return (
    <AnimatedSection className="pro-section pro-cta">
      <div className="container pro-cta-inner">
        <div>
          <p className="pro-eyebrow light">Let&apos;s build together</p>
          <h2>Ready for structured project experience?</h2>
          <p>
            Apply for GravityTech&apos;s project work program and choose the technology track that
            fits your goals.
          </p>
        </div>
        <Link className="button pro-button-light" to={routes.careers}>
          View Careers <ArrowRight size={18} />
        </Link>
      </div>
    </AnimatedSection>
  );
}
