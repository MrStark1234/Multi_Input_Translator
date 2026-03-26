function LanguageSelector({ fromLang, toLang, setFromLang, setToLang }) {
  return (
    <div className="flex gap-4 justify-center mb-4">
      {/* FROM */}
      <select
        value={fromLang}
        onChange={(e) => setFromLang(e.target.value)}
        className="p-2 border rounded-lg"
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="mr">Marathi</option>
      </select>

      {/* TO */}
      <select
        value={toLang}
        onChange={(e) => setToLang(e.target.value)}
        className="p-2 border rounded-lg"
      >
        <option value="hi">Hindi</option>
        <option value="en">English</option>
        <option value="mr">Marathi</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
