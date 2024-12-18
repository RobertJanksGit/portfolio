import Carousel from "./Carousel";

function Middle() {
  return (
    <div id="projects" className="pt-[80px] bg-gray-100">
      {/* Header Section */}
      <div className="flex text-center p-[40px] pb-[0px]">
        <div className="w-[50%]">
          <h1 className="text-[3.25rem] font-bold max-w-[6em] text-left">
            Explore My Portfolio
          </h1>
        </div>
        <div className="text-left pr-[30%]">
          <p className="text-lg font-bold text-gray-600 mt-4">
            Dive into a collection of my featured projects, each showcasing
            unique skills and creativity. Swipe through the slider below to see
            the work I’m most proud of.
          </p>
        </div>
      </div>
      <Carousel />
    </div>
  );
}

export default Middle;
