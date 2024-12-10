import { useState } from "react";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 w-full">
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
