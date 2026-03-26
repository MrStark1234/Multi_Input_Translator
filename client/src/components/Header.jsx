function Header() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <header className="bg-white/5 fixed top-0 left-0 backdrop-blur-md w-full shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-orange-600">SmartTranslator</h1>

      <nav className="space-x-6 text-orange-500 flex flex-col md:flex-row">
        <span
          onClick={() => scrollToSection("home")}
          className="cursor-pointer hover:text-orange-600"
        >
          Home
        </span>
        <span
          onClick={() => scrollToSection("feature")}
          className="cursor-pointer hover:text-orange-600"
        >
          Features
        </span>
        <span
          onClick={() => scrollToSection("history")}
          className="cursor-pointer hover:text-orange-600"
        >
          History
        </span>
      </nav>
    </header>
  );
}

export default Header;
