import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import HomeView from "./views/HomeView";
import AIView from "./views/AIView";
import FlipbookView from "./views/FlipbookView";

export default function Voltara() {
  const [tab, setTab] = useState("home");
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState("es");

  const renderView = () => {
    switch(tab) {
      case "home": return <HomeView />;
      case "ai": return <AIView />;
      case "flipbook": return <FlipbookView />;
      // ...el resto
      default: return <HomeView />;
    }
  };

  return (
    <div>
      <Header dark={dark} setDark={setDark} lang={lang} setLang={setLang} />
      <Sidebar tab={tab} setTab={setTab} />
      {renderView()}
    </div>
  );
}