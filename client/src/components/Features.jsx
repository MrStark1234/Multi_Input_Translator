function Features() {
  return (
    <section id="feature" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-900">Powerful Features</h2>

      <div className="grid md:grid-cols-3 gap-8 mt-10 px-10">
        <div className="p-6 bg-black rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-orange-600">
            🎤 Voice Input
          </h3>
          <p className="text-white mt-2">Speak and translate instantly</p>
        </div>

        <div className="p-6 bg-black rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-orange-600">
            📄 PDF Upload
          </h3>
          <p className="text-white mt-2">Extract and translate documents</p>
        </div>

        <div className="p-6 bg-black rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-orange-600">⚡ Fast AI</h3>
          <p className="text-white mt-2">Powered by smart APIs</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
