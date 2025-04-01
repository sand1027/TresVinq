import { useState, useRef } from "react"; // Import useRef to reference the panel info
// Import Link for routing
import Slider from "react-slick"; // Importing react-slick for the carousel
const Enclousers = () => {
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
  const images = ["/lee.jpeg", "/lee2.jpeg", "/lee3.jpg"];
  const images2 = ["/mee1.webp", "/mee2.webp", "/mee3.webp"];
  const images3 = ["/dee1.jpeg", "/dee2.png", "/dee3.avif"];
  const images4 = ["/see1.webp", "/see2.webp", "/see3.webp", "/see4.webp"];

  const panelInfo = {
    metalSheetRockwool: (
      <div className="panel-details">
        <div className="pannel-details-header-container">
          <h2>Electrical Enclosures - Large</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Application:</strong> Large electrical enclosures are
                primarily used for housing electrical controls and instruments
                in environments where oil or dust-tight specifications are not
                necessary.
              </li>
              <li>
                <strong>Finish:</strong> Powder-coated for durability, providing
                protection against humidity, dust, and corrosion.
              </li>
              <li>
                <strong>Accessories:</strong>
                <ul>
                  <li>
                    Panels: Provide secure mounting points for electrical
                    components.
                  </li>
                  <li>
                    Terminal Blocks: Facilitate safe electrical connections.
                  </li>
                  <li>Type 1 Flush Lock: Ensures secure locking.</li>
                  <li>
                    Self-Tapping Screws: Simplify installation by creating their
                    own threads.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="pannel-details-slider-contaainer">
            <Slider {...sliderSettings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Large Enclosure Slide ${index + 1}`}
                    className="pannel-carousel-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    ),
    metalSheetRockwool1: (
      <div className="panel-details">
        <div className="pannel-details-header-container">
          <h2>Electrical Enclosures - Medium</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Application:</strong> Ideal for smaller electrical
                controls in environments that do not require oil or dust-tight
                sealing.
              </li>
              <li>
                <strong>Finish:</strong> Powder-coated for corrosion and
                abrasion resistance.
              </li>
              <li>
                <strong>Accessories:</strong>
                <ul>
                  <li>
                    Panels: Help organize and secure electrical components.
                  </li>
                  <li>
                    Terminal Blocks: Allow for safe electrical connections.
                  </li>
                  <li>
                    Type 1 Flush Lock: Ensures security against unauthorized
                    entry.
                  </li>
                  <li>Self-Tapping Screws: Enable quick installation.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="pannel-details-slider-contaainer">
            <Slider {...sliderSettings}>
              {images2.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Medium Enclosure Slide ${index + 1}`}
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
          <h2>Electrical Enclosures - Double Door</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Application:</strong> Ideal for housing wiring boxes,
                junction boxes, and pull boxes in both indoor and outdoor
                settings.
              </li>
              <li>
                <strong>Finish:</strong> Powder-coated for enhanced durability,
                corrosion resistance, and aesthetics.
              </li>
              <li>
                <strong>Accessories:</strong>
                <ul>
                  <li>
                    Panels: Offer secure mounting for electrical components.
                  </li>
                  <li>Terminal Blocks: Manage wiring effectively.</li>
                  <li>Type 1 Flush Lock: Prevents unauthorized access.</li>
                  <li>Self-Tapping Screws: Easy and quick installation.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="pannel-details-slider-contaainer">
            <Slider {...sliderSettings}>
              {images3.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Double Door Enclosure Slide ${index + 1}`}
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
          <h2>Electrical Enclosures - Small</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Application:</strong> Suitable for compact electrical
                controls in non-harsh environments.
              </li>
              <li>
                <strong>Finish:</strong> Powder-coated for resistance to
                moisture, dust, and wear.
              </li>
              <li>
                <strong>Accessories:</strong>
                <ul>
                  <li>
                    Panels: Organize and mount electrical components
                    efficiently.
                  </li>
                  <li>
                    Terminal Blocks: Prevent electrical faults by orderly
                    wiring.
                  </li>
                  <li>
                    Type 1 Flush Lock: Adds security for the enclosed
                    components.
                  </li>
                  <li>Self-Tapping Screws: Simplify assembly.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="pannel-details-slider-contaainer">
            <Slider {...sliderSettings}>
              {images4.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Small Enclosure Slide ${index + 1}`}
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
            <span>Electrical Enclosures</span>
          </div>
        </div>
      </div>
      <div className="pannel-heading-container">
        <h1>Electrical Enclosures</h1>
      </div>
      <div className="pannel-main-content-container">
        <div className="trresvinq-overview">
          <h2>Tresvinq Electrical Enclosures</h2>
          <p>
            Tresvinq Electrical Enclosures offer secure and reliable protection
            for electrical components and devices. Built with high-quality
            materials, they provide resistance to environmental factors such as
            dust, moisture, and corrosion, ensuring the safety and longevity of
            your equipment. Available in various sizes and configurations, these
            enclosures are ideal for both industrial and commercial
            applications. Tresvinq Electrical Enclosures are designed to meet
            rigorous standards while maintaining ease of installation and access
            for maintenance.
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
              Electrical Enclosures - Large
            </button>
            <button
              onClick={() => handlePanelSelect("metalSheetRockwool1")}
              className={`pannel-btns ${
                selectedPanel === "metalSheetRockwool1" ? "active" : ""
              }`}
            >
              Electrical Enclosures - Medium
            </button>
            <button
              onClick={() => handlePanelSelect("metalSheetPUF")}
              className={`pannel-btns ${
                selectedPanel === "metalSheetPUF" ? "active" : ""
              }`}
            >
              Electrical Enclosures - Double Door
            </button>
            <button
              onClick={() => handlePanelSelect("metalSheetESP")}
              className={`pannel-btns ${
                selectedPanel === "metalSheetESP" ? "active" : ""
              }`}
            >
              Electrical Enclosures - Small
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

export default Enclousers;
