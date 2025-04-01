import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom"; // Import Link for routing
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ModularCleanRoom.css";

const ModularCleanRoom = () => {
  const [breadcrumbClass, setBreadcrumbClass] = useState("");

  const handleBreadcrumbClick = () => {
    setBreadcrumbClass("animate-breadcrumb");
  };

  useEffect(() => {
    setBreadcrumbClass("animate-breadcrumb");
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      image: "/img3.webp",
      label: "Panels",
      description:
        "Our high-quality modular panels are engineered with precision to provide superior insulation, strength, and durability. They are specifically designed to meet the strict standards of cleanroom environments, ensuring a contamination-free space for your critical processes. Our panels are customizable to suit various requirements, offering both insulated and non-insulated options to optimize your cleanroom's performance.",
      link: "/mcl/pannel", // Add link for navigation
    },
    {
      image: "/cel1.jpg",
      label: "Ceilings",
      description:
        "Our ceiling systems are designed for easy installation, maintenance, and consistent airflow. Made from lightweight yet durable materials, they help maintain optimal air quality and pressure conditions. Our cleanroom ceilings are compatible with HEPA and ULPA filters, ensuring the highest levels of cleanliness. They also come with a range of integration options, including lighting and air distribution systems, to meet your cleanroom's specific needs.",
      link: "/mcl/ceiling", // Add link for navigation
    },
    {
      image: "./door1.jpeg",
      label: "Doors",
      description:
        "Airtight sealing is crucial in maintaining a contamination-free environment. Our doors are engineered to provide secure, airtight access to cleanrooms, preventing any particles from entering or exiting. Featuring easy-to-use, high-quality mechanisms, our doors ensure smooth operation while maintaining strict environmental control. They are available in various configurations, including manual, automatic, and sliding options, to suit your cleanroom's design.",
      link: "/mcl/door", // Add link for navigation
    },
    {
      image: "/b1.jpg",
      label: "Wall Guards",
      description:
        "Protect your cleanroom walls from impact and contamination with our durable wall guards. These wall guards are designed to withstand the rigors of high-traffic environments while maintaining hygienic conditions. They are easy to install and replace, offering excellent protection against physical damage and ensuring the cleanliness of your space. Available in various materials and finishes, our wall guards can be customized to match your cleanroom’s design and functionality.",
      link: "/mcl/wallgaurd", // Add link for navigation
    },
    {
      image: "/wind1.avif",
      label: "Windows",
      description:
        "Our modular cleanroom windows are designed for both functionality and aesthetics. With double-glazed glass, they provide superior insulation to maintain temperature and pressure control. The windows are treated to be easy to clean and maintain, ensuring they do not compromise the sterile environment of the cleanroom. Available in various sizes and configurations, they allow for optimal visibility while maintaining strict environmental controls.",
      link: "/mcl/window", // Add link for navigation
    },
  ];

  return (
    <div className="modular-clean-room">
      <div className="products-top-container">
        <div
          className={`breadcrumb ${breadcrumbClass}`}
          onClick={handleBreadcrumbClick}
        >
          <span>Our Products</span>
          <span className="breadcrumb-arrow"> &gt;&gt; </span>
          <span>Modular Clean Room</span>
        </div>
      </div>
      <div className="mcl-heading-container">
        <h1>Modular Clean Room</h1>
      </div>
      <div className="mcl-content-holder">
        <div className="content">
          <h2>About Tresving Modular Clean Rooms</h2>
          <p>
            At <b>Tresving</b>, we specialize in designing and delivering
            high-quality modular clean rooms for industries requiring controlled
            environments. Our cleanrooms are crafted with precision to meet the
            rigorous standards of the pharmaceutical, biotechnology, and
            electronics industries. Whether you need a fully customized solution
            or standard modular options, our products provide the flexibility,
            efficiency, and cleanliness required for optimal performance.
          </p>
          <h3>Key Features</h3>
          <ul>
            <li>
              <b>Panels:</b> Insulated, durable, and efficient for maintaining
              controlled conditions. Designed for easy integration and
              modification, they ensure a high level of hygiene and temperature
              stability.
            </li>
            <li>
              <b>Ceilings:</b> Airflow consistency and easy maintenance. Our
              ceiling systems feature integrated filtration options that ensure
              optimal air quality and cleanliness.
            </li>
            <li>
              <b>Doors:</b> Airtight sealing to ensure contamination-free
              environments. Our doors are equipped with advanced sealing
              technology to maintain the integrity of the cleanroom.
            </li>
            <li>
              <b>Wall Guards:</b> Hygiene-focused and highly durable protection
              to safeguard walls from accidental impacts and contamination.
            </li>
            <li>
              <b>Windows:</b> Double-glazed for temperature and pressure
              control, designed for easy maintenance without compromising the
              cleanroom’s integrity.
            </li>
          </ul>
        </div>
        <div className="custom-courasel">
          <Slider {...sliderSettings}>
            {slides.map((slide, index) => (
              <div key={index} className="custom-slide">
                <div className="custom-slide-content sticky-courasel">
                  <img
                    src={slide.image}
                    alt={slide.label}
                    className="custom-slide-image"
                  />
                  <div className="custom-slide-info">
                    <h3>{slide.label}</h3>
                    <p>{slide.description}</p>
                    <Link to={slide.link} className="custom-slide-button">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ModularCleanRoom;
