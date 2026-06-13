import { ArrowRight } from "lucide-react";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import SectionHeading from "../../components/SectionHeading.jsx";
import { careerTracks } from "../../data.js";

export default function OpeningsSection({ onTrackApply }) {
  return (
    <AnimatedSection id="openings" className="section section-muted">
      <div className="container">
        <SectionHeading eyebrow="Open project tracks" title="Choose your career mission." split>
          Each track is designed around practical client project tasks so applicants can build
          confidence with production-style work.
        </SectionHeading>
        <div className="career-grid" aria-live="polite">
          {careerTracks.map((track) => (
            <article className="career-card glass-card" key={track.title}>
              <header>
                <div>
                  <span className="tag">{track.type}</span>
                  <h3>{track.title}</h3>
                </div>
              </header>
              <p>{track.description}</p>
              <div className="career-meta">
                {track.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a
                className="button button-small"
                href="#apply"
                onClick={() => onTrackApply(track.title)}
              >
                Apply for this track <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
