import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Top from "./components/top-components/Top";
import Middle from "./components/middle-components/Middle";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="about" className="w-full h-screen flex flex-col">
      <Navbar
        isScrolled={isScrolled}
        className="fixed top-0 left-0 w-full z-50"
      />
      <main className="flex-1 pt-16">
        <Top className="snap-start" />
        <Middle className="snap-start" />
      </main>
    </div>
  );
}

export default App;
