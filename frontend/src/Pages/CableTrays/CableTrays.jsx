import { useState, useRef } from "react"; // Import useRef to reference the panel info
// Import Link for routing
import Slider from "react-slick"; // Importing react-slick for the carousel
const CableTrays = () => {
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
  const images = ["/tray1.webp", "/tray2.webp", "/tray3.webp", "/tray4.webp"];
  const images2 = [
    "/ltray1.webp",
    "/ltray2.webp",
    "/ltray3.webp",
    "/ltray4.webp",
  ];
  const images3 = ["/rtray1.webp", "/rtray2.webp", "/rtray3.webp"];

  const panelInfo = {
    metalSheetRockwool: (
      <div className="panel-details">
        <div className="pannel-details-header-container">
          <h2>Perforated Cable Trays</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Description:</strong> Designed for the safe and
                efficient routing of heavy-duty power cables. With uniform
                holes, these trays provide necessary ventilation while offering
                a degree of protection from external damage.
              </li>
              <li>
                <strong>Specifications:</strong>
                <ul>
                  <li>
                    Material: Galvanized Steel (GI) / Stainless Steel (SS304)
                  </li>
                  <li>Thickness: 1 – 3 mm</li>
                  <li>Standard Length: 2500 mm</li>
                  <li>
                    Width Options: 50mm, 75mm, 100mm, 150mm, 200mm, 300mm,
                    450mm, 600mm
                  </li>
                  <li>Height Options: 20mm, 25mm, 40mm, 75mm, 100mm</li>
                  <li>Tray Collar: 15mm, 20mm, 25mm</li>
                </ul>
              </li>
              <li>
                <strong>Finish Options:</strong> Powder-coated, Painted, Hot Dip
                Galvanized, Natural
              </li>
              <li>
                <strong>Applications:</strong> Heavy-duty power cable
                installations requiring ventilation and partial protection.
              </li>
            </ul>
          </div>
          <div className="pannel-details-slider-contaainer">
            <Slider {...sliderSettings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Perforated Tray Slide ${index + 1}`}
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
          <h2>Ladder-Type Cable Trays</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Description:</strong> Ideal for industrial facilities
                requiring maximum ventilation and strength for heavy power
                distribution. These trays offer support for long spans and
                ensure easy installation of cables.
              </li>
              <li>
                <strong>Specifications:</strong>
                <ul>
                  <li>
                    Material: Galvanized Steel (GI) / Stainless Steel (SS304)
                  </li>
                  <li>Thickness: 1 – 3 mm</li>
                  <li>Standard Length: 2500 mm</li>
                  <li>
                    Width Options: 150mm, 200mm, 300mm, 450mm, 600mm, 800mm,
                    1000mm
                  </li>
                  <li>Side Channel Height: 50mm, 75mm, 100mm, 125mm, 150mm</li>
                  <li>Tray Collar: 15mm, 20mm, 25mm, 30mm</li>
                  <li>Slotted Run Interval: Every 250 mm</li>
                </ul>
              </li>
              <li>
                <strong>Finish Options:</strong> Powder-coated, Painted, Hot Dip
                Galvanized, Natural
              </li>
              <li>
                <strong>Applications:</strong> Long-span, heavy-duty industrial
                installations requiring ventilation and high load-carrying
                capacity.
              </li>
            </ul>
          </div>
          <div className="pannel-details-slider-contaainer">
            <Slider {...sliderSettings}>
              {images2.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Ladder Tray Slide ${index + 1}`}
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
          <h2>Raceway Cable Trays</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Description:</strong> Primarily used for light-duty
                applications like data cables and control cables. These trays
                are solid-bottom with a cover and may or may not be
                compartmentalized, depending on site conditions. Fully enclosed
                to protect cables from sunlight, falling objects, dust, water,
                and other liquids.
              </li>
              <li>
                <strong>Specifications:</strong>
                <div>
                  <p>
                    <strong>Material:</strong> Galvanized Steel (GI), Stainless
                    Steel (SS304)
                  </p>
                  <p>
                    <strong>Thickness:</strong> 1 – 3 mm
                  </p>
                  <p>
                    <strong>Standard Size:</strong> Length: 2500 mm, Width: Up
                    to 1000 mm (Custom sizes available on request)
                  </p>
                  <p>
                    <strong>Available Dimensions:</strong>
                    <br />
                    <strong>Width:</strong> 40 mm, 50 mm, 75 mm, 100 mm, 150 mm,
                    450 mm, 600 mm, 750 mm, 1000 mm
                    <br />
                    <strong>Height:</strong> 30 mm, 40 mm, 50 mm, 75 mm, 100 mm
                  </p>
                  <p>
                    <strong>Tray Collar:</strong> 15 mm, 20 mm, 25 mm
                  </p>
                </div>
              </li>
              <li>
                <strong>Finish Options:</strong> Powder-coated, Painted, Hot Dip
                Galvanized, Natural
              </li>
              <li>
                <strong>Note:</strong> Except for standard sizes, all dimensions
                are customizable based on user requests.
              </li>
            </ul>
          </div>
          <div className="pannel-details-slider-contaainer">
            <Slider {...sliderSettings}>
              {images3.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Ladder Tray Slide ${index + 1}`}
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
            <span>Clean Room Ceiling</span>
          </div>
        </div>
      </div>
      <div className="pannel-heading-container">
        <h1>Cable Trays</h1>
      </div>
      <div className="pannel-main-content-container">
        <div className="trresvinq-overview">
          <h2>Tresvinq Cable Trays</h2>
          <p>
            Tresvinq Cable Trays provide a reliable and organized solution for
            managing electrical and data cables in industrial and commercial
            settings. Constructed from high-quality materials, they offer
            durability, flexibility, and resistance to corrosion, making them
            ideal for both indoor and outdoor use. With various configurations
            available, including perforated, ladder, and solid bottom trays,
            they ensure efficient cable routing while maintaining ease of access
            for maintenance. Tresvinq Cable Trays are designed to support the
            safe and orderly distribution of electrical wiring in any
            environment.
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
              Perforated Cable Trays
            </button>
            <button
              onClick={() => handlePanelSelect("metalSheetPUF")}
              className={`pannel-btns ${
                selectedPanel === "metalSheetPUF" ? "active" : ""
              }`}
            >
              Ladder-Type Cable Trays
            </button>
            <button
              onClick={() => handlePanelSelect("metalSheetESP")}
              className={`pannel-btns ${
                selectedPanel === "metalSheetESP" ? "active" : ""
              }`}
            >
              Raceway Cable Trays
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

export default CableTrays;
