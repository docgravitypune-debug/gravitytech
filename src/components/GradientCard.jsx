import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

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

  return (
    <Component
      className={`gradient-tile gradient-tile--${variant} ${className}`.trim()}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      {...linkProps}
      {...props}
    >
      <span className="gradient-tile-shine" aria-hidden="true" />
      {children}
      {isLink && showArrow ? (
        <span className="gradient-tile-arrow" aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      ) : null}
    </Component>
  );
}
