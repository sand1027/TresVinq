import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../ModularCleanRoom/ModularCleanRoom";

const CleanRoomFurnitures = () => {
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
      image: "/crossa1.webp",
      label: "Crossover Bench",
      description:
        "Our crossover benches are designed to provide a safe and efficient workspace for personnel transitioning between different cleanroom zones. These benches are built with stainless steel frames, smooth surfaces for easy cleaning, and integrated shelving for storage. The ergonomic design ensures comfort and accessibility, making them ideal for various cleanroom applications.",
      link: "/crf/cross-bench", // Add the link for the button
    },
    {
      image: "/lshap1.jpeg",
      label: "L-shaped Bench",
      description:
        "The L-shaped bench is a versatile and space-efficient solution for cleanroom environments. Designed to maximize workspace while maintaining cleanliness, it features a smooth, durable surface that is easy to sanitize. The integrated storage options and ergonomic design make it an ideal choice for labs, assembly areas, and testing stations within controlled environments.",
      link: "/crf/l-shaped", // Add the link for the button
    },
    {
      image: "./trolley1.webp",
      label: "Trolleys",
      description:
        "Our modular cleanroom trolleys are designed for easy mobility while maintaining a contamination-free environment. Made from high-quality, corrosion-resistant materials, these trolleys offer ample storage for tools, equipment, and supplies. They are equipped with smooth, easy-to-clean surfaces and silent rolling casters to ensure noise-free transportation throughout the cleanroom.",
      link: "/crf/trolleys", // Add the link for the button
    },
    {
      image: "./store1.webp",
      label: "Storage Units",
      description:
        "Our storage units are tailored for cleanroom environments, providing secure, easy-to-access storage for various materials and tools. Available in different sizes and configurations, these units are designed to keep cleanroom spaces organized and clutter-free. They are made with non-porous materials that can be easily sanitized to maintain a contamination-free environment.",
      link: "/crf/storage", // Add the link for the button
    },
    {
      image: "caba2.webp",
      label: "Cabinets",
      description:
        "Our cleanroom cabinets are designed to meet the highest standards of hygiene and functionality. Made from stainless steel or other non-porous materials, these cabinets provide secure storage while preventing contamination. The smooth, easy-to-clean surfaces and customizable shelving options allow for optimal organization in cleanroom settings.",
      link: "/crf/cabinets", // Add the link for the button
    },
    {
      image: "./tab3.webp",
      label: "Work Tables",
      description:
        "Our work tables are designed to provide a stable, clean workspace for personnel in controlled environments. Featuring durable, easy-to-clean surfaces, these tables are ideal for assembly, testing, and inspection tasks. With adjustable heights and integrated storage options, our work tables are both functional and adaptable to various cleanroom requirements.",
      link: "/crf/tables", // Add the link for the button
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
          <span>Clean Room Panel</span>
        </div>
      </div>
      <div className="mcl-heading-container">
        <h1>Clean Room Furniture</h1>
      </div>
      <div className="mcl-content-holder">
        <div className="content">
          <h2>About Tresving Clean Room Furniture</h2>
          <p>
            At <b>Tresving</b>, we offer a range of high-quality, modular
            furniture solutions for cleanroom environments. Our products are
            engineered to meet the stringent requirements of industries like
            pharmaceuticals, biotechnology, and electronics. With a focus on
            durability, hygiene, and functionality, our furniture ensures that
            your cleanroom operates at peak performance while maintaining
            optimal cleanliness and safety standards. Each piece is designed
            with precision to ensure that the cleanroom environment is optimized
            for efficiency, safety, and ease of maintenance.
          </p>
          <h3>Key Features of Tresving Cleanroom Furniture</h3>
          <ul>
            <li>
              <b>Crossover Benches:</b> Ergonomically designed to provide a safe
              transition between cleanroom zones. Ideal for preventing
              cross-contamination.
            </li>
            <li>
              <b>L-shaped Benches:</b> Space-efficient and versatile with
              integrated storage options, maximizing workspace without
              compromising cleanliness.
            </li>
            <li>
              <b>Trolleys:</b> Mobile and easy-to-clean with corrosion-resistant
              materials, offering convenient transportation of materials and
              tools.
            </li>
            <li>
              <b>Storage Units:</b> Non-porous, customizable storage options for
              a clutter-free cleanroom, reducing contamination risks and
              improving organization.
            </li>
            <li>
              <b>Cabinets:</b> Stainless steel cabinets for secure, hygienic
              storage of equipment, tools, and materials. Customizable shelving
              ensures flexible organization.
            </li>
            <li>
              <b>Work Tables:</b> Durable, adjustable work surfaces with
              easy-to-clean surfaces, providing ergonomic solutions for various
              cleanroom tasks.
            </li>
          </ul>
          <h3>Why Choose Tresving Furniture?</h3>
          <p>
            Our cleanroom furniture is built to stand the test of time. With an
            emphasis on functionality and hygiene, Tresving’s modular solutions
            ensure that your cleanroom environment remains organized, efficient,
            and compliant with the highest cleanliness standards. Every product
            is engineered to seamlessly integrate into your cleanroom layout
            while ensuring ease of use and cleaning.
          </p>
        </div>
        <div className="custom-courasel">
          <Slider {...sliderSettings}>
            {slides.map((slide, index) => (
              <div key={index} className="custom-slide">
                <div className="custom-slide-content">
                  <img
                    src={slide.image}
                    alt={slide.label}
                    className="custom-slide-image"
                  />
                  <div className="custom-slide-info">
                    <h3>{slide.label}</h3>
                    <p>{slide.description}</p>
                    {/* Use Link to route to the product page */}
                    <Link to={slide.link}>
                      <button className="custom-slide-button">
                        Learn More
                      </button>
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

export default CleanRoomFurnitures;
