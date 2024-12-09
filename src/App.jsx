import { useState } from "react";
import "./App.css";
import Top from "./components/top-components/Top";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      <Top />
    </div>
  );
}

export default App;
