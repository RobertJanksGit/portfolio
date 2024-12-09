import { useState } from "react";
import Navbar from "./navbar/Navbar";
import TopMain from "./main/TopMain";
("./navbar/Navbar");

function Top() {
  return (
    <div className="w-full">
      <Navbar />
      <TopMain />
    </div>
  );
}

export default Top;
