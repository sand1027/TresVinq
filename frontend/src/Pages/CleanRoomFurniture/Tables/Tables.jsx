import { useState, useRef } from "react"; // Import useRef to reference the panel info
// Import Link for routing
import Slider from "react-slick";
const Tables = () => {
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
  const images = ["/tab1.webp", "/tab2.jpeg", "/tab3.webp"];
  const images2 = ["/rack1.webp", "/rack2.webp", "/rack3.webp"];

  const panelInfo = {
    metalSheetRockwool: (
      <div className="panel-details">
        <div className="pannel-details-header-container">
          <h2>Clean Room Tables</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Design Features:</strong>
                <ul>
                  <li>
                    Main Tray and Bottom Tray: The dual-tray design offers ample
                    storage and working space, making these tables ideal for
                    organized operations within cleanrooms.
                  </li>
                  <li>
                    Electropolished Surface: Provides a smooth,
                    contamination-resistant finish that is easy to clean and
                    maintain.
                  </li>
                  <li>
                    Durable Construction: Manufactured from high-quality
                    stainless steel to ensure long-lasting performance and
                    resistance to corrosion.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Material and Dimensions:</strong>
                <ul>
                  <li>
                    Material: Available in SS304 and SS316, meeting the highest
                    quality standards.
                  </li>
                  <li>
                    Thickness: Fabricated with stainless steel ranging from 18G
                    to 24G.
                  </li>
                  <li>
                    Size Options:
                    <ul>
                      <li>T90: 900mm x 600mm x 900mm (36" x 24" x 36")</li>
                      <li>T120: 1200mm x 600mm x 920mm (48" x 24" x 36")</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Applications:</strong>
                These tables are suitable for cleanrooms in industries such as
                pharmaceuticals, biotechnology, electronics, and food
                production, ensuring a clean and organized workspace.
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
          <h2>SS Slotted Angle Racks</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Design Features:</strong>
                <ul>
                  <li>
                    Customizable Configurations: The modular design allows for a
                    wide range of sizes and thicknesses to suit specific storage
                    needs.
                  </li>
                  <li>
                    Slotted Angles: Provide a strong framework that is easy to
                    assemble and adjust, accommodating various shelf
                    configurations.
                  </li>
                  <li>
                    Electropolished Finish: Ensures a smooth surface,
                    maintaining hygiene and preventing the accumulation of
                    contaminants.
                  </li>
                  <li>
                    Wide Range of Sizes: Multiple options for shelves, panels,
                    and angles provide adaptability for different storage
                    requirements.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Material and Dimensions:</strong>
                <ul>
                  <li>
                    Material: Available in SS304 and SS316 for superior
                    durability and cleanliness.
                  </li>
                  <li>
                    Thickness: Options include 22G (0.8mm), 20G (0.9mm), 18G
                    (1.2mm), and 16G (1.6mm) for varied strength and load
                    capacity.
                  </li>
                  <li>
                    Shelf Sizes:
                    <ul>
                      <li>900mm x 300mm to 1200mm x 600mm</li>
                      <li>Panel thickness ranges from 1.8mm to 2.5mm</li>
                    </ul>
                  </li>
                  <li>
                    Slotted Angle Sizes:
                    <ul>
                      <li>Widths: 40mm x 40mm or 60mm x 40mm</li>
                      <li>Heights: From 1800mm to 3000mm</li>
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
            <span>Tables</span>
          </div>
        </div>
      </div>
      <div className="pannel-heading-container">
        <h1>Tables</h1>
      </div>
      <div className="pannel-main-content-container">
        <div className="trresvinq-overview">
          <h2>Tresvinq Tables</h2>
          <p>
            Tresvinq Tables are built to provide a clean and sturdy surface for
            various operations in controlled environments. Made with
            easy-to-clean materials, these tables help maintain cleanliness
            while offering ample workspace. Their ergonomic design supports long
            hours of use without compromising on comfort or hygiene. Whether for
            laboratories, clean rooms, or assembly lines, Tresvinq tables
            provide both durability and functionality in critical environments.
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
              Clean Room Tables
            </button>
            <button
              onClick={() => handlePanelSelect("metalSheetPUF")}
              className={`pannel-btns ${
                selectedPanel === "metalSheetPUF" ? "active" : ""
              }`}
            >
              SS Slotted Angle Racks
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

export default Tables;
