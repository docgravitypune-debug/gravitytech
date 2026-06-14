import { ArrowRight, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import { routes } from "../../routes.js";

export default function CareerCta() {
  return (
    <AnimatedSection className="section">
      <div className="container cta-panel glass-card">
        <div>
          <p className="eyebrow">
            <Rocket size={16} /> Careers and internships
          </p>
          <h2>Want real-time project experience?</h2>
          <p>
            Apply for GravityTech's project work program and select the technology track that best
            matches your goals.
          </p>
        </div>
        <Link className="button" to={routes.careers}>
          View Career Page <ArrowRight size={18} />
        </Link>
      </div>
    </AnimatedSection>
  );
}
