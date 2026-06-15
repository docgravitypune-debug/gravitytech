import useTilt3D from "../hooks/useTilt3D.js";

export default function TiltCard3D({
  as: Component = "div",
  className = "",
  maxTilt = 10,
  scale = 1.02,
  children,
  ...props
}) {
  const { ref, style, onMouseMove, onMouseLeave } = useTilt3D({ maxTilt, scale });

  return (
    <Component
      className={`tilt-card-3d ${className}`.trim()}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      ref={ref}
      style={style}
      {...props}
    >
      <span className="tilt-card-3d-glare" aria-hidden="true" />
      <span className="tilt-card-3d-content">{children}</span>
    </Component>
  );
}
