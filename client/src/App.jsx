import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import TranslatorSection from "./components/TranslatorSection";
import Footer from "./components/Footer";
import History from "./components/History";

function App() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [fromLang, setFromLang] = useState("en");
  const [toLang, setToLang] = useState("hi");

  return (
    <>
      <Header />
      <Hero />
      <Features />

      <TranslatorSection
        text={text}
        setText={setText}
        translated={translated}
        setTranslated={setTranslated}
        fromLang={fromLang}
        toLang={toLang}
        setFromLang={setFromLang}
        setToLang={setToLang}
      />
      <History />

      <Footer />
    </>
  );
}

export default App;
