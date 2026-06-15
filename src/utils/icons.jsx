import {
  BadgeDollarSign,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  CloudCog,
  Code2,
  DatabaseZap,
  Headphones,
  HeartPulse,
  Layers3,
  Laptop,
  Lightbulb,
  LineChart,
  Rocket,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
} from "lucide-react";

const icons = {
  BadgeDollarSign,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  CloudCog,
  Code2,
  DatabaseZap,
  Headphones,
  HeartPulse,
  Layers3,
  Laptop,
  Lightbulb,
  LineChart,
  Rocket,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
};

export function Icon({ name, ...props }) {
  const Component = icons[name] || Sparkles;
  return <Component aria-hidden="true" {...props} />;
}
