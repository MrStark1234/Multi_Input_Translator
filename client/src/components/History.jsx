import { useEffect, useState } from "react";
import axios from "axios";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    const res = await axios.get("http://localhost:5000/api/history/history");
    setHistory(res.data);
  };

  return (
    <section id="history" className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        Translation History
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
        {history.map((item) => (
          <div
            key={item._id}
            className="group bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 overflow-hidden h-40 hover:h-auto hover:shadow-xl cursor-pointer"
          >
            {/* INPUT */}
            <p className="text-sm text-gray-800">Input</p>
            <p className="text-gray-700 line-clamp-2 group-hover:line-clamp-none">
              {item.inputText}
            </p>

            {/* OUTPUT */}
            <p className="text-sm text-orange-500 mt-3">Output</p>
            <p className="text-orange-600 font-medium line-clamp-2 group-hover:line-clamp-none">
              {item.translatedText}
            </p>

            {/* LANG INFO */}
            <p className="text-xs text-gray-800 mt-3">
              {item.sourceLang} → {item.targetLang}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default History;
