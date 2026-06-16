import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection.jsx';
import SectionHeading from '../../components/SectionHeading.jsx';
import { careerTracks } from '../../data.js';

export default function OpeningsSection({ onTrackApply }) {
  const [openTrack, setOpenTrack] = useState(careerTracks[0]?.title || '');

  return (
    <AnimatedSection id="openings" className="section section-muted">
      <div className="container">
        <SectionHeading eyebrow="Open project tracks" title="Choose your career mission." split>
          Each track is designed around practical client project tasks so applicants can build
          confidence with production-style work.
        </SectionHeading>

        <div className="roles-accordion" aria-live="polite">
          {careerTracks.map((track) => {
            const isOpen = openTrack === track.title;
            return (
              <article className={`role-card ${isOpen ? 'open' : ''}`} key={track.title}>
                <button
                  className="role-header"
                  type="button"
                  onClick={() => setOpenTrack(isOpen ? '' : track.title)}
                  aria-expanded={isOpen}
                >
                  <div>
                    <span className="dept-pill">{track.type}</span>
                    <h3>{track.title}</h3>
                  </div>
                  <ChevronDown className="role-arrow" size={20} />
                </button>

                {isOpen ? (
                  <div className="role-body">
                    <p>{track.description}</p>
                    <div className="career-meta">
                      {track.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <a className="button button-small" href="#apply" onClick={() => onTrackApply(track.title)}>
                      Apply for this track
                    </a>
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
