import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import useTilt3D from "../hooks/useTilt3D.js";

const motionMap = {
  article: motion.article,
  div: motion.div,
  li: motion.li,
  a: motion(Link),
};

export default function GradientCard({
  as = "article",
  to,
  href,
  className = "",
  variant = "violet",
  delay = 0,
  showArrow = true,
  children,
  ...props
}) {
  const isLink = Boolean(to || href);
  const Component = isLink ? motion(Link) : motionMap[as] || motion.article;
  const linkProps = to ? { to } : href ? { to: href } : {};
  const { ref, style, onMouseMove, onMouseLeave } = useTilt3D({ maxTilt: 8, scale: 1.015 });

  return (
    <Component
      className={`gradient-tile gradient-tile--${variant} ${className}`.trim()}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      {...linkProps}
      {...props}
    >
      <div
        className="tilt-card-3d"
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
        ref={ref}
        style={style}
      >
        <span className="tilt-card-3d-glare" aria-hidden="true" />
        <span className="gradient-tile-shine" aria-hidden="true" />
        <span className="tilt-card-3d-content">
          {children}
          {isLink && showArrow ? (
            <span className="gradient-tile-arrow" aria-hidden="true">
              <ArrowUpRight size={18} />
            </span>
          ) : null}
        </span>
      </div>
    </Component>
  );
}
