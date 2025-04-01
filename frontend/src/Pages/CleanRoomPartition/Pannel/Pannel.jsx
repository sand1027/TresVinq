import { useState, useRef } from "react"; // Import useRef to reference the panel info
// Import Link for routing
import Slider from "react-slick"; // Importing react-slick for the carousel
import "./Pannel.css"; // Import the external CSS file

const Pannel = () => {
  // Set initial selected panel to "metalSheetRockwool"
  const [selectedPanel, setSelectedPanel] = useState("metalSheetRockwool");

  // Create refs for each panel info
  const rockwoolRef = useRef(null);
  const pufRef = useRef(null);
  const espRef = useRef(null);
  const [breadcrumbClass, setBreadcrumbClass] = useState("");

  const handleBreadcrumbClick = () => {
    setBreadcrumbClass("animate-breadcrumb");
  };
  // Scroll to the selected panel info when the button is clicked
  const handlePanelSelect = (panel) => {
    setSelectedPanel(panel);
    // Scroll to the panel info using refs
    if (panel === "metalSheetRockwool" && rockwoolRef.current) {
      rockwoolRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (panel === "metalSheetPUF" && pufRef.current) {
      pufRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (panel === "metalSheetESP" && espRef.current) {
      espRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Settings for the Slick Slider (Removed dots, arrows, and enabled infinite loop)
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
  const images = ["/img1.jpg", "/img2.avif", "/img3.webp"];
  const images1 = ["/img4.jpeg", "/img5.jpeg", "/img6.jpeg"];
  const images2 = ["/img7.jpeg", "/img8.jpeg", "/img9.jpeg"];

  const panelInfo = {
    metalSheetRockwool: (
      <div className="panel-details">
        <div className="pannel-details-header-container">
          {" "}
          <h2>Aluminium Re-framed Rockwool Core</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Thickness Options:</strong> Available in 50 mm, 80 mm,
                and 100 mm, ensuring flexibility for varied requirements.
              </li>
              <li>
                <strong>Dimensions:</strong> Standard panel size of 1200 x 3000
                mm, with customization available on request. Sound Insulation:
                Exceptional acoustic performance with an insulation rating of
                29(-5;-7) dB, ensuring a quieter environment.
              </li>
              <li>
                <strong>Maximum Load Capacity:</strong> Robust enough to
                withstand a load of up to 250 Kg/m² without gaps (for 60 mm
                thickness).
              </li>
              <li>
                <strong>Applications:</strong>Ideal for settings requiring high
                fire resistance and soundproofing.
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
    metalSheetPUF: (
      <div className="panel-details">
        <div className="pannel-details-header-container">
          {" "}
          <h2>Aluminium Re-framed PUF Core</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Thickness Options:</strong> Available in 50 mm, 80 mm,
                and 100 mm, ensuring flexibility for varied requirements.
              </li>
              <li>
                <strong>Dimensions:</strong> Standard panel size of 1200 x 3000
                mm, with customization available on request. Sound Insulation:
                Exceptional acoustic performance with an insulation rating of
                29(-5;-7) dB, ensuring a quieter environment.
              </li>
              <li>
                <strong>Maximum Load Capacity:</strong> Robust enough to
                withstand a load of up to 250 Kg/m² without gaps (for 60 mm
                thickness).
              </li>
              <li>
                <strong>Applications:</strong>Ideal for settings requiring high
                fire resistance and soundproofing.
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
    metalSheetESP: (
      <div className="panel-details">
        <div className="pannel-details-header-container">
          {" "}
          <h2>Aluminium Re-framed Core</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Thickness Options:</strong> Choose from 50 mm, 80 mm,
                and 100 mm thickness, offering a range of solutions for
                different applications
              </li>
              <li>
                <strong>Dimensions:</strong> Panels come in a standard size of
                1200 x 3000 mm, ensuring ease of installation.
              </li>
              <li>
                <strong>Maximum Load Capacity:</strong> Supports up to 250 Kg/m²
                without gaps for 60 mm thickness, making it reliable for
                structural purposes.
              </li>
              <li>
                <strong>Applications:</strong>Ideal for areas requiring
                lightweight, durable partitions, such as residential,
                commercial, and light industrial spaces.
              </li>
            </ul>
          </div>
          <div className="pannel-details-slider-contaainer">
            {" "}
            <Slider {...sliderSettings}>
              {images2.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="pannel-carousel-image pannel-details-slider-contaainer1"
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
    <div className="whole-product-container">
      <>
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
        <div className="pannel-heading-container">
          <h1>Pannel</h1>
        </div>
        <div className="pannel-main-content-container">
          <div className="trresvinq-overview">
            <h2>Tresvinq Panels</h2>
            <p>
              Tresvinq Panels are engineered to deliver unmatched strength and
              exceptional design. They are crafted with precision to ensure
              long-lasting performance in every project. Combining cutting-edge
              technology with a sleek finish, they redefine panel quality.
              Tresvinq Panels elevate both functionality and aesthetics, setting
              a new standard in innovation.
            </p>
          </div>
        </div>
        <div className="pannel-content-container">
          <div className="panel-container">
            {/* Sidebar */}
            <div className="sidebar pannel-details-slider-contaainer1">
              <button
                onClick={() => handlePanelSelect("metalSheetRockwool")}
                className={`pannel-btns ${
                  selectedPanel === "metalSheetRockwool" ? "active" : ""
                }`}
              >
                Metal Sheet - Rockwool Core
              </button>
              <button
                onClick={() => handlePanelSelect("metalSheetPUF")}
                className={`pannel-btns ${
                  selectedPanel === "metalSheetPUF" ? "active" : ""
                }`}
              >
                Metal Sheet - PUF Core
              </button>
              <button
                onClick={() => handlePanelSelect("metalSheetESP")}
                className={`pannel-btns ${
                  selectedPanel === "metalSheetESP" ? "active" : ""
                }`}
              >
                Metal Sheet - ESP Core
              </button>
            </div>

            {/* Panel Info and Carousel in Same Row */}
            <div className="panel-info-carousel-container">
              <div className="panel-info">{panelInfo[selectedPanel]}</div>

              {/* Carousel inside the same row, visible only when a panel is selected */}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Pannel;
