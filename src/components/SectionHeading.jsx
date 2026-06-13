export default function SectionHeading({ eyebrow, title, children, split = false, center = false }) {
  return (
    <div className={`section-heading ${split ? "split" : ""} ${center ? "center" : ""}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children ? <p>{children}</p> : null}
    </div>
  );
}
