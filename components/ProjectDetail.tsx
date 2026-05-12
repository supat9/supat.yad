"use client";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/data";

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
  onNext: () => void;
}

export default function ProjectDetail({
  project,
  onClose,
  onNext,
}: ProjectDetailProps) {
  const panelRef = useRef<HTMLElement>(null);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    setImgIndex(0);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  // Scroll panel to top when project changes
  useEffect(() => {
    if (project && panelRef.current) {
      const scroll = panelRef.current.querySelector(".detail-scroll");
      if (scroll) scroll.scrollTop = 0;
    }
  }, [project]);

  return (
    <div
      className={`detail-overlay${project ? " is-open" : ""}`}
      aria-hidden={!project}
    >
      <div className="detail-scrim" onClick={onClose} />
      <aside className="detail-panel" ref={panelRef} role="dialog" aria-modal="true">
        {project && (
          <div className="detail-scroll">
            <div className="detail-head">
              <button onClick={onClose} className="detail-close" aria-label="Close">
                <span className="dc-arr">←</span> Back to work
              </button>
            </div>

            <div className="detail-hero">
              <div className="eyebrow">
                {project.n} · {project.year}
              </div>
              <h2 className="detail-title">{project.title}</h2>
              <p className="detail-kicker">{project.kicker}</p>
            </div>

            <div className="detail-figure">
              {project.images && project.images.length > 0 ? (
                <div style={{ position: "relative" }}>
                  <img
                    src={project.images[imgIndex]}
                    alt={`${project.title} screenshot ${imgIndex + 1}`}
                    style={{
                      width: "100%",
                      aspectRatio: "16 / 10",
                      objectFit: "cover",
                      borderRadius: "4px",
                      border: "1px solid var(--rule)",
                      display: "block",
                    }}
                  />
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setImgIndex((i) => (i - 1 + project.images!.length) % project.images!.length)}
                        aria-label="Previous image"
                        style={{
                          position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)",
                          background: "oklch(0 0 0 / 0.5)", color: "#fff", border: "none",
                          borderRadius: "50%", width: "32px", height: "32px", cursor: "pointer",
                          fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center",
                        }}
                      >←</button>
                      <button
                        onClick={() => setImgIndex((i) => (i + 1) % project.images!.length)}
                        aria-label="Next image"
                        style={{
                          position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)",
                          background: "oklch(0 0 0 / 0.5)", color: "#fff", border: "none",
                          borderRadius: "50%", width: "32px", height: "32px", cursor: "pointer",
                          fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center",
                        }}
                      >→</button>
                      <div style={{
                        position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)",
                        display: "flex", gap: "6px",
                      }}>
                        {project.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setImgIndex(i)}
                            aria-label={`Go to image ${i + 1}`}
                            style={{
                              width: "6px", height: "6px", borderRadius: "50%", border: "none",
                              background: i === imgIndex ? "#fff" : "oklch(1 0 0 / 0.4)",
                              cursor: "pointer", padding: 0,
                            }}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="figure-slot">
                  <span className="figure-slot-label">
                    {project.title} — screenshot
                  </span>
                </div>
              )}
            </div>

            <div className="detail-meta">
              <div className="dm-cell">
                <div className="dm-label">Year</div>
                <div className="dm-value">{project.year}</div>
              </div>
              <div className="dm-cell">
                <div className="dm-label">Role</div>
                <div className="dm-value">{project.role}</div>
              </div>
              <div className="dm-cell dm-cell--wide">
                <div className="dm-label">Stack</div>
                <ul className="dm-stack">
                  {project.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="detail-section">
              <div className="ds-label">Overview</div>
              <p className="ds-body">{project.overview}</p>
            </div>

            <div className="detail-section">
              <div className="ds-label">Key highlights</div>
              <ul className="ds-list">
                {project.highlights.map((h, i) => (
                  <li key={i}>
                    <span className="ds-li-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <div className="ds-label">Challenge</div>
              <p className="ds-body">{project.challenge}</p>
            </div>

            <div className="detail-foot">
              <button onClick={onClose} className="btn btn--ghost">
                <span className="arr">←</span> Back to work
              </button>
              <button onClick={onNext} className="btn btn--primary">
                Next project <span className="arr">→</span>
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
