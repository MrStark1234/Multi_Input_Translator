import axios from "axios";

function PDFUploader({ setText, setTranslated, fromLang, toLang }) {
  const handlePDFUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:5000/api/pdf", formData);

      const extractedText = res.data.text;
      setText(extractedText);

      const translateRes = await axios.post(
        "http://localhost:5000/api/translate",
        {
          text: extractedText,
          from: fromLang,
          to: toLang,
        },
      );

      setTranslated(translateRes.data.translated);
    } catch (error) {
      console.error("PDF Upload Error:", error);
    }
  };

  return (
    <div className="mt-4">
      <label className="block text-sm font-medium text-white mb-2">
        Upload PDF
      </label>

      <input
        type="file"
        accept="application/pdf"
        onChange={handlePDFUpload}
        className="block w-full text-sm text-white 
        file:mr-4 file:py-2 file:px-4 
        file:rounded-lg file:border-0 
        file:text-sm file:font-semibold 
        file:bg-indigo-50 file:text-orange-600 
        hover:file:bg-indigo-100"
      />
    </div>
  );
}

export default PDFUploader;
