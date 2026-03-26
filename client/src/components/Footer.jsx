function Footer() {
  return (
    <footer id="contact" className="bg-black text-white text-center py-6">
      <p>© 2026 Smart Translator</p>
      <p className="text-sm text-gray-400 mt-1">Built with MERN 🚀</p>

      <div className="flex md:justify-end justify-center items-center px-10">
        <p>Contact us on: </p>
        <a
          href="mailto:emailid@gmail.com"
          className="text-sm text-indigo-400 hover:underline"
        >
          emailid@gmail.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
