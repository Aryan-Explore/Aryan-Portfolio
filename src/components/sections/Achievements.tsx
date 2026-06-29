import { motion } from "framer-motion";
import { Trophy, Sparkles } from "lucide-react";
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
    icon: Trophy,
    title: "1st Place: Marketing Wizard, ITER",
    body: "Strategy-based, data-driven pitching competition. Built the case, told the story, won the room.",
  },
  {
    icon: Sparkles,
    title: "B-Plan participant: E-SUMMIT'25",
    body: "Organised by ED-Cell, IIEC, OUTR. Pitched and refined an early-stage business plan with a team.",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      style={{ padding: "120px clamp(24px, 6vw, 96px)", maxWidth: "1280px", margin: "0 auto" }}
    >
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
        <motion.div variants={fadeUp}>
          <SectionLabel number="06" label="Achievements" />
        </motion.div>
        <motion.div variants={fadeUp}>
          <FlipHeading>Recognised For</FlipHeading>
        </motion.div>

        <div
          style={{
            marginTop: "56px",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr)",
            gap: "24px",
          }}
          className="ach-grid"
        >
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{
                  padding: "32px",
                  borderRadius: "16px",
                  border: "1px solid var(--border-base)",
                  background: "var(--bg-card)",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "var(--bg-subtle)",
                    border: "1px solid var(--border-base)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-primary)",
                    marginBottom: "20px",
                  }}
                >
                  <Icon size={18} />
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    margin: 0,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {it.title}
                </h3>
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "var(--text-secondary)",
                  }}
                >
                  {it.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <style>{`
        @media (min-width: 800px) {
          .ach-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
      `}</style>
    </section>
  );
}
