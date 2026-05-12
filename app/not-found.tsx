export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "16px",
        fontFamily: "var(--mono)",
      }}
    >
      <p style={{ fontSize: "14px", opacity: 0.4 }}>404</p>
      <p>Page not found.</p>
      <a href="/" style={{ fontSize: "14px", opacity: 0.6 }}>
        ← Back home
      </a>
    </div>
  );
}
