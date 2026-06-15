import AnimatedSection from "../../components/AnimatedSection.jsx";
import ProSectionHeading from "../../components/ProSectionHeading.jsx";
import { deliveryProblems } from "../../data.js";

export default function ProblemSection() {
  return (
    <AnimatedSection className="pro-section pro-problem">
      <div className="container">
        <ProSectionHeading
          eyebrow="The challenge"
          title="Software delivery has an execution gap."
        >
          GravityTech closes it with structure, context, and measurable delivery so investment
          turns into usable software—not unfinished training exercises.
        </ProSectionHeading>

        <div className="pro-problem-grid">
          {deliveryProblems.map((item) => (
            <article className="pro-problem-card" key={item.tag}>
              <p className="pro-problem-tag">{item.tag}</p>
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
