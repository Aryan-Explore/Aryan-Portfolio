import { motion } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";
import FlipHeading from "../ui/FlipHeading";
import Tag from "../ui/Tag";

const ease = [0.25, 0.1, 0.25, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const skills = {
  Languages: ["JavaScript", "Java", "Python"],
  Frontend: ["React.js", "HTML", "CSS", "Tailwind CSS", "Framer Motion"],
  Backend: ["Node.js", "Express.js"],
  Database: ["MySQL"],
  Tools: ["Git", "GitHub", "Figma", "Canva"],
};

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "120px clamp(24px, 6vw, 96px)", maxWidth: "1280px", margin: "0 auto" }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeUp}>
          <SectionLabel number="02" label="About" />
        </motion.div>
        <motion.div variants={fadeUp}>
          <FlipHeading>Who I Am</FlipHeading>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr)",
            gap: "48px",
            marginTop: "48px",
          }}
          className="about-grid"
        >
          <motion.div variants={fadeUp}>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "var(--text-secondary)",
                margin: 0,
              }}
            >
              I'm a software engineering undergrad at Siksha 'O' Anusandhan
              University (ITER), focused on building responsive, scalable web
              applications with a strong emphasis on UI, motion, and
              component-based architecture.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "var(--text-secondary)",
                marginTop: "20px",
              }}
            >
              Most of my work so far has been student-focused platforms: resource
              sharing, hostel operations, and task management, where the
              real challenge is making something feel calm and obvious to use.
              I'm currently expanding into full-stack and AI-assisted
              engineering workflows.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--text-tertiary)",
                    marginBottom: "12px",
                  }}
                >
                  {group}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {items.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        @media (min-width: 900px) {
          .about-grid { grid-template-columns: 1.2fr 1fr !important; gap: 80px !important; }
        }
      `}</style>
    </section>
  );
}
