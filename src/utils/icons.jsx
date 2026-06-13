import {
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  CloudCog,
  Code2,
  DatabaseZap,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
} from "lucide-react";

const icons = {
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  CloudCog,
  Code2,
  DatabaseZap,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
};

export function Icon({ name, ...props }) {
  const Component = icons[name] || Sparkles;
  return <Component aria-hidden="true" {...props} />;
}
