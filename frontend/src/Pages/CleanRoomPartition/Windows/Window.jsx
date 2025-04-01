import { useState } from "react";
import Slider from "react-slick"; // Assuming you're using react-slick for the carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Window.css";

const Windows = () => {
  const [selectedWindow, setSelectedWindow] = useState("doubleGlazed");

  const handleWindowSelect = (type) => {
    setSelectedWindow(type);
  };
  const [breadcrumbClass, setBreadcrumbClass] = useState("");

  const handleBreadcrumbClick = () => {
    setBreadcrumbClass("animate-breadcrumb");
  };
  const sliderSettings = {
    infinite: true, // Enables looping of the images
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Remove the next and previous arrows
    dots: false, // Remove the dots
    autoplay: true, // Automatically slide images
    autoplaySpeed: 1000, // Speed of auto sliding (in milliseconds)
  };
  const images = ["/wind1.avif", "/wind2.webp"];
  const images1 = ["/wind3.jpeg", "/wind3.webp"];
  const images2 = ["/wind4.jpg", "/wind5.webp"];
  const windowInfo = {
    windows: (
      <div className="panel-details">
        {/* Header */}
        <div className="pannel-details-header-container">
          <h2>Windows</h2>
        </div>

        {/* Content */}
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              {/* Size */}
              <li>
                <strong>Size:</strong> Fully customizable to meet specific
                project dimensions.
              </li>

              {/* Glass Thickness */}
              <li>
                <strong>Glass Thickness:</strong> 6 mm + 6 mm, ensuring improved
                thermal insulation and soundproofing.
              </li>

              {/* Glass Options */}
              <li>
                <strong>Selection of Glass Options:</strong>
                <ul>
                  <li>Glass Shapes: Square or Tapered corners.</li>
                  <li>
                    Types: Standard Toughened Glass or Fire Rated Glass for
                    critical areas.
                  </li>
                </ul>
              </li>

              {/* Locking Mechanism */}
              <li>
                <strong>Locking Mechanism:</strong> Integrated with an H
                connector for a secure and flush fit.
              </li>
            </ul>

            {/* Features and Benefits Section */}
            <h3>Features and Benefits</h3>
            <ul>
              <li>
                <strong>Flushed with Wall Panels:</strong> The windows are
                designed to sit flush with wall panels, ensuring a sleek, clean
                appearance and minimizing dust accumulation.
              </li>
              <li>
                <strong>Thickness:</strong> Standard frame thickness of 45 mm,
                offering robust support and stability.
              </li>
              <li>
                <strong>Glass Specifications:</strong>
                <ul>
                  <li>
                    Constructed with 6 mm + 6 mm toughened glass, providing
                    enhanced strength and impact resistance.
                  </li>
                  <li>
                    Glass type: Toughened Glass for durability and safety in
                    demanding cleanroom settings.
                  </li>
                  <li>
                    Designed to withstand pressure variations from -70 Pa to +70
                    Pa, ensuring reliable performance in high-pressure
                    environments.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Selection of Glass Options:</strong>
                <ul>
                  <li>
                    Glass Shapes: Available in Square and Tapered corners,
                    providing design flexibility to match aesthetic and
                    functional needs.
                  </li>
                  <li>
                    Types: Choose between Standard Toughened Glass for general
                    use or Fire Rated Glass for added fire resistance in
                    critical areas.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Custom Sizes:</strong> Windows can be customized to meet
                specific size requirements. For Fire Rated Glass, a minimum size
                of 600 mm x 600 mm is required.
              </li>
              <li>
                <strong>Locking Mechanism:</strong> Integrated with an H
                connector, ensuring a secure and flush fit with adjoining
                panels.
              </li>
            </ul>
          </div>
          <div className="pannel-details-slider-contaainer pannel-details-slider-contaainer1">
            {" "}
            <Slider {...sliderSettings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="pannel-carousel-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    ),
    doubleGlazed: (
      <div className="panel-details">
        <div className="pannel-details-header-container">
          <h2>Double Glazed Windows</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Size:</strong> Fully customizable to meet specific
                project dimensions.
              </li>
              <li>
                <strong>Glass Thickness:</strong> 6 mm + 6 mm, ensuring improved
                thermal insulation and soundproofing.
              </li>
              <li>
                <strong>Selection of Glass Options:</strong>
                <ul>
                  <li>Glass Shapes: Square or Tapered corners.</li>
                  <li>
                    Types: Standard Toughened Glass or Fire Rated Glass for
                    critical areas.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Locking Mechanism:</strong> Integrated with an H
                connector for a secure and flush fit.
              </li>
            </ul>
          </div>
          <div className="pannel-details-slider-contaainer pannel-details-slider-contaainer1">
            {" "}
            <Slider {...sliderSettings}>
              {images1.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="pannel-carousel-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    ),
    singleGlazed: (
      <div className="panel-details">
        <div className="pannel-details-header-container">
          <h2>Single Glazed Windows</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Size:</strong> Customizable to any desired dimensions.
              </li>
              <li>
                <strong>Glass Thickness:</strong> 6 mm, suitable for
                environments where single-layer glass suffices.
              </li>
              <li>
                <strong>Selection of Glass Options:</strong>
                <ul>
                  <li>Glass Shapes: Square or Tapered corners.</li>
                  <li>Types: Standard Toughened Glass or Fire Rated Glass.</li>
                </ul>
              </li>
              <li>
                <strong>Locking Mechanism:</strong> Integrated with an H
                connector for secure installation.
              </li>
            </ul>
          </div>
          <div className="pannel-details-slider-contaainer pannel-details-slider-contaainer1">
            {" "}
            <Slider {...sliderSettings}>
              {images2.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="pannel-carousel-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <>
      <div className="pannel-head-container">
        {/* Breadcrumb Navigation */}
        <div className="products-top-container">
          <div
            className={`breadcrumb ${breadcrumbClass}`}
            onClick={handleBreadcrumbClick}
          >
            <span>Our Products</span>
            <span className="breadcrumb-arrow"> &gt;&gt; </span>
            <span>Clean Room Windows</span>
          </div>
        </div>
      </div>
      <div className="pannel-heading-container">
        <h1>Clean Room Windows</h1>
      </div>
      <div className="pannel-main-content-container">
        <div className="trresvinq-overview">
          <h2>Clean Room Windows</h2>
          <p>
            Our Clean Room Windows are meticulously designed to ensure seamless
            integration with wall panels, offering superior durability, clarity,
            and functionality. These windows are ideal for controlled
            environments where cleanliness, safety, and performance are
            paramount.
          </p>
        </div>
      </div>
      <div className="pannel-content-container">
        <div className="panel-container">
          {/* Sidebar */}
          <div className="sidebar pannel-details-slider-contaainer1">
            <button
              onClick={() => handleWindowSelect("windows")}
              className={`pannel-btns ${
                selectedWindow === "windows" ? "active" : ""
              }`}
            >
              Windows
            </button>
            <button
              onClick={() => handleWindowSelect("doubleGlazed")}
              className={`pannel-btns ${
                selectedWindow === "doubleGlazed" ? "active" : ""
              }`}
            >
              Double Glazed Windows
            </button>
            <button
              onClick={() => handleWindowSelect("singleGlazed")}
              className={`pannel-btns ${
                selectedWindow === "singleGlazed" ? "active" : ""
              }`}
            >
              Single Glazed Windows
            </button>
          </div>

          {/* Panel Info and Carousel in Same Row */}
          <div className="panel-info-carousel-container">
            <div className="panel-info">{windowInfo[selectedWindow]}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Windows;
