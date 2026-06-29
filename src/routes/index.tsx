import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import IntroOverlay from "@/components/layout/IntroOverlay";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import CurrentlyExploring from "@/components/sections/CurrentlyExploring";
import Experiences from "@/components/sections/Experiences";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aryan Varma, Frontend Developer & AI Explorer" },
      {
        name: "description",
        content:
          "Portfolio of Aryan Varma, frontend developer, AI explorer, and builder. React, Tailwind, Framer Motion, and AI-assisted workflows.",
      },
      { property: "og:title", content: "Aryan Varma, Frontend Developer & AI Explorer" },
      {
        property: "og:description",
        content:
          "Portfolio of Aryan Varma, frontend developer and AI explorer. Brain Bin, DormEase, Tick It and more.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <IntroOverlay onComplete={() => setIntroDone(true)} />
      <main
        style={{
          opacity: introDone ? 1 : 0,
          transition: "opacity 0.4s ease",
          background: "var(--bg-base)",
          color: "var(--text-primary)",
        }}
      >
        <Hero />
        <About />
        <Projects />
        <CurrentlyExploring />
        <Experiences />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}
