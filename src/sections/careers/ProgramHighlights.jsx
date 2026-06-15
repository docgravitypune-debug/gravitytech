import AnimatedSection from "../../components/AnimatedSection.jsx";
import { careerHighlights } from "../../data.js";

export default function ProgramHighlights() {
  return (
    <AnimatedSection className="section">
      <div className="container learning-grid">
        <div>
          <p className="eyebrow">Program highlights</p>
          <h2>Built around real delivery habits.</h2>
          <p>
            Our career page focuses on practical outcomes: working modules, technical
            presentations, reusable components, project documentation, and demo confidence.
          </p>
        </div>
        <div className="highlight-list">
          {careerHighlights.map((highlight) => (
            <article className="glass-card" key={highlight.title}>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
