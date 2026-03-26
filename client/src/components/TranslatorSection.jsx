import TextInput from "./TextInput";
import SpeechInput from "./SpeechInput";
import TranslateButton from "./TranslateButton";
import PDFUploader from "./PDFUploader";
import LanguageSelector from "./LanguageSelector";

function TranslatorSection({
  text,
  setText,
  translated,
  setTranslated,
  fromLang,
  toLang,
  setFromLang,
  setToLang,
}) {
  return (
    <section
      id="translatesection"
      className="py-16 bg-gray-100 flex justify-center"
    >
      <div className="bg-black p-8 rounded-xl shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-orange-600">
          Try Translator
        </h2>
        <LanguageSelector
          fromLang={fromLang}
          toLang={toLang}
          setFromLang={setFromLang}
          setToLang={setToLang}
        />

        <TextInput text={text} setText={setText} />

        <div className="flex gap-4 mt-4 justify-center text-white">
          <SpeechInput
            setText={setText}
            setTranslated={setTranslated}
            fromLang={fromLang}
            toLang={toLang}
          />

          <TranslateButton
            text={text}
            setTranslated={setTranslated}
            fromLang={fromLang}
            toLang={toLang}
          />
        </div>

        <div className="mt-4">
          <PDFUploader
            setText={setText}
            setTranslated={setTranslated}
            fromLang={fromLang}
            toLang={toLang}
          />
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-indigo-100">Input:</h3>
          <p className="text-orange-600">{text || "No input yet..."}</p>

          <h3 className="font-semibold mt-4 text-indigo-100">Output:</h3>
          <p className="text-orange-600 font-medium">
            {translated || "Translation will appear here..."}
          </p>
        </div>
      </div>
    </section>
  );
}

export default TranslatorSection;
