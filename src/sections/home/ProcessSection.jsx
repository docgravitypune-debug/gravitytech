import AnimatedSection from "../../components/AnimatedSection.jsx";
import ProSectionHeading from "../../components/ProSectionHeading.jsx";
import { deliveryMethods } from "../../data.js";

export default function ProcessSection() {
  return (
    <AnimatedSection id="process" className="pro-section pro-methods">
      <div className="container">
        <ProSectionHeading
          eyebrow="How we deliver"
          title="From strategy to execution with structure at every step."
          center
        />

        <div className="pro-methods-grid">
          {deliveryMethods.map((method, index) => (
            <article className="pro-method-card" key={method.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{method.title}</h3>
              <p>{method.description}</p>
            </article>
          ))}
        </div>

        <ol className="pro-process-steps">
          <li>
            <strong>01</strong>
            <div>
              <h4>Signal capture</h4>
              <p>Requirements, roles, data flows, risks, and success metrics.</p>
            </div>
          </li>
          <li>
            <strong>02</strong>
            <div>
              <h4>Sprint architecture</h4>
              <p>UI, backend, database, analytics, QA, docs, and demo milestones.</p>
            </div>
          </li>
          <li>
            <strong>03</strong>
            <div>
              <h4>Build lab</h4>
              <p>Guided pods, code review, task boards, and testing loops.</p>
            </div>
          </li>
          <li>
            <strong>04</strong>
            <div>
              <h4>Launch demo</h4>
              <p>Demo, screenshots, deployment notes, and roadmap handoff.</p>
            </div>
          </li>
        </ol>
      </div>
    </AnimatedSection>
  );
}
