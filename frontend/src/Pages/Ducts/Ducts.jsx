import { useState, useRef } from "react"; // Import useRef to reference the panel info
// Import Link for routing
import Slider from "react-slick"; // Importing react-slick for the carousel
const Ducts = () => {
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
  const images = ["/duct1.webp", "/duct2.webp", "/duct3.jpg"];

  const panelInfo = {
    metalSheetRockwool: (
      <div className="panel-details">
        <div className="pannel-details-header-container">
          <h2>Square Ducts Made of Stainless Steel</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Material Specifications:</strong>
                <ul>
                  <li>Thickness: 18G – 24G</li>
                  <li>
                    Sizes: From 150 x 150 x 1100 mm to 1500 x 1500 x 1100 mm
                  </li>
                  <li>Material: Premium-grade SS316 and SS304</li>
                  <li>
                    Standards: Compliant with SMACNA and DMW 144 duct
                    construction standards
                  </li>
                </ul>
              </li>
              <li>
                <strong>Key Features:</strong>
                <ul>
                  <li>
                    All ductwork, including connectors and accessories, is
                    fabricated from stainless steel.
                  </li>
                  <li>
                    Rectangular ducts and fittings are built per SMACNA
                    standards, ensuring industry compliance.
                  </li>
                  <li>
                    Slip & Drive Cleating Options:
                    <ul>
                      <li>Drive Cleat: SMACNA T1</li>
                      <li>Standing “S” Cleat: SMACNA T11 and SMACNA T6</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Fabrication Standards:</strong>
                <ul>
                  <li>
                    Precision manufacturing using CNC machines, including plasma
                    cutters, ensures accurate dimensions, notches, and fold
                    lines.
                  </li>
                  <li>
                    Machine-treated and handcrafted edges using lock formers,
                    flangers, and rollers for quality finishes.
                  </li>
                  <li>
                    All connections include nuts, bolts, gaskets, and
                    reinforcements for reliable assembly.
                  </li>
                  <li>
                    Custom sizes and dimensions are available to meet client
                    requirements.
                  </li>
                  <li>Shipped unassembled unless specified otherwise.</li>
                </ul>
              </li>
              <li>
                <strong>Applications:</strong> Designed for cleanroom
                environments and industries requiring high precision in
                ductwork.
              </li>
            </ul>
          </div>
          <div className="pannel-details-slider-contaainer">
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
          <h2>Square Ducts Made of Galvanized Steel</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Material Specifications:</strong>
                <ul>
                  <li>Thickness: 18G – 24G</li>
                  <li>
                    Sizes: From 150 x 150 x 1100 mm to 1500 x 1500 x 1100 mm
                  </li>
                  <li>Material: High-grade galvanized steel</li>
                  <li>
                    Standards: Compliant with SMACNA and DMW 144 duct
                    construction standards
                  </li>
                </ul>
              </li>
              <li>
                <strong>Key Features:</strong>
                <ul>
                  <li>
                    All ductwork, connectors, and accessories are made of
                    galvanized steel for added strength and longevity.
                  </li>
                  <li>
                    Rectangular ducts and fittings conform to SMACNA standards
                    for consistent quality.
                  </li>
                  <li>
                    Slip & Drive Cleating Options:
                    <ul>
                      <li>Drive Cleat: SMACNA T1</li>
                      <li>Standing “S” Cleat: SMACNA T11 and SMACNA T6</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Fabrication Standards:</strong>
                <ul>
                  <li>
                    Manufactured using CNC plasma cutters for accuracy in
                    dimensions, notches, and folding lines.
                  </li>
                  <li>
                    Edges are treated with lock formers, flangers, and rollers
                    for a seamless finish.
                  </li>
                  <li>
                    Includes all required accessories such as nuts, bolts,
                    gaskets, and reinforcements.
                  </li>
                  <li>
                    Custom sizes are available to meet specific client needs.
                  </li>
                  <li>Shipped unassembled unless specified otherwise.</li>
                </ul>
              </li>
              <li>
                <strong>Applications:</strong> Ideal for use in HVAC systems,
                cleanrooms, and industries requiring reliable duct systems.
              </li>
            </ul>
          </div>
          <div className="pannel-details-slider-contaainer">
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
    <>
      <div className="pannel-head-container ">
        {/* Breadcrumb Navigation */}
        <div className="products-top-container">
          <div
            className={`breadcrumb ${breadcrumbClass}`}
            onClick={handleBreadcrumbClick}
          >
            <span>Our Products</span>
            <span className="breadcrumb-arrow"> &gt;&gt; </span>
            <span>HVAC Ducts</span>
          </div>
        </div>
      </div>
      <div className="pannel-heading-container">
        <h1>HVAC Ducts</h1>
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
              Square Ducts Made of Stainless Steel
            </button>
            <button
              onClick={() => handlePanelSelect("metalSheetPUF")}
              className={`pannel-btns ${
                selectedPanel === "metalSheetPUF" ? "active" : ""
              }`}
            >
              Square Ducts Made of Galvanized Steel
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

export default Ducts;
