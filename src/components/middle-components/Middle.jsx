import Carousel from "./Carousel";

function Middle() {
  return (
    <div className="pt-[80px] pb-[80px] bg-gray-100">
      {/* Header Section */}
      <div className="flex text-center mb-12">
        <div className="pr-[25%]">
          <h1 className="text-4xl font-bold">Pick your starting point</h1>
        </div>
        <div className="text-left pr-[30%]">
          <p className="text-lg text-gray-600 mt-4">
            Simply add a portfolio page or section to the Squarespace template
            of your choice. Or, get inspired by browsing the most popular
            portfolio website templates.
          </p>
          <button className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
            Browse Templates
          </button>
        </div>
      </div>
      <Carousel />
    </div>
  );
}

export default Middle;
