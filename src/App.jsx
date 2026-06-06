import { useState, useEffect, useRef } from "react";
import Logo from "./components/Logo";
import { LANGS } from "./i18n/langs";
import { DICT } from "./i18n/dict";

function App() {
  const [lang, setLang] = useState("es");
  const t = DICT[lang];

  return (
    <div>
      <Logo size={48} />
      <h1>{t.appName}</h1>
      <p>{t.tagline}</p>
    </div>
  );
}

export default App;