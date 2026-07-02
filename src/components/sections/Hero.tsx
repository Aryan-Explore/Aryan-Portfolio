import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import SplineRobot from "../ui/SplineRobot";

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "120px clamp(24px, 6vw, 96px) 80px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr)",
          gap: "48px",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            style={{
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--text-tertiary)",
            }}
          >
            01 · Aryan Varma
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            style={{
              fontSize: "clamp(2.5rem, 6.5vw, 5rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
              margin: 0,
              color: "var(--text-primary)",
            }}
          >
            Full-Stack Developer{" "}
            <span style={{ color: "var(--text-tertiary)" }}>/</span> AI Explorer{" "}
            <span style={{ color: "var(--text-tertiary)" }}>·</span> Builder
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
            style={{
              fontSize: "clamp(15px, 1.4vw, 17px)",
              lineHeight: 1.65,
              color: "var(--text-secondary)",
              maxWidth: "560px",
              margin: 0,
            }}
          >
            I build responsive, intentional interfaces with React, Tailwind, and
            Framer Motion, and I'm currently expanding into full-stack and
            AI-assisted engineering workflows. Studying CSE at ITER, Bhubaneswar.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={btnPrimary}
            >
              View Resume <ArrowUpRight size={16} />
            </a>
            <span style={{ color: "var(--text-tertiary)" }}>·</span>
            <a href="/resume.pdf" download="Aryan-Varma-Resume.pdf" style={btnGhost}>
              Download <Download size={14} />
            </a>
            <span style={{ color: "var(--text-tertiary)" }}>·</span>
            <a href="#contact" style={btnGhost}>
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="hero-spline"
          style={{ display: "none" }}
        >
          <SplineRobot />
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .hero-grid { grid-template-columns: 55% 45% !important; }
          .hero-spline { display: block !important; }
        }
      `}</style>
    </section>
  );
}

const btnPrimary: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "12px 22px",
  borderRadius: "999px",
  background: "var(--text-primary)",
  color: "var(--bg-base)",
  fontSize: "14px",
  fontWeight: 500,
  textDecoration: "none",
  transition: "transform 0.2s ease",
};

const btnGhost: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  fontSize: "14px",
  color: "var(--text-secondary)",
  textDecoration: "none",
  transition: "color 0.2s ease",
};
