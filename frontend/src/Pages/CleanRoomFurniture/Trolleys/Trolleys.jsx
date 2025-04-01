import { useState, useRef } from "react"; // Import useRef to reference the panel info
// Import Link for routing
import Slider from "react-slick";
const Trolleys = () => {
  // Set initial selected panel to "metalSheetRockwool"
  const [selectedPanel, setSelectedPanel] = useState("metalSheetRockwool");
  const [breadcrumbClass, setBreadcrumbClass] = useState("");

  const handleBreadcrumbClick = () => {
    setBreadcrumbClass("animate-breadcrumb");
  };
  // Create refs for each panel info
  const rockwoolRef = useRef(null);
  const pufRef = useRef(null);
  const espRef = useRef(null);

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
  const images = [
    "/trolley1.webp",
    "/trolley2.webp",
    "/trolley3.webp",
    "/trolley4.webp",
  ];
  const images2 = ["/trolleym1.webp", "/trolleym2.webp"];

  const panelInfo = {
    metalSheetRockwool: (
      <div className="panel-details">
        <div className="pannel-details-header-container">
          <h2>SS Trolleys</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Key Features:</strong>
                <ul>
                  <li>
                    Shelves: Available with solid or perforated designs,
                    featuring raised edges to prevent items from slipping or
                    falling during transport.
                  </li>
                  <li>
                    Swivel Casters with Brakes: Ensure smooth mobility and
                    secure positioning when stationary.
                  </li>
                  <li>
                    Two-Tray Design: Provides ample storage space for organized
                    material handling.
                  </li>
                  <li>
                    Electropolished Surface: Ensures a hygienic, easy-to-clean
                    finish that is ideal for sterile environments.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Material and Dimensions:</strong>
                <ul>
                  <li>
                    Material: Available in SS304 and SS316 for superior
                    durability and hygiene.
                  </li>
                  <li>
                    Thickness: Constructed with stainless steel ranging from 18G
                    to 24G.
                  </li>
                  <li>
                    Size Options:
                    <ul>
                      <li>TR550: 550mm x 550mm x 990mm (22" x 22" x 39")</li>
                      <li>TR865: 865mm x 550mm x 990mm (34" x 22" x 39")</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Applications:</strong>
                SS Trolleys are suitable for cleanrooms, laboratories, and
                healthcare facilities, offering reliable and hygienic transport
                solutions for materials and equipment.
              </li>
            </ul>
          </div>
          <div className="pannel-details-slider-contaainer pannel-details-slider-contaainer1">
            {/* You can add an image slider or any other related content here */}
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
          <h2>SS Material Movement Trolleys</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Key Features:</strong>
                <ul>
                  <li>
                    Shelf Design: Options for solid or perforated shelves with
                    raised edges to enhance safety and organization.
                  </li>
                  <li>
                    Swivel Casters with Brakes: Facilitate easy maneuverability
                    and stability during operations.
                  </li>
                  <li>
                    Single-Tray Design: Simplifies material movement while
                    maximizing efficiency.
                  </li>
                  <li>
                    Electropolished Surface: Ensures easy cleaning and
                    resistance to contamination, making it ideal for sterile
                    settings.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Material and Dimensions:</strong>
                <ul>
                  <li>
                    Material: Available in SS304 and SS316, meeting
                    cleanroom-grade requirements.
                  </li>
                  <li>
                    Thickness: Manufactured with stainless steel in thicknesses
                    ranging from 18G to 24G.
                  </li>
                  <li>
                    Size Options:
                    <ul>
                      <li>TR550: 550mm x 550mm x 990mm (22" x 22" x 39")</li>
                      <li>TR865: 865mm x 550mm x 990mm (34" x 22" x 39")</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="pannel-details-slider-contaainer pannel-details-slider-contaainer1">
            {/* You can add an image slider or any other related content here */}
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
            <span>Trolleys</span>
          </div>
        </div>
      </div>
      <div className="pannel-heading-container">
        <h1>Trolleys</h1>
      </div>
      <div className="pannel-main-content-container">
        <div className="trresvinq-overview">
          <h2>Tresvinq Trolleys</h2>
          <p>
            Tresvinq Trolleys offer a practical and mobile solution for material
            handling in sterile environments. Designed for ease of use, these
            trolleys have smooth surfaces that make cleaning quick and easy
            while maintaining hygiene standards. With a robust frame and durable
            wheels, they are perfect for transporting goods and equipment in
            high-traffic areas. Ideal for healthcare, laboratories, and
            pharmaceutical industries, these trolleys help maintain an efficient
            workflow
          </p>
        </div>
      </div>
      <div className="pannel-content-container">
        <div className="panel-container">
          {/* Sidebar */}
          <div className="sidebar">
            <button
              onClick={() => handlePanelSelect("metalSheetRockwool")}
              className={`pannel-btns ${
                selectedPanel === "metalSheetRockwool" ? "active" : ""
              }`}
            >
              SS Trolleys
            </button>
            <button
              onClick={() => handlePanelSelect("metalSheetPUF")}
              className={`pannel-btns ${
                selectedPanel === "metalSheetPUF" ? "active" : ""
              }`}
            >
              SS Material Movement Trolleys
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
  );
};

export default Trolleys;
