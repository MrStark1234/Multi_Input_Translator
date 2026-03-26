import HeroSVG from "../assets/Home2.svg";

function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-10 pt-28 pb-16 bg-black min-h-screen"
    >
      {/* LEFT SIDE */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold text-white leading-tight">
          Translate Anything
          <span className="text-orange-600"> Instantly</span>
        </h1>

        <p className="text-white ">
          Convert text, voice, and documents into multiple languages with
          powerful AI-driven translation. Whether you're communicating globally,
          understanding foreign content, or working with multilingual documents,
          our platform ensures fast, accurate, and seamless translation across
          different formats, all in one place.
        </p>

        <button
          onClick={() =>
            document.getElementById("translatesection").scrollIntoView({
              behavior: "smooth",
            })
          }
          className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-700 transition"
        >
          Get Started
        </button>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="md:w-1/2 mt-10 md:mt-0">
        <img
          src={HeroSVG}
          alt="translation"
          className="rounded-3xl shadow-2xl "
        />
      </div>
    </section>
  );
}

export default Hero;
