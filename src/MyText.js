// MyText.js
const MaintenanceWebsite = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 text-center px-4">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        🚧 Website Under Maintenance
      </h1>
      <p className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-6">
        Sorry for the inconvenience! <br />
        I am currently improving my website. <br />
        Meanwhile, you can check my profiles:
      </p>

      {/* Links */}
      <div className="flex gap-6 justify-center">
        <a
          href="https://github.com/jkaljokey-hub"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md transition transform hover:scale-105"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/abubakar-alnour"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition transform hover:scale-105"
        >
          LinkedIn
        </a>
      </div>

      <p className="text-gray-400 mt-8 text-sm sm:text-base">
        Thank you for your patience! 💡
      </p>
    </div>
  );
};

export default MaintenanceWebsite;
