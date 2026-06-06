export default function SlideCanvas({ slide, themeIdx }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        aspectRatio: "16/9",
        backgroundColor: "#f0f0f0",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "48px", fontWeight: "900", marginBottom: "20px" }}>
        {slide.number}
      </div>
      <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "20px" }}>
        {slide.title}
      </h2>
      <p style={{ fontSize: "18px", color: "#666" }}>
        {slide.content}
      </p>
    </div>
  );
}
