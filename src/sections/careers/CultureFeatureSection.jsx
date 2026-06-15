import CoditasFeatureRows from "../../components/CoditasFeatureRows.jsx";
import { cultureFeatureRows } from "../../data.js";

const lifeAtIntro = {
  eyebrow: "Life at GravityTech",
  title: "Life at",
  titleAccent: "GravityTech",
  subtitle: "Built around you, not just the job.",
};

export default function CultureFeatureSection() {
  return (
    <CoditasFeatureRows rows={cultureFeatureRows} intro={lifeAtIntro} />
  );
}
