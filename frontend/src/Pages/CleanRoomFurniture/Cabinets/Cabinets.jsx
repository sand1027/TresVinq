import { useState, useRef } from "react"; // Import useRef to reference the panel info
// Import Link for routing
import Slider from "react-slick";

const Cabinets = () => {
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
  const images = ["/caba1.png", "/caba2.webp"];
  const images2 = ["/cab1.webp", "/cab2.jpeg", "/cab3.jpeg"];
  const images3 = ["/draw1.webp", "/draw3.webp", "/draw4.webp", "/draw5.webp"];

  const panelInfo = {
    metalSheetRockwool: (
      <div className="panel-details">
        <div className="pannel-details-header-container">
          <h2>Soiled Garment Cabinets</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Design Features:</strong>
                <ul>
                  <li>
                    Top Flap for Easy Disposal: A flap at the top allows for
                    quick and hygienic disposal of soiled garments.
                  </li>
                  <li>
                    Latched Door for Collection: The front door is equipped with
                    a secure latch for easy retrieval of stored garments.
                  </li>
                  <li>
                    Electropolished Finish: Ensures a smooth, clean surface that
                    is easy to maintain and prevents contamination.
                  </li>
                  <li>
                    Optional Sloping Roof: A sloping roof design prevents dust
                    or debris from accumulating on the surface, enhancing
                    hygiene.
                  </li>
                  <li>
                    Adjustable Leveler Legs: Ensure stable placement, even on
                    uneven floors.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Material and Dimensions:</strong>
                <ul>
                  <li>
                    Material: Available in SS304 and SS316 for superior
                    corrosion resistance and durability.
                  </li>
                  <li>
                    Thickness: Built using 18G – 24G stainless steel for robust
                    performance.
                  </li>
                  <li>
                    Size Options:
                    <ul>
                      <li>
                        Flat Top: 660mm x 540mm x 1950mm (26" x 21" x 77")
                      </li>
                      <li>
                        Sloped Top: 660mm x 540mm x 2150mm (26" x 21" x 85")
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Applications:</strong>
                Ideal for cleanrooms, hospitals, laboratories, and
                pharmaceutical facilities where proper garment handling is
                critical.
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
          <h2>Cleanroom Cleaner Cabinets</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Design Features:</strong>
                <ul>
                  <li>
                    Dual Storage Options: One side of the cabinet features
                    shelves for storing cleaning supplies, while the other side
                    remains open for larger items or equipment.
                  </li>
                  <li>
                    Electropolished Finish: The stainless steel surface is
                    polished to resist contamination and simplify cleaning.
                  </li>
                  <li>
                    Optional Sloping Roof: Enhances cleanliness by preventing
                    dust accumulation.
                  </li>
                  <li>
                    Adjustable Leveler Legs: Maintain stability on any surface.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Material and Dimensions:</strong>
                <ul>
                  <li>
                    Material: Crafted from SS304 or SS316 stainless steel.
                  </li>
                  <li>
                    Thickness: Constructed with 18G – 24G stainless steel for
                    reliability.
                  </li>
                  <li>
                    Size Options:
                    <ul>
                      <li>
                        Sloped Top: 1200mm x 600mm x 2100mm (48" x 24" x 83")
                      </li>
                      <li>
                        Flat Top: 1200mm x 600mm x 2160mm (48" x 24" x 85")
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Applications:</strong>
                Perfect for cleanrooms, laboratories, and industries requiring
                efficient storage for cleaning equipment while adhering to
                stringent hygiene standards.
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
    metalSheetESP: (
      <div className="panel-details">
        <div className="pannel-details-header-container">
          <h2>Drawer Cabinets</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Design Features:</strong>
                <ul>
                  <li>
                    Standard Drawer Configuration: Available in configurations
                    of 12 or 16 drawers for optimized storage.
                  </li>
                  <li>
                    Electropolished Finish: Enhances the cabinet’s resistance to
                    contamination and ensures an easy-to-clean surface.
                  </li>
                  <li>
                    Leveler Legs: Provide stability, ensuring smooth
                    functionality even on uneven floors.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Material and Dimensions:</strong>
                <ul>
                  <li>
                    Material: Fabricated from SS304 or SS316 stainless steel.
                  </li>
                  <li>
                    Thickness: Built using 18G – 24G stainless steel for robust
                    and long-lasting use.
                  </li>
                  <li>
                    Size Options:
                    <ul>
                      <li>
                        12 Drawer Cabinet: 860mm x 460mm x 1354mm (34" x 18" x
                        53")
                      </li>
                      <li>
                        16 Drawer Cabinet: 1130mm x 460mm x 1354mm (45" x 18" x
                        53")
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="pannel-details-slider-contaainer pannel-details-slider-contaainer1">
            {/* You can add an image slider or any other related content here */}
            <Slider {...sliderSettings}>
              {images3.map((image, index) => (
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
            <span>Clean Room Cabinents</span>
          </div>
        </div>
      </div>
      <div className="pannel-heading-container">
        <h1>Cabinets</h1>
      </div>
      <div className="pannel-main-content-container">
        <div className="trresvinq-overview">
          <h2>Metal Sheet Sandwich Panels</h2>
          <p>
            Our Metal Sheet Sandwich Panels are the perfect solution for
            creating durable, efficient, and versatile partition walls, catering
            to both vertical and horizontal configurations. Designed to offer
            superior performance, these panels come with three core options:
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
              Soiled Garment Cabinets
            </button>
            <button
              onClick={() => handlePanelSelect("metalSheetPUF")}
              className={`pannel-btns ${
                selectedPanel === "metalSheetPUF" ? "active" : ""
              }`}
            >
              Cleanroom Cleaner Cabinets
            </button>
            <button
              onClick={() => handlePanelSelect("metalSheetESP")}
              className={`pannel-btns ${
                selectedPanel === "metalSheetESP" ? "active" : ""
              }`}
            >
              Drawer Cabinets
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

export default Cabinets;
