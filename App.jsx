import { useState, useEffect } from "react";
import { LANGS, getT, THEMES } from "./data/constants";
import Logo from "./components/common/Logo";
import SlideCanvas from "./components/features/slides/SlideCanvas";

export default function Voltara() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState("es");
  const [tab, setTab] = useState("home");
  const [slides, setSlides] = useState([]);
  const [selSlide, setSelSlide] = useState(null);
  const [themeIdx, setThemeIdx] = useState(0);

  const t = getT(lang);

  // Colores base
  const bg = dark? "#08090f" : "#f2f4fb";
  const surf = dark? "#10121c" : "#ffffff";
  const bord = dark? "#1e2136" : "#dde3f5";
  const txt = dark? "#e6e8f5" : "#111827";
  const muted = dark? "#4a5070" : "#7a88a8";
  const acc = "#1a6cf0";

  return (
    <div style={{ fontFamily:"'Segoe UI',system-ui,sans-serif", background:bg, color:txt, minHeight:"100vh" }}>

      {/* HEADER */}
      <header style={{ background:surf, borderBottom:`1px solid ${bord}`, padding:"0 18px", height:56, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <Logo size={34}/>
          <div>
            <div style={{ fontSize:17, fontWeight:900, letterSpacing:"-0.03em" }}>Voltara</div>
            <div style={{ fontSize:"7px", color:"#f4511e", fontWeight:800, letterSpacing:"0.13em" }}>{t.badge}</div>
          </div>
        </div>

        <select value={lang} onChange={e=>setLang(e.target.value)} style={{ background:surf, border:`1px solid ${bord}`, borderRadius:8, padding:"6px 11px", color:txt }}>
          {LANGS.map(l => <option key={l.code} value={l.code}>{l.flag} {l.name}</option>)}
        </select>

        <button onClick={() => setDark(d =>!d)} style={{ background:surf, border:`1px solid ${bord}`, borderRadius:8, padding:"6px 11px", cursor:"pointer", color:txt }}>
          {dark? "☀️" : "🌙"} {dark? t.lightMode : t.darkMode}
        </button>
      </header>

      {/* CONTENIDO */}
      <main style={{ padding:"18px 22px" }}>
        <h1 style={{ fontSize:26, fontWeight:900 }}>{t.home.welcome}</h1>
        <p style={{ color:muted }}>{t.home.desc}</p>

        {selSlide? (
          <SlideCanvas slide={selSlide} themeIdx={themeIdx} />
        ) : (
          <button onClick={() => {
            const s = {id:1, number:"01", title:"Slide de prueba", content:"Contenido"};
            setSlides([s]);
            setSelSlide(s);
          }} style={{ background:acc, border:"none", borderRadius:10, padding:"11px 20px", color:"#fff", fontWeight:700, cursor:"pointer" }}>
            + Crear slide
          </button>
        )}
      </main>
    </div>
  );
}