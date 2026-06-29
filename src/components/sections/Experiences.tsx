import { motion } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";
import FlipHeading from "../ui/FlipHeading";

const ease = [0.25, 0.1, 0.25, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const items = [
  {
    org: "Google Developer Groups Cloud, Bhubaneswar",
    role: "GPT in the Cloud · Developer event",
    body: "Explored LLM applications, RAG pipelines, prompt engineering, and AI automation workflows.",
  },
  {
    org: "JPMorgan Chase & Co., SEP Roadshow",
    role: "Enterprise engineering exposure",
    body: "Gained exposure to enterprise software practices, internship pathways, and large-scale product development.",
  },
  {
    org: "Siksha 'O' Anusandhan University (ITER)",
    role: "B.Tech, Computer Science & Engineering · 2023 – Present",
    body: "Studying CSE. Currently exploring full-stack development and AI-assisted engineering workflows.",
  },
];

export default function Experiences() {
  return (
    <section
      id="experiences"
      style={{ padding: "120px clamp(24px, 6vw, 96px)", maxWidth: "1280px", margin: "0 auto" }}
    >
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <motion.div variants={fadeUp}>
          <SectionLabel number="05" label="Experiences" />
        </motion.div>
        <motion.div variants={fadeUp}>
          <FlipHeading>Where I've Been</FlipHeading>
        </motion.div>

        <div style={{ marginTop: "56px", display: "flex", flexDirection: "column" }}>
          {items.map((it, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr)",
                gap: "8px",
                padding: "28px 0",
                borderTop: "1px solid var(--border-base)",
                borderBottom: i === items.length - 1 ? "1px solid var(--border-base)" : "none",
              }}
              className="exp-row"
            >
              <div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    margin: 0,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {it.org}
                </h3>
                <div
                  style={{
                    marginTop: "6px",
                    fontSize: "13px",
                    color: "var(--text-tertiary)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {it.role}
                </div>
              </div>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                  margin: 0,
                }}
              >
                {it.body}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (min-width: 900px) {
          .exp-row { grid-template-columns: 1.1fr 1fr !important; gap: 48px !important; align-items: start; }
        }
      `}</style>
    </section>
  );
}
