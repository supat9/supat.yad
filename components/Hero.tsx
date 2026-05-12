export default function Hero() {
  return (
    <section id="intro" className="hero">
      <div className="container">
        <div className="eyebrow">Portfolio · 2026</div>
        <h1 className="hero-title">
          <span className="line">Supat Yadav</span>
          <span className="line muted">
            <em>Full Stack Engineer</em> based in Bangkok
          </span>
        </h1>
        <div className="hero-foot">
          <p className="hero-lede">
            Full-stack engineer proficient in Node.js, React.js, Next.js, and Go.
            Strong background in RESTful API design, user authentication, and
            responsive interfaces — building software that scales and reads well.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn btn--primary">
              See work <span className="arr">↓</span>
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch <span className="arr">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
