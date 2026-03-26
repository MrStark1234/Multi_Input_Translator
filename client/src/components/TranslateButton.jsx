import axios from "axios";

function TranslateButton({ text, setTranslated, fromLang, toLang }) {
  const handleTranslate = async () => {
    const res = await axios.post("http://localhost:5000/api/translate", {
      text,
      from: fromLang,
      to: toLang,
    });

    const translatedText = res.data.translated;

    setTranslated(translatedText);

    // 👇 SAVE TO DB
    await axios.post("http://localhost:5000/api/history/save", {
      inputText: text,
      translatedText,
      sourceLang: fromLang,
      targetLang: toLang,
    });
  };

  return (
    <button
      onClick={handleTranslate}
      className="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition shadow"
    >
      Translate
    </button>
  );
}

export default TranslateButton;
