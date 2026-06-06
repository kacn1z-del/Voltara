import { getT } from "../data/constants";

function HomeView({ lang }) {
  const t = getT(lang);
  return (
    <div>
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:4 }}>{t.home.welcome}</h1>
      <p style={{ color:"#888", marginBottom:18 }}>{t.home.desc}</p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:10 }}>
        {t.home.stats.map((s,i) => (
          <div key={i} style={{ background:"#181b2a", border:"1px solid #1e2136", borderRadius:12, padding:12, textAlign:"center" }}>
            <div style={{ fontSize:22, fontWeight:900, color:["#1a6cf0","#f4511e","#0ea96b","#9b1af0"][i] }}>{s.n}</div>
            <div style={{ fontSize:9, color:"#888", marginTop:2 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeView;