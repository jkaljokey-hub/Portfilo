const Head = () => {
  return (
    <>
      {/* Header: Profile + Name + Social Icons */}
      <header className="p-4 flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 rounded-xl shadow-lg">
        
        {/* Profile Image */}
        <div className="flex-shrink-0 mb-4 md:mb-0">
          <img
            src="IMG-20251109-WA0020.jpg"
            alt="Profile of Abubakar Alnour"
            className="rounded-full h-20 w-20 md:h-32 md:w-32 object-cover border-2 border-sky-500"
          />
        </div>

        {/* Name */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl p-1 lg:text-4xl font-semibold">
            Abubakar Alnour
          </h1>
          <p className="text-gray-300 mt-1 text-sm sm:text-base">Hybrid Cloud Administrator</p>
        </div>

        {/* Social Icons */}
        <div className="grid grid-cols-4 gap-4">
          <a
            href="https://github.com/jkaljokey-hub"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src="git.png" alt="GitHub" className="h-8 w-8 md:h-12 md:w-12" />
          </a>
          <a
            href="https://www.linkedin.com/in/abubakar-alnour"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src="linkdn.png" alt="LinkedIn" className="h-8 w-8 md:h-12 md:w-12" />
          </a>
          <a
            href="mailto:abubakaralnour43@gmail.com"
            className="hover:scale-110 transition-transform"
          >
            <img src="gmail.png" alt="Email" className="h-8 w-8 md:h-12 md:w-12" />
          </a>
          <a
          href="https://wa.me/966502263231"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src="whats.png" alt="WhatsApp" className="h-8 w-8 md:h-12 md:w-12" />
          </a>
        </div>
      </header>

      {/* Greeting */}
      <div className="mt-6 text-center text-gray-300">
        <h2 className="text-lg sm:text-xl md:text-2xl animate-pulse">
          Hello, how it's going? 
        </h2>
      </div>

      {/* CV Download */}
      <div className="mt-6 flex justify-center">
        <a
          href="abubakarHybrid.pdf"
          download="abubakarHybrid.pdf"
          className="flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-lg shadow-md transition"
        >
          <img
            src="download (2).png"
            alt="Download CV"
            className="h-6 w-6 md:h-8 md:w-8"
          />
          Download CV
        </a>
      </div>
    </>
  );
};

export default Head;
