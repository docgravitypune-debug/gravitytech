import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const variantColors = {
  default: { primary: "#7c3aed", secondary: "#22d3ee", glow: "rgba(124, 58, 237, 0.45)" },
  violet: { primary: "#8b5cf6", secondary: "#c4b5fd", glow: "rgba(139, 92, 246, 0.5)" },
  cyan: { primary: "#06b6d4", secondary: "#67e8f9", glow: "rgba(6, 182, 212, 0.45)" },
  lime: { primary: "#84cc16", secondary: "#bef264", glow: "rgba(132, 204, 22, 0.4)" },
  sunset: { primary: "#f97316", secondary: "#fdba74", glow: "rgba(249, 115, 22, 0.45)" },
};

function Cube({ colors }) {
  return (
    <div className="hero-shape-cube" style={{ "--shape-a": colors.primary, "--shape-b": colors.secondary }}>
      <span className="hero-shape-face hero-shape-face--front" />
      <span className="hero-shape-face hero-shape-face--back" />
      <span className="hero-shape-face hero-shape-face--right" />
      <span className="hero-shape-face hero-shape-face--left" />
      <span className="hero-shape-face hero-shape-face--top" />
      <span className="hero-shape-face hero-shape-face--bottom" />
    </div>
  );
}

export default function HeroScene3D({ variant = "default", className = "" }) {
  const sceneRef = useRef(null);
  const colors = variantColors[variant] || variantColors.default;
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 18 });

  useEffect(() => {
    const handleMove = (event) => {
      const bounds = sceneRef.current?.getBoundingClientRect();
      if (!bounds) {
        return;
      }

      pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
      pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, [pointerX, pointerY]);

  return (
    <div className={`hero-scene-3d ${className}`.trim()} ref={sceneRef} aria-hidden="true">
      <motion.div
        className="hero-scene-3d-stage"
        style={{
          rotateX,
          rotateY,
          "--scene-glow": colors.glow,
        }}
      >
        <motion.div
          className="hero-shape-orbit hero-shape-orbit--a"
          animate={{ rotateZ: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          <span className="hero-shape-ring" style={{ borderColor: colors.secondary }} />
        </motion.div>

        <motion.div
          className="hero-shape-orbit hero-shape-orbit--b"
          animate={{ rotateZ: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          <span className="hero-shape-sphere" style={{ background: colors.primary }} />
        </motion.div>

        <motion.div
          className="hero-shape-cube-wrap"
          animate={{ rotateX: 360, rotateY: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          <Cube colors={colors} />
        </motion.div>

        <motion.span
          className="hero-shape-prism"
          style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}
          animate={{ y: [0, -14, 0], rotateZ: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <span className="hero-scene-3d-floor" />
      </motion.div>
    </div>
  );
}
