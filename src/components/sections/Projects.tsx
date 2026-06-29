import { motion } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";
import FlipHeading from "../ui/FlipHeading";
import ProjectCard, { type Project } from "../ui/ProjectCard";

const ease = [0.25, 0.1, 0.25, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const projects: Project[] = [
  {
    name: "Brain Bin",
    tagline: "A responsive student resource-sharing platform for notes, assignments, projects, and PYQs.",
    bullets: [
      "Built and deployed with reusable UI components and animated interactions.",
      "Category-based filtering for fast, friction-free discovery.",
      "Optimised frontend responsiveness across phones, tablets, and laptops.",
    ],
    stack: ["React.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "DormEase",
    tagline: "Hostel management platform unifying attendance, maintenance, food feedback, and laundry.",
    bullets: [
      "Designed responsive UI workflows to centralise hostel operations.",
      "Structured scalable, modular frontend components for long-term maintainability.",
      "Focused on usability across the devices students actually carry.",
    ],
    stack: ["React.js", "JavaScript", "Tailwind CSS"],
  },
  {
    name: "Tick It",
    tagline: "A lightweight task manager with localStorage persistence and clean interactions.",
    bullets: [
      "Dynamic task handling with optimised frontend responsiveness.",
      "Clean UI interactions over a minimal, distraction-free surface.",
      "Built to feel instant on first paint and on every interaction.",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: "120px clamp(24px, 6vw, 96px)", maxWidth: "1280px", margin: "0 auto" }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeUp}>
          <SectionLabel number="03" label="Projects" />
        </motion.div>
        <motion.div variants={fadeUp}>
          <FlipHeading>Things I've Built</FlipHeading>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr)",
            gap: "24px",
            marginTop: "56px",
          }}
          className="proj-grid"
        >
          {projects.map((p) => (
            <motion.div key={p.name} variants={fadeUp}>
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (min-width: 900px) {
          .proj-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 28px !important; }
        }
        @media (min-width: 1280px) {
          .proj-grid { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
        }
      `}</style>
    </section>
  );
}
