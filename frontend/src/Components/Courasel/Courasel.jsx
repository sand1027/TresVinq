import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import "./Coursael.css"; // Create a CSS file for styling

const CarouselWithButton = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <div className="slider">
            {" "}
            <div className="c-imgContainer">
              <img src="./homeimg.png" alt="Slide 1" />
            </div>
            <div className="c-contents">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                commodi veniam magni? Corporis pariatur voluptates, ad nihil
                repellendus voluptatibus, minus assumenda nulla in vel, unde
                obcaecati ullam saepe. Quam, quae.
              </p>
              <button className="slider-btn">Explore</button>
            </div>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="slider">
            {" "}
            <div className="c-imgContainer">
              <img src="./homeimg.png" alt="Slide 1" />
            </div>
            <div className="c-contents">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                commodi veniam magni? Corporis pariatur voluptates, ad nihil
                repellendus voluptatibus, minus assumenda nulla in vel, unde
                obcaecati ullam saepe. Quam, quae.
              </p>
              <button className="slider-btn">Explore</button>
            </div>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="slider">
            {" "}
            <div className="c-imgContainer">
              <img src="./homeimg.png" alt="Slide 1" />
            </div>
            <div className="c-contents">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                commodi veniam magni? Corporis pariatur voluptates, ad nihil
                repellendus voluptatibus, minus assumenda nulla in vel, unde
                obcaecati ullam saepe. Quam, quae.
              </p>
              <button className="slider-btn">Explore</button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselWithButton;
