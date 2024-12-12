import { useState } from "react";
import cardData from "./cardData";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.ceil(cardData.length / 3 - 1) : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === Math.ceil(cardData.length / 3 - 1) ? 0 : prev + 1
    );
  };

  return (
    <div className="relative pb-[2rem] px-8 bg-gray-100">
      {/* Cards Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {cardData.map((card) => (
            <a key={card.id} href={card.href}>
              <div
                className={`flex w-[600px] h-[400px] flex-shrink-0 p-8 shadow-lg ${card.style} m-[2rem]`}
              >
                {card.image && (
                  <img
                    src={card.image}
                    alt={card.title}
                    className=" w-[300px] mb-4"
                  />
                )}
                <div className="text-content">
                  <div
                    className={
                      card.style.includes("text-center") ? "text-center" : ""
                    }
                  >
                    <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
                    <p className="text-lg">{card.description}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={handlePrev}
          className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700"
        >
          &lt;
        </button>
        <p className="text-gray-500">
          {currentIndex + 1} / {Math.ceil(cardData.length / 3)}
        </p>
        <button
          onClick={handleNext}
          className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Carousel;
