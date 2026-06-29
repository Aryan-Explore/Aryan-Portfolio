import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, ArrowUpRight } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";
import FlipHeading from "../ui/FlipHeading";

const ease = [0.25, 0.1, 0.25, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const links = [
  { icon: Mail, label: "aryanvarma292@gmail.com", href: "mailto:aryanvarma292@gmail.com" },
  { icon: Github, label: "github.com/Aryan-Explore", href: "https://github.com/Aryan-Explore" },
  { icon: Linkedin, label: "linkedin.com/in/aryan-varma", href: "https://linkedin.com/in/aryan-varma" },
  { icon: Phone, label: "+91 94394 18123", href: "tel:+919439418123" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: "120px clamp(24px, 6vw, 96px) 80px", maxWidth: "1280px", margin: "0 auto" }}
    >
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
        <motion.div variants={fadeUp}>
          <SectionLabel number="07" label="Contact" />
        </motion.div>
        <motion.div variants={fadeUp}>
          <FlipHeading>Let's Build Something</FlipHeading>
        </motion.div>

        <motion.p
          variants={fadeUp}
          style={{
            marginTop: "20px",
            fontSize: "18px",
            lineHeight: 1.6,
            color: "var(--text-secondary)",
            maxWidth: "560px",
          }}
        >
          Open to internships, collaborations, and quietly ambitious side
          projects. The fastest way to reach me is email.
        </motion.p>

        <motion.div
          variants={fadeUp}
          style={{
            marginTop: "48px",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr)",
            gap: "12px",
          }}
          className="contact-grid"
        >
          {links.map((l) => {
            const Icon = l.icon;
            return (
              <a
                key={l.href}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "20px 24px",
                  borderRadius: "12px",
                  border: "1px solid var(--border-base)",
                  background: "var(--bg-card)",
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  transition: "border-color 0.3s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-base)";
                }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: "14px" }}>
                  <Icon size={16} color="var(--text-tertiary)" />
                  <span style={{ fontSize: "15px" }}>{l.label}</span>
                </span>
                <ArrowUpRight size={16} color="var(--text-tertiary)" />
              </a>
            );
          })}
        </motion.div>

        <div
          style={{
            marginTop: "96px",
            paddingTop: "32px",
            borderTop: "1px solid var(--border-base)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            fontSize: "12px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--text-tertiary)",
          }}
        >
          <span>© {new Date().getFullYear()} Aryan Varma</span>
          <span>Built with React · Framer Motion · Spline</span>
        </div>
      </motion.div>

      <style>{`
        @media (min-width: 800px) {
          .contact-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
      `}</style>
    </section>
  );
}
