import { motion } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";
import FlipHeading from "../ui/FlipHeading";

const row1 = [
  "React", "Next.js", "Tailwind CSS", "Framer Motion", "Node.js",
  "Express", "MySQL", "Git", "Figma", "RAG Systems",
  "LLM Integration", "Prompt Engineering",
];
const row2 = [
  "Cursor", "Claude", "Firebase", "MongoDB", "TypeScript",
  "Python", "REST APIs", "Component Architecture",
  "AI Accessibility", "Modern UI Systems", "Vite", "Vercel",
];

function MarqueeRow({ items, direction = "left" }: { items: string[]; direction?: "left" | "right" }) {
  const doubled = [...items, ...items];
  const from = direction === "left" ? "0%" : "-50%";
  const to = direction === "left" ? "-50%" : "0%";
  return (
    <div style={{ overflow: "hidden", maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}>
      <motion.div
        className="marquee-track"
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        style={{ gap: "12px", padding: "8px 0" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "10px 18px",
              borderRadius: "999px",
              border: "1px solid var(--border-base)",
              background: "var(--bg-card)",
              color: "var(--text-secondary)",
              fontSize: "14px",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

const ease = [0.25, 0.1, 0.25, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export default function CurrentlyExploring() {
  return (
    <section
      id="exploring"
      style={{ padding: "120px 0", maxWidth: "1440px", margin: "0 auto" }}
    >
      <div style={{ padding: "0 clamp(24px, 6vw, 96px)", marginBottom: "48px" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel number="04" label="Currently Exploring" />
          </motion.div>
          <motion.div variants={fadeUp}>
            <FlipHeading>Currently Exploring</FlipHeading>
          </motion.div>
          <motion.p
            variants={fadeUp}
            style={{
              marginTop: "16px",
              fontSize: "16px",
              color: "var(--text-secondary)",
              maxWidth: "520px",
            }}
          >
            What's open in my browser right now.
          </motion.p>
        </motion.div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>
    </section>
  );
}
