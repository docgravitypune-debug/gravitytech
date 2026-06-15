export default function ProSectionHeading({ eyebrow, title, children, center = false, light = false }) {
  return (
    <div className={`pro-section-head ${center ? "center" : ""} ${light ? "light" : ""}`}>
      {eyebrow ? <p className="pro-eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {children ? <p className="pro-section-copy">{children}</p> : null}
    </div>
  );
}
