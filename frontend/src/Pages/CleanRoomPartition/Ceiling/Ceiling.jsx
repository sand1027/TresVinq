import { useState, useRef } from "react"; // Import useRef to reference the panel info
// Import Link for routing
import Slider from "react-slick"; // Importing react-slick for the carousel

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
  const images = ["/cel1.jpg", "/cel2.jpeg", "/cel3.jpeg"];

  const panelInfo = {
    metalSheetRockwool: (
      <div className="panel-details">
        <div className="pannel-details-header-container">
          {" "}
          <h2>
            Metal Sheet Sandwich Panel – Aluminium Re-framed Rockwool Core
          </h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Thickness Options:</strong> Available in 50 mm, 80 mm,
                and 100 mm, offering flexibility for different project needs.
              </li>
              <li>
                <strong>Core Specifications:</strong>
                <ul className="doorUl">
                  <li>
                    Filled with 150 Kg/m³ Rockwool Core, ensuring outstanding
                    thermal insulation and fire resistance.
                  </li>
                  <li>
                    Core thickness options of 38 mm and 58 mm for enhanced
                    structural performance.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Outer Faces:</strong>{" "}
                <ul>
                  <li>Fabricated with a durable outer face :</li>
                  <li>0.8 mm PCGI (Pre-Coated Galvanized Iron).</li>
                  <li> 0.6 mm PPGI (Pre-Painted Galvanized Iron).</li>
                </ul>
                <li>
                  Available in customizable colors to complement any design.
                </li>
              </li>

              <li>
                <strong>Application :</strong>
                <ul className="doorUl">
                  <li>
                    Acoustic performance with a rating of 29(-5;-7) dB, ideal
                    for noise reduction in enclosed spaces.
                  </li>
                  <li>
                    o Supports a maximum load of 250 Kg/m² without gaps (60 mm
                    thickness), making it a reliable choice for heavy-duty
                    applications
                  </li>
                </ul>
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
          <h2>Metal Sheet Sandwich Panel – Aluminium Re-framed PUF Core</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Thickness Options:</strong> Offered in 50 mm, 80 mm, and
                100 mm to meet diverse project needs.
              </li>
              <li>
                <strong>Dimensions:</strong> Standard panel size of 1200 x 3000
                mm, with options for custom sizes to align with unique
                requirements.
              </li>
              <li>
                <strong>Core Specifications:</strong>
                <ul>
                  <li>
                    Composed of 150 Kg/m³ PUF Core, providing excellent
                    insulation against temperature variations.
                  </li>
                  <li>
                    Core thickness choices of 38 mm and 58 mm for tailored
                    performance.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Outer Faces:</strong>
                <ul>
                  <li>Outer surface crafted with:</li>
                  <li>0.8 mm PCGI for enhanced durability.</li>
                  <li>
                    0.6 mm PPGI, offering a lightweight and attractive finish.
                  </li>
                </ul>
                <span>Customizable colors to match project aesthetics.</span>
              </li>
              <li>
                <strong>Sound Insulation:</strong> Noise reduction efficiency
                with a rating of 29(-5;-7) dB, ensuring a quieter environment.
              </li>
              <li>
                <strong>Load-Bearing Capacity:</strong> Capable of bearing up to
                250 Kg/m² without gaps (60 mm thickness), making it ideal for
                industrial and commercial ceilings.
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
    metalSheetESP: (
      <div className="panel-details">
        <div className="pannel-details-header-container">
          <h2>Metal Sheet Sandwich Panel – Aluminium Re-framed ESP Core</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Thickness Options:</strong> Available in 50 mm, 80 mm,
                and 100 mm thicknesses for optimal customization.
              </li>
              <li>
                <strong>Dimensions:</strong> Standard dimensions of 1200 x 3000
                mm, with the flexibility to create custom sizes on demand.
              </li>
              <li>
                <strong>Core Specifications:</strong>
                <ul>
                  <li>
                    Features a 150 Kg/m³ ESP Core, delivering reliable
                    insulation and lightweight handling.
                  </li>
                  <li>
                    Core thicknesses of 38 mm and 58 mm provide adaptable
                    solutions for various applications.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Outer Faces:</strong>
                <ul>
                  <li>Sturdy outer layers crafted from:</li>
                  <li>0.8 mm PCGI, offering robust protection.</li>
                  <li>
                    0.6 mm PPGI, providing a smooth and polished appearance.
                  </li>
                </ul>
                <span>
                  Colors can be customized as per specific design needs.
                </span>
              </li>
              <li>
                <strong>Sound Insulation:</strong> Acoustic performance rated at
                29(-5;-7) dB, making it suitable for noise-sensitive
                environments.
              </li>
              <li>
                <strong>Load-Bearing Capacity:</strong> Can sustain a maximum
                load of 250 Kg/m² without gaps (60 mm thickness), ensuring
                long-lasting reliability.
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
            <span>Clean Room Ceiling</span>
          </div>
        </div>
        <div className="pannel-heading-container">
          <h1>Ceiling</h1>
        </div>
        <div className="pannel-main-content-container">
          <div className="trresvinq-overview">
            <h2>Tresvinq Clean Room Ceilings</h2>
            <p>
              Tresvinq Clean Room Ceilings are meticulously designed to maintain
              the highest standards of hygiene and air quality. Their smooth,
              seamless finish helps prevent dust accumulation and ensures that
              contaminants are minimized, making them ideal for sterile
              environments. With easy installation and robust durability, these
              ceilings are engineered to withstand the stringent requirements of
              clean rooms across industries like pharmaceuticals, biotechnology,
              and electronics.
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
                Aluminium Re-framed Rockwool Core
              </button>
              <button
                onClick={() => handlePanelSelect("metalSheetPUF")}
                className={`pannel-btns ${
                  selectedPanel === "metalSheetPUF" ? "active" : ""
                }`}
              >
                Aluminium Re-framed PUF Core
              </button>
              <button
                onClick={() => handlePanelSelect("metalSheetESP")}
                className={`pannel-btns ${
                  selectedPanel === "metalSheetESP" ? "active" : ""
                }`}
              >
                Aluminium Re-framed ESP Core
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
