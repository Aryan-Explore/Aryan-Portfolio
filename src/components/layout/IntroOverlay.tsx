import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroOverlay({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 300);
    }, 5000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--bg-base)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <motion.img
            src="/pixel-character.png"
            alt=""
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] },
              scale: { duration: 0.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] },
              y: { duration: 1.2, delay: 0.6, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{
              width: "144px",
              height: "144px",
              imageRendering: "pixelated",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontSize: "13px",
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--text-tertiary)",
              fontFamily: "var(--font-main)",
            }}
          >
            hello
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
