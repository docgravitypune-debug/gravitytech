export default function CoditasIntroBand({
  eyebrow,
  title,
  titleAccent,
  subtitle,
}) {
  return (
    <section className="coditas-intro-band">
      <div className="container coditas-intro-grid">
        <div>
          {eyebrow ? <p className="coditas-intro-eyebrow">{eyebrow}</p> : null}
          <h2>
            {title} {titleAccent ? <span>{titleAccent}</span> : null}
          </h2>
        </div>
        <div className="coditas-intro-side">
          <p>{subtitle}</p>
          <span className="coditas-intro-line" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
