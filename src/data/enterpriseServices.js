import { routes } from "../routes.js";

export const enterpriseServices = [
  {
    id: "erp",
    title: "ERP Solutions",
    cardTitle: "ERP",
    description: "Finance, inventory, procurement, and operations on one dependable platform.",
    icon: "Layers3",
    variant: "violet",
    hero: {
      eyebrow: "ERP Solutions",
      title: "Unify operations with",
      titleAccent: "modern ERP delivery.",
      aside:
        "GravityTech helps teams replace fragmented spreadsheets and siloed tools with integrated ERP modules, workflows, and reporting your business can actually run on.",
      gradient: "violet",
      actions: [{ label: "Talk to Our Team", to: routes.contact }],
    },
    highlights: [
      "Inventory, billing, and purchase flows",
      "Role-based dashboards and approvals",
      "Audit-ready reporting and exports",
    ],
    features: [
      {
        title: "Modular ERP architecture",
        description:
          "Deploy finance, inventory, HR, and operations modules incrementally without rebuilding your entire stack.",
      },
      {
        title: "Workflow automation",
        description:
          "Map approvals, notifications, and status transitions so teams spend less time chasing updates.",
      },
      {
        title: "Integration-ready APIs",
        description:
          "Connect ERP data with CRM, payroll, analytics, and third-party tools through secure service layers.",
      },
    ],
    outcomes: [
      { value: "35%", label: "Faster month-end reporting cycles" },
      { value: "48%", label: "Reduction in manual reconciliation work" },
      { value: "99.2%", label: "Data consistency across core modules" },
    ],
  },
  {
    id: "talent-acquisition",
    title: "Talent Acquisition",
    cardTitle: "Talent Acquisition",
    description: "Hiring pipelines, screening workflows, and candidate experience that scale.",
    icon: "UsersRound",
    variant: "cyan",
    hero: {
      eyebrow: "Talent Acquisition",
      title: "Build hiring systems that",
      titleAccent: "move with precision.",
      aside:
        "From applicant tracking to interview coordination and offer workflows, we design talent systems that help HR and hiring managers move faster with better visibility.",
      gradient: "cyan",
      actions: [{ label: "Start a Hiring Project", to: routes.contact }],
    },
    highlights: [
      "Candidate pipelines and scorecards",
      "Interview scheduling and feedback loops",
      "Offer and onboarding handoff",
    ],
    features: [
      {
        title: "Applicant tracking workflows",
        description:
          "Track candidates across stages with filters, notes, and recruiter dashboards built for daily use.",
      },
      {
        title: "Structured evaluation",
        description:
          "Standardize interviews with scorecards, skill tags, and decision checkpoints for every role.",
      },
      {
        title: "Employer brand touchpoints",
        description:
          "Create career pages, application forms, and communication templates that feel professional end to end.",
      },
    ],
    outcomes: [
      { value: "42%", label: "Faster time-to-shortlist for open roles" },
      { value: "3.2x", label: "More visibility across hiring stages" },
      { value: "28%", label: "Improvement in candidate response rates" },
    ],
  },
  {
    id: "enterprise-solution",
    title: "Enterprise Solution",
    cardTitle: "Enterprise Solution",
    description: "Custom platforms, portals, and digital products for complex business needs.",
    icon: "CloudCog",
    variant: "lime",
    hero: {
      eyebrow: "Enterprise Solution",
      title: "Engineer platforms built for",
      titleAccent: "scale and governance.",
      aside:
        "GravityTech delivers enterprise-grade applications with the structure, security, documentation, and delivery rhythm growing organizations need.",
      gradient: "lime",
      actions: [{ label: "Plan Your Build", to: routes.contact }],
    },
    highlights: [
      "Multi-team delivery pods",
      "Security, QA, and release governance",
      "Cloud-ready deployment patterns",
    ],
    features: [
      {
        title: "Solution architecture",
        description:
          "Translate business requirements into scalable application blueprints with clear module boundaries.",
      },
      {
        title: "Enterprise portals",
        description:
          "Build internal and client-facing portals with dashboards, document flows, and access control.",
      },
      {
        title: "Managed delivery rhythm",
        description:
          "Use sprint checkpoints, demo reviews, and documentation gates to keep enterprise work predictable.",
      },
    ],
    outcomes: [
      { value: "12+", label: "Enterprise delivery tracks supported" },
      { value: "100%", label: "Modules shipped with docs and QA notes" },
      { value: "4x", label: "Faster alignment between business and engineering" },
    ],
  },
  {
    id: "crm",
    title: "CRM",
    cardTitle: "CRM",
    description: "Lead management, customer journeys, and sales visibility in one workspace.",
    icon: "BriefcaseBusiness",
    variant: "sunset",
    hero: {
      eyebrow: "CRM Solutions",
      title: "Turn relationships into",
      titleAccent: "measurable pipeline.",
      aside:
        "We build CRM systems that help sales, support, and account teams capture leads, manage follow-ups, and understand customer health without switching tools.",
      gradient: "sunset",
      actions: [{ label: "Request CRM Demo", to: routes.contact }],
    },
    highlights: [
      "Lead capture and assignment rules",
      "Account timelines and activity history",
      "Sales dashboards and forecasting views",
    ],
    features: [
      {
        title: "Pipeline management",
        description:
          "Track opportunities by stage, owner, value, and probability with filters your team will actually use.",
      },
      {
        title: "Customer 360 views",
        description:
          "Combine contact history, tickets, notes, and documents in one profile for every account.",
      },
      {
        title: "Automation and alerts",
        description:
          "Trigger reminders, escalations, and follow-up tasks so no lead or renewal slips through the cracks.",
      },
    ],
    outcomes: [
      { value: "31%", label: "Increase in qualified lead follow-up speed" },
      { value: "26%", label: "Higher pipeline visibility for managers" },
      { value: "18%", label: "Improvement in renewal tracking accuracy" },
    ],
  },
  {
    id: "third-party-payroll",
    title: "Third Party Payroll",
    cardTitle: "Third Party Payroll",
    description: "Payroll coordination, compliance workflows, and vendor-ready reporting.",
    icon: "BadgeDollarSign",
    variant: "violet",
    hero: {
      eyebrow: "Third Party Payroll",
      title: "Run payroll operations with",
      titleAccent: "confidence and control.",
      aside:
        "GravityTech supports third-party payroll systems with attendance sync, payout workflows, compliance documentation, and reporting your finance team can trust.",
      gradient: "sunset",
      actions: [{ label: "Discuss Payroll Setup", to: routes.contact }],
    },
    highlights: [
      "Attendance and payout reconciliation",
      "Compliance-ready documentation",
      "Vendor and employee self-service views",
    ],
    features: [
      {
        title: "Payroll workflow design",
        description:
          "Structure salary components, deductions, approvals, and payout cycles for distributed teams.",
      },
      {
        title: "Compliance and audit support",
        description:
          "Maintain records, tax summaries, and export formats required for reviews and statutory reporting.",
      },
      {
        title: "Third-party integrations",
        description:
          "Connect HRMS, attendance, banking, and accounting systems so payroll data stays synchronized.",
      },
    ],
    outcomes: [
      { value: "40%", label: "Less manual payroll processing time" },
      { value: "99%", label: "Payout accuracy across monthly cycles" },
      { value: "24h", label: "Average issue resolution turnaround" },
    ],
  },
];

export const enterpriseServiceMap = Object.fromEntries(
  enterpriseServices.map((service) => [service.id, service]),
);
