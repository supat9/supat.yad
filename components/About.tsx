import { PROFILE } from "@/lib/data";

const PARAGRAPHS = [
  "I'm a full-stack software engineer based in Bangkok with a B.Sc. in Information Technology from Kasetsart University. I build robust, scalable web applications across the full stack — from database schema design to responsive front-end interfaces.",
  "My experience spans Node.js, React.js, Next.js, and Go. I have hands-on production experience from my time at Ngern Hai Jai Co., Ltd., where I worked on fintech features using Next.js and Golang within an Agile team, applying microservices architecture and Domain-Driven Design.",
  "I'm currently seeking a full-time Software Engineer position where I can contribute my technical skills and grow within a collaborative development team.",
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header" data-reveal>
          <div className="eyebrow">About</div>
          <h2 className="section-title">A few words.</h2>
        </div>
        <div className="about-grid" data-reveal>
          <div className="about-body">
            {PARAGRAPHS.map((p, i) => (
              <p key={i} className="about-para">
                {p}
              </p>
            ))}
          </div>
          <aside className="about-aside">
            <dl className="aside-dl">
              <dt>Based</dt>
              <dd>{PROFILE.location}</dd>
              <dt>Status</dt>
              <dd>{PROFILE.status}</dd>
              <dt>Education</dt>
              <dd>{PROFILE.education}</dd>
              <dt>Email</dt>
              <dd>
                <a href={`https://mail.google.com/mail/?view=cm&to=${PROFILE.contact}`} target="_blank" rel="noopener noreferrer" className="link-quiet">
                  {PROFILE.contact}
                </a>
              </dd>
              <dt>Languages</dt>
              <dd>{PROFILE.languages}</dd>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
