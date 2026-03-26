import axios from "axios";

function SpeechInput({ setText, setTranslated, fromLang, toLang }) {
  const startSpeechRecognition = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = async (event) => {
      const speechText = event.results[0][0].transcript;
      setText(speechText);

      const res = await axios.post("http://localhost:5000/api/translate", {
        text: speechText,
        from: fromLang,
        to: toLang,
      });

      setTranslated(res.data.translated);
    };

    recognition.onerror = (event) => {
      console.error("Speech error:", event.error);
    };
  };

  return (
    <button
      onClick={startSpeechRecognition}
      className="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition shadow"
    >
      🎤 Speak
    </button>
  );
}

export default SpeechInput;
