import { motion } from "framer-motion";
import CoditasIntroBand from "./CoditasIntroBand.jsx";

export default function CoditasFeatureRows({ rows, intro }) {
  return (
    <>
      {intro ? <CoditasIntroBand {...intro} /> : null}
      <section className="coditas-culture-band">
        <div className="coditas-culture-glow" aria-hidden="true" />
        <div className="container coditas-feature-stack">
          {rows.map((row, index) => (
            <motion.article
              className={`coditas-feature-row ${row.reverse ? "reverse" : ""}`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              key={row.title}
            >
              <div className={`coditas-feature-media ${row.reverse ? "is-right" : "is-left"}`}>
                <img src={`/assets/${row.image}`} alt={row.alt} loading="lazy" />
              </div>
              <div className="coditas-feature-copy">
                <h3>{row.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
