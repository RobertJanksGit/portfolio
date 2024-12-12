import { useState } from "react";

function Navbar({ isScrolled }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center transition-all duration-300 ${
        isScrolled ? "bg-black text-white shadow-md" : "bg-transparent"
      }`}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/59/Epson_logo.svg"
        alt="Epson Logo"
        className="w-32"
      />
      <nav className="space-x-4">
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#about" className="hover:underline">
          About Me
        </a>
        <a href="#chatbot" className="hover:underline">
          ChatBot
        </a>
      </nav>
      <div>
        <a
          href="#login"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn ? "LOG OUT" : "LOG IN"}
        </a>
      </div>
    </div>
  );
}

export default Navbar;
