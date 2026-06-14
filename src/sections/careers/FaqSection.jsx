import { useState } from "react";
import { Plus } from "lucide-react";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import SectionHeading from "../../components/SectionHeading.jsx";
import { careerFaqs } from "../../data.js";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <AnimatedSection className="section">
      <div className="container faq-wrap">
        <SectionHeading eyebrow="Questions" title="Career page FAQ." center />
        <div className="faq-list">
          {careerFaqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article className={`faq-item glass-card ${isOpen ? "open" : ""}`} key={item.question}>
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon-wrap" aria-hidden="true">
                    <Plus className="faq-icon" size={18} />
                  </span>
                </button>
                {isOpen ? (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
