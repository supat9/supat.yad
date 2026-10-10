"use client";
import { PROJECTS } from "@/lib/data";

interface WorkProps {
  onOpen: (n: string) => void;
}

const WORK_GROUPS = [
  { title: "Professional Experience", items: PROJECTS.filter((p) => p.category === "experience") },
  { title: "Selected Projects", items: PROJECTS.filter((p) => p.category !== "experience") },
];

export default function Work({ onOpen }: WorkProps) {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-header" data-reveal>
          <div className="eyebrow">Selected Work</div>
          <h2 className="section-title">Experience &amp; projects.</h2>
        </div>
        {WORK_GROUPS.map((group) => (
          <div className="work-group" key={group.title}>
            <h3 className="work-group-title">{group.title}</h3>
            <div className="projects">
            {group.items.map((p) => (
              <button
                key={p.n}
                className="project"
                onClick={() => onOpen(p.n)}
                data-reveal
              >
                <div className="p-row">
                  <span className="p-num">{p.n}</span>
                  <div className="p-main">
                    <h4 className="p-title">{p.title}</h4>
                    <span className="p-kicker">{p.category === "experience" ? p.role : p.kicker}</span>
                  </div>
                  <span className="p-year">{p.year}</span>
                  <span className="p-cta">
                    <span className="p-cta-label">View details</span>
                    <span className="arr">→</span>
                  </span>
                </div>
                <p className="p-summary">{p.summary}</p>
              </button>

        ))}
          </div>
        </div>
        ))}
      </div>
    </section>
  );
}
