import { routes } from "./routes.js";

export const pageHeroes = {
  home: {
    eyebrow: "GravityTech Software",
    title: "Innovate, Build,",
    titleAccent: "And Deliver.",
    aside:
      "GravityTech helps clients ship dependable software and gives professionals, freshers, and interns structured project exposure across Java, Python, analytics, React, and cloud-ready systems.",
    actions: [
      { label: "Start a Project", to: routes.contact },
      { label: "Explore Careers", to: routes.careers, variant: "secondary" },
    ],
  },
  services: {
    eyebrow: "What we offer",
    title: "Technology services",
    titleAccent: "with a delivery mindset.",
    aside:
      "From Java engineering pods to analytics studios and cloud-ready product builds, every GravityTech service is designed to produce usable modules, demos, and documentation.",
    actions: [{ label: "Talk to Our Team", to: routes.contact }],
  },
  projects: {
    eyebrow: "Project catalog",
    title: "Explore real tracks",
    titleAccent: "built for delivery.",
    aside:
      "Filter project ideas by technology and customize them for client requirements, internships, capstones, and career portfolios.",
    actions: [
      { label: "View Openings", to: routes.jobs },
      { label: "Apply for Project Work", to: routes.careers, variant: "secondary" },
    ],
  },
  about: {
    eyebrow: "About GravityTech",
    title: "Practical software delivery",
    titleAccent: "for clients and talent.",
    aside:
      "GravityTech Software helps clients shape real software projects and helps candidates gain experience through guided, production-style project work.",
    actions: [{ label: "Meet the Team", to: routes.contact }],
  },
  clients: {
    eyebrow: "Our clients",
    title: "Trusted by teams",
    titleAccent: "across industries.",
    aside:
      "GravityTech supports real-time project work and technology delivery for software, education, consulting, engineering, and infrastructure partners.",
    actions: [{ label: "Become a Partner", to: routes.contact }],
  },
  careers: {
    eyebrow: "Careers at GravityTech",
    title: "Innovate, Belong,",
    titleAccent: "And Thrive.",
    aside:
      "Bring your whole self to a team that believes in you. At GravityTech, you will find a place that sees your potential, nurtures it, and celebrates it.",
    actions: [
      { label: "Explore All Opportunities", to: routes.jobs },
      { label: "Apply Now", href: "#apply", variant: "secondary" },
    ],
  },
  jobs: {
    eyebrow: "Job opportunities",
    title: "Find your next",
    titleAccent: "project role.",
    aside:
      "Bring your skills to real client-style project work. Choose a technical field, explore the role, and apply for the opportunity that matches your career direction.",
    actions: [
      { label: "Apply Now", to: `${routes.careers}#apply` },
      { label: "View Career Tracks", to: routes.careers, variant: "secondary" },
    ],
  },
  contact: {
    eyebrow: "Let's talk",
    title: "Tell us what",
    titleAccent: "you want to build.",
    aside:
      "Share your project requirement or learning goal. Our team will help you choose the right delivery track, mentor path, or client engagement model.",
    actions: [{ label: "Explore Services", to: routes.services, variant: "secondary" }],
  },
};
