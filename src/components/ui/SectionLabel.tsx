export default function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        fontSize: "12px",
        fontWeight: 500,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "var(--text-tertiary)",
        marginBottom: "24px",
      }}
    >
      <span>{number}</span>
      <span style={{ width: "32px", height: "1px", background: "var(--border-base)" }} />
      <span>{label}</span>
    </div>
  );
}
