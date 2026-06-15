import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import InteractiveGlassCard from "../../components/InteractiveGlassCard.jsx";
import SectionHeading from "../../components/SectionHeading.jsx";
import { categoryIcons, categoryLabels, projectData } from "../../data.js";
import { Icon } from "../../utils/icons.jsx";

const projectTracks = ["all", "java", "python", "analytics", "web"];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const projects = useMemo(
    () =>
      activeFilter === "all"
        ? projectData
        : projectData.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <AnimatedSection id="projects" className="section">
      <div className="container">
        <SectionHeading eyebrow="Dynamic project catalog" title="Slide through future-ready tech tracks." split>
          Filter real-time project ideas by technology. These projects can be customized for client
          requirements, student capstones, internships, and corporate portfolios.
        </SectionHeading>
        <div className="filter-bar" role="tablist" aria-label="Project technology filters">
          {projectTracks.map((track) => (
            <motion.button
              className={`filter-button ${activeFilter === track ? "active" : ""}`}
              key={track}
              type="button"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveFilter(track)}
            >
              {categoryLabels[track]}
            </motion.button>
          ))}
        </div>
        <Swiper
          className="project-slider"
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={22}
          slidesPerView={1}
          breakpoints={{
            760: { slidesPerView: 2 },
            1080: { slidesPerView: 3 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </AnimatedSection>
  );
}

function ProjectCard({ project }) {
  return (
    <InteractiveGlassCard className="project-card glass-card">
      <header>
        <div>
          <span className="tag">{categoryLabels[project.category]}</span>
          <h3>{project.title}</h3>
        </div>
        <span className="card-icon">
          <Icon name={categoryIcons[project.category]} size={24} />
        </span>
      </header>
      <p>{project.description}</p>
      <div className="project-meta">
        <span>{project.level}</span>
        <span>{project.timeline}</span>
        {project.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </InteractiveGlassCard>
  );
}
