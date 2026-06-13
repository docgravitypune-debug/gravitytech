import AnimatedSection from "../../components/AnimatedSection.jsx";
import SectionHeading from "../../components/SectionHeading.jsx";

export default function FaqSection() {
  return (
    <AnimatedSection className="section">
      <div className="container faq-wrap">
        <SectionHeading eyebrow="Questions" title="Career page FAQ." center />
        <div className="faq-list">
          <details>
            <summary>Do I need previous project experience?</summary>
            <p>
              No. Freshers and students can apply. We match tasks to the selected track and current
              skill level.
            </p>
          </details>
          <details>
            <summary>Which technologies are available?</summary>
            <p>
              GravityTech focuses on Java, Python, data analytics, React, frontend, full-stack,
              cloud, and QA project work.
            </p>
          </details>
          <details>
            <summary>Can client requirements be customized?</summary>
            <p>
              Yes. Project modules can be shaped around client workflows, academic requirements, or
              portfolio goals.
            </p>
          </details>
        </div>
      </div>
    </AnimatedSection>
  );
}
