import { ArrowRight, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import { routes } from "../../routes.js";

export default function CareerCta() {
  return (
    <AnimatedSection className="section porto-cta-band">
      <div className="container porto-cta-inner">
        <div>
          <p className="porto-eyebrow light">
            <Rocket size={16} /> Careers and internships
          </p>
          <h2>Ready for real-time project experience?</h2>
          <p>
            Apply for GravityTech&apos;s project work program and select the technology track that
            best matches your goals.
          </p>
        </div>
        <Link className="button porto-button-light" to={routes.careers}>
          View Career Page <ArrowRight size={18} />
        </Link>
      </div>
    </AnimatedSection>
  );
}
