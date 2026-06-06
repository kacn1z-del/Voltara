function EngagementBars({ dark }) {
  const data = [
    {l:"Slide 1",v:92,t:"1m 24s"},{l:"Slide 2",v:78,t:"58s"},
    {l:"Slide 3",v:45,t:"32s"}, {l:"Slide 4",v:88,t:"1m 12s"},
    {l:"Slide 5",v:61,t:"44s"}, {l:"Slide 6",v:71,t:"52s"},
  ];
  return (
    <div>
      {data.map((d,i) => (
        <div key={i} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:9 }}>
          <span style={{ fontSize:10, color:dark?"#888":"#aaa", width:46, flexShrink:0 }}>{d.l}</span>
          <div style={{ flex:1, height:17, background:dark?"#1e2136":"#edf0fa", borderRadius:8, overflow:"hidden" }}>
            <div style={{ height:"100%", width:`${d.v}%`, background:d.v>80?"linear-gradient(90deg,#0ea96b,#1ae0d0)":d.v>60?"linear-gradient(90deg,#1a6cf0,#0ea96b)":"linear-gradient(90deg,#e0aa1a,#f4511e)", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"flex-end", paddingRight:6, transition:"width.8s ease" }}>
              <span style={{ fontSize:9, color:"#fff", fontWeight:700 }}>{d.v}%</span>
            </div>
          </div>
          <span style={{ fontSize:9, color:dark?"#555":"#bbb", width:36, textAlign:"right" }}>{d.t}</span>
        </div>
      ))}
    </div>
  );
}

export default EngagementBars;