import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header" data-reveal>
          <div className="eyebrow">Skills</div>
          <h2 className="section-title">Tools in regular rotation.</h2>
        </div>
        <div className="skills-grid" data-reveal>
          {SKILLS.map((g) => (
            <div key={g.group} className="skill-col">
              <div className="skill-group">{g.group}</div>
              <ul className="skill-list">
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
