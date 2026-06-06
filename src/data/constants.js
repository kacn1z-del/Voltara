export const LANGS = [
  { code:"es", flag:"🇨🇷", name:"Español" },
  { code:"en", flag:"🇺🇸", name:"English" },
  { code:"bribri", flag:"🌿", name:"Bribri" },
  { code:"cabecar", flag:"🌿", name:"Cabécar" },
  { code:"maleku", flag:"🌿", name:"Maleku" },
  { code:"brunca", flag:"🌿", name:"Brunca" },
  { code:"ngabe", flag:"🌿", name:"Ngäbe" },
];

export const DICT = {
  es: {
    appName:"Voltara", badge:"PREMIUM CORPORATE",
    tagline:"La plataforma que supera a PowerPoint, Canva y Google Slides",
    // ... pega aquí TODO el objeto "es" completo que me pasaste
  },
  en: {
    // ... pega aquí TODO el objeto "en" completo que me pasaste
  },
};

export const INDIG = {
  bribri:{nav:{home:"Kë' tso'",ai:"IA yök",design:"Dör tö'",editor:"I̠ẽ̤ klö'",flipbook:"Flipbook",analytics:"Yök tö'",smartDesigner:"Smart AI",narrative:"I̠ẽ̤ sör",infographics:"Dör klö'",library:"Sör dë'",present:"Tö' klë",collab:"Dör sör",translate:"I̠ẽ̤ tö'",export:"Klö' sör",ecosystem:"Tö' sör",settings:"Të' yök"},greeting:"I̠ẽ̤ tö' dör yök — Copiloto IA de Voltara en Bribri. ¿Tö' klë yök?"},
  // ... pega aquí cabecar, maleku, brunca, ngabe completos
};

export function getT(lang){
  if(lang==="es") return DICT.es;
  if(lang==="en") return DICT.en;
  const ind=INDIG;
  if(ind) return{...DICT.es, nav:ind.nav, settings:{...DICT.es.settings, greeting:ind.greeting}};
  return DICT.es;
}

export const THEMES=[
  {name:"Corporativo",bg:"#0a1628",accent:"#1a6cf0",text:"#fff"},
  {name:"Moderno",bg:"#0d0d0d",accent:"#0ea96b",text:"#fff"},
  {name:"Ejecutivo",bg:"#12120e",accent:"#e0aa1a",text:"#fff"},
  {name:"Académico",bg:"#1a1025",accent:"#9b1af0",text:"#fff"},
  {name:"Tropical",bg:"#0a2018",accent:"#1ae0d0",text:"#fff"},
  {name:"Minimal",bg:"#f8f8f8",accent:"#1a1a1a",text:"#1a1a1a"},
  {name:"Sunset",bg:"#1a0a1a",accent:"#f4511e",text:"#fff"},
  {name:"Ocean",bg:"#0a1a2e",accent:"#00bcd4",text:"#fff"},
];

export const SAMPLE=[
  {id:1,title:"Informe Financiero Q4",slides:18,date:"Hoy",color:"#1a6cf0"},
  {id:2,title:"Plan Estratégico 2025",slides:24,date:"Ayer",color:"#0ea96b"},
  {id:3,title:"Propuesta Comercial",slides:12,date:"Hace 3 días",color:"#e05a1a"},
  {id:4,title:"Capacitación RRHH",slides:32,date:"Hace 1 sem.",color:"#9b1af0"},
];