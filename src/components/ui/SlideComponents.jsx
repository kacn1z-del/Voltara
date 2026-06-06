import { THEMES } from "../../../data/constants";
import Logo from "../../common/Logo";

function SlideCanvas({ slide, themeIdx, compact = false }) {
  const th = THEMES[themeIdx] || THEMES[0];
  return (
    <div style={{
      background: th.bg,
      borderRadius: compact? 6 : 12,
      padding: compact? "10px 14px" : "22px 28px",
      aspectRatio: "16/9",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 6px 28px rgba(0,0,0,0.4)",
      width: "100%"
    }}>
      <div style={{ position:"absolute", top:0, right:0, width:"42%", height:"100%", background:`linear-gradient(135deg,transparent,${th.accent}18)`, pointerEvents:"none" }}/>
      <div style={{ position:"absolute", bottom:0, left:0, width:"4px", height:"55%", background:th.accent }}/>
      <div style={{ position:"absolute", top:compact?7:12, right:compact?9:16, display:"flex", alignItems:"center", gap:4 }}>
        <Logo size={compact?11:16}/>
        <span style={{ fontSize:compact?4:7, color:th.accent, fontWeight:800, letterSpacing:"0.15em" }}>VOLTARA</span>
      </div>
      <div style={{ color:th.accent, fontSize:compact?5:8, fontWeight:800, letterSpacing:"0.18em", marginBottom:compact?3:7 }}>PREMIUM</div>
      <div style={{ color:th.text, fontSize:compact?10:17, fontWeight:900, lineHeight:1.2, marginBottom:compact?4:9 }}>{slide?.title || "Título de la Diapositiva"}</div>
      <div style={{ color:`${th.text}bb`, fontSize:compact?7:11, lineHeight:1.6 }}>{slide?.content || "Contenido generado con Voltara AI"}</div>
      <div style={{ position:"absolute", bottom:compact?6:11, right:compact?9:16, color:`${th.text}33`, fontSize:compact?7:10, fontWeight:700 }}>{slide?.number || "01"}</div>
    </div>
  );
}

export default SlideCanvas;