import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Top from "./components/top-components/Top";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar className="fixed top-0 left-0 w-full z-50" />
      <main className="flex-1 pt-16">
        <Top />
      </main>
    </div>
  );
}

export default App;
