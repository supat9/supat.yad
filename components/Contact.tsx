import { PROFILE } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="section section--contact">
      <div className="container">
        <div className="contact-inner" data-reveal>
          <div className="eyebrow">Contact</div>
          <h2 className="contact-title">
            Let&apos;s build something <em>well-made.</em>
          </h2>
          <a href={`https://mail.google.com/mail/?view=cm&to=${PROFILE.contact}`} target="_blank" rel="noopener noreferrer" className="contact-mail">
            {PROFILE.contact} <span className="arr">→</span>
          </a>
          <div className="contact-row">
            <ul className="contact-social">
              {PROFILE.social.map((s) => (
                <li key={s.label}>
                  <span className="cs-label">{s.label}</span>
                  <a
                    href={s.href}
                    className="cs-handle"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.handle}
                  </a>
                </li>
              ))}
            </ul>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
              Download CV <span className="arr">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
