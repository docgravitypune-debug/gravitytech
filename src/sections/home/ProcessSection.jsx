import AnimatedSection from "../../components/AnimatedSection.jsx";
import GradientCard from "../../components/GradientCard.jsx";
import ProSectionHeading from "../../components/ProSectionHeading.jsx";
import { deliveryMethods } from "../../data.js";

const variants = ["cyan", "violet", "lime", "sunset"];

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
            <GradientCard
              className="pro-method-card"
              delay={index * 0.06}
              key={method.title}
              variant={variants[index % variants.length]}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{method.title}</h3>
              <p>{method.description}</p>
            </GradientCard>
          ))}
        </div>

        <ol className="pro-process-steps">
          {[
            ["01", "Signal capture", "Requirements, roles, data flows, risks, and success metrics."],
            ["02", "Sprint architecture", "UI, backend, database, analytics, QA, docs, and demo milestones."],
            ["03", "Build lab", "Guided pods, code review, task boards, and testing loops."],
            ["04", "Launch demo", "Demo, screenshots, deployment notes, and roadmap handoff."],
          ].map(([number, title, copy], index) => (
            <GradientCard
              as="li"
              className="pro-process-step-card"
              delay={index * 0.05}
              key={number}
              variant={variants[index % variants.length]}
            >
              <strong>{number}</strong>
              <div>
                <h4>{title}</h4>
                <p>{copy}</p>
              </div>
            </GradientCard>
          ))}
        </ol>
      </div>
    </AnimatedSection>
  );
}
