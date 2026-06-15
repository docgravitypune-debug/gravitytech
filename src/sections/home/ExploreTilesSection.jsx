import { FolderKanban, Handshake, Layers3, UsersRound } from "lucide-react";
import AnimatedSection from "../../components/AnimatedSection.jsx";
import GradientCard from "../../components/GradientCard.jsx";
import ProSectionHeading from "../../components/ProSectionHeading.jsx";
import { routes } from "../../routes.js";

const exploreTiles = [
  {
    title: "Project Catalog",
    description: "Browse Java, Python, analytics, and web tracks built for real delivery.",
    to: routes.projects,
    variant: "cyan",
    icon: FolderKanban,
  },
  {
    title: "Client Partners",
    description: "See the software, education, and consulting teams that work with GravityTech.",
    to: routes.clients,
    variant: "violet",
    icon: Handshake,
  },
  {
    title: "Service Tracks",
    description: "Explore delivery pods, mentoring models, and enterprise-ready offerings.",
    to: routes.services,
    variant: "lime",
    icon: Layers3,
  },
  {
    title: "Career Programs",
    description: "Apply for mentor-led project work and portfolio-ready experience.",
    to: routes.careers,
    variant: "sunset",
    icon: UsersRound,
  },
];

export default function ExploreTilesSection({
  tiles = exploreTiles,
  eyebrow = "Explore GravityTech",
  title = "Jump into projects, clients, services, and careers.",
}) {
  return (
    <AnimatedSection className="pro-section pro-explore-tiles">
      <div className="container">
        <ProSectionHeading eyebrow={eyebrow} title={title} center />

        <div className="explore-tile-grid">
          {tiles.map((tile, index) => {
            const Icon = tile.icon;
            return (
              <GradientCard
                className="explore-tile"
                delay={index * 0.08}
                key={tile.title}
                showArrow={false}
                to={tile.to}
                variant={tile.variant}
              >
                {Icon ? (
                  <span className="explore-tile-icon">
                    <Icon size={22} />
                  </span>
                ) : null}
                <h3>{tile.title}</h3>
                <p>{tile.description}</p>
              </GradientCard>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
