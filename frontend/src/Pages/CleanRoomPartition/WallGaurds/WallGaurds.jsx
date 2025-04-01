import { useState, useRef } from "react"; // Import useRef to reference the panel info
// Import Link for routing
import Slider from "react-slick"; // Importing react-slick for the carousel

const Pannel = () => {
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
  const images = ["/g1.jpeg", "/g2.jpeg", "/g3.jpeg"];
  const images1 = ["/g4.jpeg", "/g5.jpg", "/g6.jpeg"];
  const images2 = ["/b1.jpg", "/b2.jpeg", "/b3.jpg"];

  const panelInfo = {
    metalSheetRockwool: (
      <div className="panel-details">
        <div className="pannel-details-header-container">
          <h2>Wall and Corner Protection Railing</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Impact Protection:</strong> Engineered to shield
                vertical panels and corners from accidental impacts, ensuring
                the longevity of cleanroom surfaces.
              </li>
              <li>
                <strong>Material:</strong> Constructed from robust stainless
                steel, resistant to corrosion and wear, even in demanding
                conditions.
              </li>
              <li>
                <strong>Design:</strong> Sleek and minimalistic design ensures
                functionality without compromising the aesthetics of your
                cleanroom.
              </li>
              <li>
                <strong>Applications:</strong> Ideal for laboratories,
                pharmaceutical plants, hospitals, and other environments with
                high mobility of equipment or trolleys.
              </li>
            </ul>
          </div>
          <div className="pannel-details-slider-contaainer">
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
          <h2>Wall-Mounted Protection Railing</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Purpose:</strong> Protects vertical panels from direct
                contact with equipment, machinery, or trolleys.
              </li>
              <li>
                <strong>Material:</strong> Made from premium-grade stainless
                steel, offering exceptional strength and a polished finish to
                blend seamlessly into cleanroom environments.
              </li>
              <li>
                <strong>Installation:</strong> Mounted directly onto walls,
                providing stability and ease of installation.
              </li>
              <li>
                <strong>Durability:</strong> Withstand repeated impacts,
                ensuring sustained performance over time.
              </li>
              <li>
                <strong>Applications:</strong> Suitable for areas with frequent
                movement of carts, machinery, or personnel, such as corridors,
                storage zones, and operational areas.
              </li>
            </ul>
          </div>
          <div className="pannel-details-slider-contaainer">
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
          <h2>Bollard</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Impact Resistance:</strong> Protects panels and
                equipment from collisions with vehicles, machinery, or trolleys.
              </li>
              <li>
                <strong>Material:</strong> Constructed from stainless steel for
                maximum durability and resistance to rust, corrosion, and wear.
              </li>
              <li>
                <strong>Design:</strong> A sturdy and cylindrical structure,
                these bollards are as functional as they are visually appealing.
              </li>
              <li>
                <strong>Versatile Use:</strong> Can be installed in various
                settings, including entry points, corridors, and around
                sensitive areas, to prevent accidental damage.
              </li>
              <li>
                <strong>Applications:</strong> Ideal for industrial, commercial,
                and cleanroom environments requiring heavy-duty protection.
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
            <span>Clean Room Wall Gaurds</span>
          </div>
        </div>
      </div>
      <div className="pannel-heading-container">
        <h1>Wall Gaurds</h1>
      </div>
      <div className="pannel-main-content-container">
        <div className="trresvinq-overview">
          <h2>Clean Room Wall Guards</h2>
          <p>
            Clean room wall guards are essential for protecting walls in
            controlled environments, ensuring their integrity and compliance
            with cleanliness standards. These wall guards are specifically
            designed to resist impact, abrasions, and chemical exposure, making
            them ideal for use in pharmaceutical facilities, laboratories, food
            processing units, and other clean room environments
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
              Wall and Corner Protection Railing
            </button>
            <button
              onClick={() => handlePanelSelect("metalSheetPUF")}
              className={`pannel-btns ${
                selectedPanel === "metalSheetPUF" ? "active" : ""
              }`}
            >
              Wall-Mounted Protection Railing
            </button>
            <button
              onClick={() => handlePanelSelect("metalSheetESP")}
              className={`pannel-btns ${
                selectedPanel === "metalSheetESP" ? "active" : ""
              }`}
            >
              Bollard
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

export default Pannel;
