import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Tag from "./Tag";

export type Project = {
  name: string;
  tagline: string;
  bullets: string[];
  stack: string[];
  github?: string;
  demo?: string;
};

const isTouchDevice = () =>
  typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

export default function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [sheen, setSheen] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e: React.MouseEvent) => {
    if (isTouchDevice() || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    setTilt({
      x: ((y - cy) / cy) * -8,
      y: ((x - cx) / cx) * 8,
    });
    setSheen({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleLeave = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
    setSheen({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 150, damping: 18, mass: 0.6 }}
      style={{
        position: "relative",
        padding: "32px",
        borderRadius: "16px",
        background: "var(--bg-card)",
        border: `1px solid ${hovered ? "var(--border-hover)" : "var(--border-base)"}`,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
        willChange: "transform",
        transition: "border-color 0.3s ease",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(420px circle at ${sheen.x}% ${sheen.y}%, rgba(255,255,255,0.06), transparent 50%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <h3
            style={{
              fontSize: "24px",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "var(--text-primary)",
              margin: 0,
            }}
          >
            {project.name}
          </h3>
          <p
            style={{
              marginTop: "8px",
              fontSize: "14px",
              color: "var(--text-secondary)",
              lineHeight: 1.5,
            }}
          >
            {project.tagline}
          </p>
        </div>
        <ul style={{ display: "flex", flexDirection: "column", gap: "8px", padding: 0, margin: 0, listStyle: "none" }}>
          {project.bullets.map((b, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                gap: "10px",
                fontSize: "13px",
                color: "var(--text-secondary)",
                lineHeight: 1.55,
              }}
            >
              <span style={{ color: "var(--text-tertiary)" }}>·</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
        <div style={{ display: "flex", gap: "20px", alignItems: "center", marginTop: "4px" }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "13px",
                color: "var(--text-secondary)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              GitHub <ArrowUpRight size={14} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "13px",
                color: "var(--text-primary)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              Live <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
