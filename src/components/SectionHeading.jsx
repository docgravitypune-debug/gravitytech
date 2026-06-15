export default function SectionHeading({
  eyebrow,
  title,
  children,
  split = false,
  center = false,
  porto = false,
}) {
  return (
    <div
      className={`section-heading ${split ? "split" : ""} ${center ? "center" : ""} ${
        porto ? "porto-heading" : ""
      }`}
    >
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {porto ? <span className="porto-divider" aria-hidden="true" /> : null}
      </div>
      {children ? <p>{children}</p> : null}
    </div>
  );
}
