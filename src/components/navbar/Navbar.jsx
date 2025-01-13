import { useState } from "react";
import Login from "../login/Login";
import SignUp from "../login/SignUp";
import { logout, login } from "../../firebase/handleAauth";
import { useAuth } from "../../firebase/authContext";

function Navbar({ isScrolled }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const { currentUser } = useAuth();

  const toggleLogin = () => setShowLogin(!showLogin);
  const toggleSignUp = () => setShowSignUp(!showSignUp);

  const handleClick = (e) => {
    e.preventDefault();
    const { name } = e.target;
    if (name === "logout") {
      logout();
    }
    if (name === "login") {
      setShowLogin(!showLogin);
    }
  };

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
      <div className="space-x-4">
        {currentUser ? (
          <button
            name="logout"
            onClick={handleClick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Log Out
          </button>
        ) : (
          <button
            name="login"
            onClick={handleClick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Sign In
          </button>
        )}
      </div>
      {showLogin && <Login onClose={toggleLogin} onSwitch={toggleSignUp} />}
      {showSignUp && <SignUp onClose={toggleSignUp} onSwitch={toggleLogin} />}
    </div>
  );
}

export default Navbar;
