export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {year} Supat Yadav</span>
        <span className="muted">Hand-built · no template</span>
      </div>
    </footer>
  );
}
