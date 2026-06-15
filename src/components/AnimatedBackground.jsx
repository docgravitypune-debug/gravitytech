import { motion } from "framer-motion";

export default function AnimatedBackground({ variant = "default" }) {
  const orbs = [
    { className: "orb orb-cyan", x: [0, 44, -18, 0], y: [0, -30, 28, 0] },
    { className: "orb orb-violet", x: [0, -36, 26, 0], y: [0, 32, -22, 0] },
    { className: "orb orb-lime", x: [0, 22, -34, 0], y: [0, -20, 30, 0] },
  ];

  return (
    <div className={`animated-bg animated-bg-${variant}`} aria-hidden="true">
      <div className="grid-glow" />
      <div className="scan-line" />
      {orbs.map((orb, index) => (
        <motion.span
          className={orb.className}
          animate={{ x: orb.x, y: orb.y, scale: [1, 1.08, 0.96, 1] }}
          transition={{ duration: 12 + index * 2, repeat: Infinity, ease: "easeInOut" }}
          key={orb.className}
        />
      ))}
    </div>
  );
}
