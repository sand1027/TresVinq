import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import "./Coursael.css"; // Create a CSS file for styling

const CarouselWithButton = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
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
                At <strong>Tresving</strong>, we specialize in designing and
                delivering high-quality modular clean rooms for industries
                requiring controlled environments. Our cleanrooms are crafted
                with precision to meet the rigorous standards of the
                pharmaceutical, biotechnology, and electronics industries.
                Whether you need a fully customized solution or standard modular
                options, our products provide the flexibility, efficiency, and
                cleanliness required for optimal performance.
              </p>
              <button className="slider-btn">Explore</button>
            </div>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="slider">
            {" "}
            <div className="c-imgContainer">
              <img src="./hvac.png" alt="Slide 1" />
            </div>
            <div className="c-contents">
              <p>
                <p>
                  {" "}
                  At <strong>Tresving</strong>, we provide high-performance HVAC
                  ducting solutions designed for efficient airflow and climate
                  control. Our ducts are engineered to meet the highest industry
                  standards, ensuring optimal ventilation, temperature
                  regulation, and air quality. Whether for commercial,
                  industrial, or cleanroom applications, our ducting systems
                  offer superior efficiency, durability, and leak-proof
                  performance.{" "}
                </p>
              </p>
              <button className="slider-btn">Explore</button>
            </div>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="slider">
            {" "}
            <div className="c-imgContainer">
              <img src="./cleanroom.webp" alt="Slide 1" />
            </div>
            <div className="c-contents">
              <p>
                <p>
                  {" "}
                  At <strong>Tresving</strong>, we manufacture ergonomic and
                  contamination-free cleanroom furniture tailored for industries
                  requiring precision and hygiene. Our furniture is crafted from
                  high-quality stainless steel and antimicrobial materials,
                  ensuring durability, easy maintenance, and compliance with
                  strict cleanliness standards. From workstations and storage
                  cabinets to gowning benches and shelving units, our solutions
                  are designed to enhance efficiency and organization in
                  cleanroom environments.{" "}
                </p>
              </p>
              <button className="slider-btn">Explore</button>
            </div>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="slider">
            {" "}
            <div className="c-imgContainer">
              <img src="./cable.png" alt="Slide 1" />
            </div>
            <div className="c-contents">
              <p>
                <p>
                  {" "}
                  At <strong>Tresving</strong>, we design and manufacture robust
                  and corrosion-resistant cable trays to support efficient cable
                  management across industries. Our trays provide structured
                  routing, protection, and scalability for power and data
                  cabling in industrial, commercial, and cleanroom facilities.
                  Available in various configurations including ladder,
                  perforated, and solid-bottom trays, our solutions ensure
                  safety, easy installation, and long-term reliability.{" "}
                </p>
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
