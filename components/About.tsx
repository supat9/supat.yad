import { PROFILE } from "@/lib/data";

const PARAGRAPHS = [
  "I'm a full-stack software engineer based in Bangkok and a First-Class Honors graduate in Information Technology from Kasetsart University, with a GPA of 3.91. I build web applications with React.js, Next.js, and Go — from frontend interfaces and RESTful APIs to application data and deployment.",
  "At Atiz Innovation, I work as a Full Stack Developer using Go with Gin, MongoDB, PostgreSQL, and MySQL. My work includes payment gateway and LINE Official Account integrations, project setup, AWS deployment, and CI/CD workflows. I also integrate AI for internal knowledge retrieval, data summarization, and explanation.",
  "Previously, I worked as a Software Engineer at Ngern Hai Jai, developing production features with Next.js and Go in an Agile team. That experience included microservices, Domain-Driven Design, and collaboration through pull requests and code reviews.",
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
              <dt>Focus</dt>
              <dd>{PROFILE.focus}</dd>
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
