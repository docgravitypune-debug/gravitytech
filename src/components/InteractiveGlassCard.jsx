import { motion } from "framer-motion";

export default function InteractiveGlassCard({
  as = "article",
  className = "",
  children,
  delay = 0,
  hoverLift = -8,
  ...props
}) {
  const Component = motion[as] || motion.article;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: hoverLift, scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </Component>
  );
}
