import { useState } from "react";

const cardData = [
  {
    id: 1,
    title: "Riding the Space Coast",
    description:
      "Explore the Space Coast's history and enjoy some of the best fishing around Florida's incredible coast.",
    image: "https://via.placeholder.com/600x400",
    date: "07.22.2019",
    buttonText: "Read More",
    style: "bg-black text-white text-center",
  },
  {
    id: 2,
    title: "Nolan & Co",
    description:
      "A digital product agency that focuses on strategy and design.",
    image: "https://via.placeholder.com/600x400",
    date: "",
    buttonText: "Read More",
    style: "bg-black text-white text-center",
  },
  {
    id: 3,
    title: "Utica",
    description: "Utica is an architecture firm based in Copenhagen, Denmark.",
    image: "https://via.placeholder.com/600x400",
    date: "",
    buttonText: "Explore",
    style: "bg-black text-white text-center",
  },
  {
    id: 4,
    title: "Riding the Space Coast",
    description:
      "Explore the Space Coast's history and enjoy some of the best fishing around Florida's incredible coast.",
    image: "https://via.placeholder.com/600x400",
    date: "07.22.2019",
    buttonText: "Read More",
    style: "bg-black text-white text-center",
  },
  {
    id: 5,
    title: "Nolan & Co",
    description:
      "A digital product agency that focuses on strategy and design.",
    image: "https://via.placeholder.com/600x400",
    date: "",
    buttonText: "Read More",
    style: "bg-black text-white text-center",
  },
  {
    id: 6,
    title: "Utica",
    description: "Utica is an architecture firm based in Copenhagen, Denmark.",
    image: "https://via.placeholder.com/300x200",
    date: "",
    buttonText: "Explore",
    style: "bg-black text-white text-center",
  },
  {
    id: 7,
    title: "Utica",
    description: "Utica is an architecture firm based in Copenhagen, Denmark.",
    image: "https://via.placeholder.com/300x200",
    date: "",
    buttonText: "Explore",
    style: "bg-black text-white text-center",
  },
  {
    id: 8,
    title: "Utica",
    description: "Utica is an architecture firm based in Copenhagen, Denmark.",
    image: "https://via.placeholder.com/300x200",
    date: "",
    buttonText: "Explore",
    style: "bg-black text-white text-center",
  },
];

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
    <div className="relative py-16 px-8 bg-gray-100">
      {/* Cards Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {cardData.map((card) => (
            <div
              key={card.id}
              className={`w-[600px] flex-shrink-0 p-8 rounded-lg shadow-lg ${card.style}`}
            >
              {card.image && (
                <img
                  src={card.image}
                  alt={card.title}
                  className="rounded-t-lg w-[600px] mb-4"
                />
              )}
              <div
                className={
                  card.style.includes("text-center") ? "text-center" : ""
                }
              >
                {card.date && (
                  <p className="text-sm text-gray-500 mb-2">{card.date}</p>
                )}
                <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
                <p className="text-lg">{card.description}</p>
                {card.buttonText && (
                  <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
                    {card.buttonText}
                  </button>
                )}
              </div>
            </div>
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
