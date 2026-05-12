"use client";
import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import ProjectDetail from "@/components/ProjectDetail";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/useReveal";
import { useActiveSection } from "@/hooks/useActiveSection";
import { PROJECTS } from "@/lib/data";

const SECTION_IDS = ["intro", "about", "work", "skills", "contact"];

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const openProject = openIdx != null ? PROJECTS[openIdx] : null;

  useReveal();
  const active = useActiveSection(SECTION_IDS);

  // Sync theme to <html> data-theme attribute
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const openByN = (n: string) => {
    const idx = PROJECTS.findIndex((p) => p.n === n);
    if (idx >= 0) setOpenIdx(idx);
  };

  const nextProject = () =>
    setOpenIdx((i) => (i == null ? 0 : (i + 1) % PROJECTS.length));

  return (
    <div className="page">
      <Nav active={active} theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Work onOpen={openByN} />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ProjectDetail
        project={openProject}
        onClose={() => setOpenIdx(null)}
        onNext={nextProject}
      />
    </div>
  );
}
