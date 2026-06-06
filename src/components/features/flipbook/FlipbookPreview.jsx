import { useState } from "react";
import { THEMES } from "../../../data/constants";

function FlipbookPreview({ slides, themeIdx, dark }) {
  const [page, setPage] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const th = THEMES[themeIdx] || THEMES[0];
  const total = Math.max(slides.length, 3);
  const surf = dark? "#181b2a" : "#fff";
  const bord = dark? "#1e2136" : "#dde3f5";

  const flip = (dir) => {
    setFlipping(true);
    setTimeout(() => {
      setPage(p => Math.max(0, Math.min(total-1, p+dir)));
      setFlipping(false);
    }, 320);
  };

  return (
    <div style={{ background:dark?"#0d0f1a":"#f0f4ff", borderRadius:14, padding:20, textAlign:"center" }}>
      <div style={{ display:"inline-block", position:"relative", perspective:"1200px" }}>
        <div style={{ position:"absolute", bottom:-8, left:"5%", right:"5%", height:16, background:"rgba(0,0,0,0.25)", borderRadius:"50%", filter:"blur(8px)" }}/>
        <div style={{ display:"inline-flex", boxShadow:"0 8px 32px rgba(0,0,0,0.3)", borderRadius:"2px 0 0 2px" }}>
          {/* Página izquierda */}
          <div style={{ width:200, height:142, background:th.bg, borderRadius:"4px 0 0 4px", padding:"12px 14px", position:"relative", overflow:"hidden", display:"flex", flexDirection:"column", justifyContent:"center" }}>
            <div style={{ position:"absolute", top:0, right:0, width:"35%", height:"100%", background:`linear-gradient(135deg,transparent,${th.accent}15)`, pointerEvents:"none" }}/>
            <div style={{ color:th.accent, fontSize:6, fontWeight:800, letterSpacing:"0.15em", marginBottom:4 }}>VOLTARA</div>
            <div style={{ color:th.text, fontSize:11, fontWeight:900, marginBottom:5, lineHeight:1.2 }}>{slides[page]?.title || `Slide ${page+1}`}</div>
            <div style={{ color:`${th.text}99`, fontSize:8, lineHeight:1.5 }}>{slides[page]?.content || "Contenido"}</div>
            <div style={{ position:"absolute", bottom:6, right:8, color:`${th.text}44`, fontSize:8, fontWeight:700 }}>{String(page+1).padStart(2,"0")}</div>
          </div>
          {/* Lomo */}
          <div style={{ width:8, background:`linear-gradient(to right,rgba(0,0,0,0.22),rgba(0,0,0,0.04))`, transform:flipping?"rotateY(-40deg)":"rotateY(0deg)", transformOrigin:"left center", transition:"transform.32s ease" }}/>
          {/* Página derecha */}
          <div style={{ width:200, height:142, background:surf, borderRadius:"0 4px 4px 0", padding:"12px 14px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:6, border:`1px solid ${bord}` }}>
            {page+1 < total? (
              <>
                <div style={{ color:dark?"#888":"#aaa", fontSize:7, fontWeight:700, marginBottom:2 }}>{String(page+2).padStart(2,"0")}</div>
                <div style={{ width:110, height:7, background:dark?"#1e2136":"#e8edf5", borderRadius:4 }}/>
                <div style={{ width:90, height:5, background:dark?"#1e2136":"#e8edf5", borderRadius:4 }}/>
                <div style={{ width:70, height:5, background:dark?"#1e2136":"#e8edf5", borderRadius:4 }}/>
              </>
            ) : <div style={{ color:dark?"#555":"#ccc", fontSize:12, fontWeight:600 }}>Fin</div>}
          </div>
        </div>
      </div>
      <div style={{ display:"flex", gap:12, justifyContent:"center", alignItems:"center", marginTop:14 }}>
        <button onClick={()=>flip(-1)} disabled={page===0} style={{ background:"none", border:`1px solid ${bord}`, borderRadius:7, padding:"5px 14px", cursor:page===0?"not-allowed":"pointer", color:page===0?"#555":"#1a6cf0", fontSize:14, fontWeight:700, opacity:page===0?0.4:1 }}>◀</button>
        <span style={{ fontSize:11, color:dark?"#888":"#aaa", minWidth:50, textAlign:"center" }}>{page+1} / {total}</span>
        <button onClick={()=>flip(1)} disabled={page>=total-1} style={{ background:"none", border:`1px solid ${bord}`, borderRadius:7, padding:"5px 14px", cursor:page>=total-1?"not-allowed":"pointer", color:page>=total-1?"#555":"#1a6cf0", fontSize:14, fontWeight:700, opacity:page>=total-1?0.4:1 }}>▶</button>
      </div>
    </div>
  );
}

export default FlipbookPreview;