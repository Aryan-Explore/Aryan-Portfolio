import { motion } from "framer-motion";
import type { CSSProperties } from "react";

export default function FlipHeading({
  children,
  style = {},
}: {
  children: string;
  style?: CSSProperties;
}) {
  const letters = String(children).split("");
  return (
    <motion.h2
      initial="rest"
      whileHover="hover"
      style={{
        display: "inline-flex",
        flexWrap: "wrap",
        perspective: "600px",
        fontSize: "clamp(2rem, 5vw, 3.5rem)",
        fontWeight: 600,
        letterSpacing: "-0.02em",
        lineHeight: 1.05,
        color: "var(--text-primary)",
        margin: 0,
        cursor: "default",
        ...style,
      }}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={{
            rest: { rotateX: 0 },
            hover: { rotateX: [0, -90, 0] },
          }}
          transition={{
            duration: 0.5,
            delay: i * 0.03,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{ display: "inline-block", transformStyle: "preserve-3d" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>
  );
}
