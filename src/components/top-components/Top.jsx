import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Top() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 pr-[20%]">
        <h1 className="text-[72px] font-bold">Some Fancy Headline here</h1>
        <p className="text-[22px]">
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est.'
        </p>
      </div>
      <div className="w-1/2">
        <Slider {...sliderSettings}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/59/Epson_logo.svg"
            alt="Slide 1"
            className="w-4"
          />
        </Slider>
      </div>
    </div>
  );
}

export default Top;
