import { useState, useRef } from "react"; // Import useRef to reference the panel info
// Import Link for routing
import Slider from "react-slick"; // Importing react-slick for the carousel
import "../CleanRoomPartition/Pannel/Pannel.css";
const PassBox = () => {
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
  const images = ["/static1.webp", "/static2.webp", "/static3.webp"];
  const images2 = [
    "/dynamic.webp",
    "/dynamic2.webp",
    "/dynamic3.webp",
    "/dynamic4.webp",
  ];

  const panelInfo = {
    metalSheetRockwool: (
      <div className="pannel-details">
        <div className="pannel-details-header-container">
          <h2>Static Pass Box</h2>
        </div>
        <div className="pannel-details-content-container">
          <ul>
            <li>
              <strong>Description:</strong> Static Pass Boxes are meticulously
              engineered stainless steel enclosures designed to facilitate the
              transfer of materials between controlled and non-controlled
              environments, such as cleanrooms and labs, without compromising
              the sterility of the cleanroom environment.
            </li>
            <li>
              <strong>Key Features:</strong>
              <ul>
                <li>
                  Material: Constructed from 1–1.2 mm thick stainless steel,
                  ensuring durability and cleanliness.
                </li>
                <li>
                  Electrical Interlock: Prevents simultaneous opening of both
                  doors to maintain cleanroom integrity.
                </li>
                <li>
                  Manual Interlock: Offers an additional layer of operational
                  security.
                </li>
                <li>
                  Emergency Push Button: Allows for immediate manual override in
                  critical situations.
                </li>
                <li>
                  Viewing Doors: Transparent panels for safe monitoring during
                  material transfer.
                </li>
              </ul>
            </li>
            <li>
              <strong>Optional Features:</strong> Liquid Tray for spill control
              during liquid-based material transfers.
            </li>
            <li>
              <strong>Dimensions:</strong> Standard Size: 700mm x 500mm x 590mm
              (custom sizes available upon request).
            </li>
            <li>
              <strong>Model Options:</strong>
              <table className="door-types-table">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>External Dimensions</th>
                    <th>Internal Dimensions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>PB500</td>
                    <td>700x500x590mm</td>
                    <td>550x550x550mm</td>
                  </tr>
                  <tr>
                    <td>PB600</td>
                    <td>800x600x690mm</td>
                    <td>650x650x650mm</td>
                  </tr>
                  <tr>
                    <td>PB750</td>
                    <td>950x750x840mm</td>
                    <td>760x760x760mm</td>
                  </tr>
                  <tr>
                    <td>PB800</td>
                    <td>1000x800x890mm</td>
                    <td>850x850x850mm</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li>
              <strong>Applications:</strong> Suitable for labs and cleanrooms,
              ensuring contamination-free material transfer.
            </li>
          </ul>
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
      <div className="pannel-details">
        <div className="pannel-details-header-container">
          <h2>Dynamic Pass Box</h2>
        </div>
        <div className="pannel-details-content-container pannel-gap-reducer">
          <ul>
            <li>
              <strong>Description:</strong> Dynamic Pass Boxes are advanced
              stainless steel systems designed to facilitate material movement
              between controlled environments while actively purifying the air
              using HEPA filtration.
            </li>
            <li>
              <strong>Key Features:</strong>
              <ul>
                <li>
                  HEPA Filter: Equipped with a 14-grade HEPA filter to remove
                  particles as small as 0.3 microns.
                </li>
                <li>
                  Electrical Interlock: Prevents simultaneous door opening,
                  safeguarding air cleanliness.
                </li>
                <li>
                  Airflow System: Maintains unidirectional airflow, ensuring a
                  clean transfer process.
                </li>
                <li>
                  Emergency Push Button: Allows manual operation override for
                  safety.
                </li>
                <li>
                  Sight Glass Doors: Enables visibility of materials during the
                  transfer process.
                </li>
              </ul>
            </li>
            <li>
              <strong>Dimensions:</strong> Standard Size: 700mm x 500mm x 590mm
              (custom sizes available upon request).
            </li>
            <li>
              <strong>Model Options:</strong>
              <table className="door-types-table">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>External Dimensions</th>
                    <th>Internal Dimensions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>PB500</td>
                    <td>570x510x1030mm</td>
                    <td>450x450x500mm</td>
                  </tr>
                  <tr>
                    <td>PB600</td>
                    <td>720x660x1130mm</td>
                    <td>600x600x600mm</td>
                  </tr>
                  <tr>
                    <td>PB750</td>
                    <td>1020x660x1430mm</td>
                    <td>900x600x900mm</td>
                  </tr>
                  <tr>
                    <td>PB800</td>
                    <td>1320x860x1930mm</td>
                    <td>1200x800x1400mm</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li>
              <strong>Material Specifications:</strong>
              <ul>
                <li>Material: Premium SS316 or SS304 stainless steel.</li>
                <li>
                  Thickness: Robust construction with 1–1.2 mm steel panels.
                </li>
              </ul>
            </li>
            <li>
              <strong>Applications:</strong> Ideal for labs and cleanrooms
              requiring high air cleanliness during material transfer.
            </li>
          </ul>
          <div className="pannel-details-slider-contaainer">
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
            <span>Pass Boxes</span>
          </div>
        </div>
      </div>
      <div className="pannel-heading-container">
        <h1>Pass Boxes</h1>
      </div>
      <div className="pannel-main-content-container">
        <div className="trresvinq-overview">
          <h2>Tresvinq Passbox</h2>
          <p>
            Tresvinq Passboxes are an essential solution for transferring
            materials into and out of controlled environments without
            compromising cleanliness. Designed to minimize the risk of
            contamination, these passboxes feature seamless, easy-to-clean
            surfaces and automatic or manual doors for quick access. Ideal for
            industries like pharmaceuticals, biotech, and electronics, they
            provide a secure and hygienic way to transfer tools, equipment, and
            materials between different areas. With built-in filtration and UV
            sterilization options, Tresvinq Passboxes ensure optimal cleanliness
            during every transfer.
          </p>
        </div>
      </div>
      <div className="pannel-content-container ">
        <div className="panel-container additional-width">
          {/* Sidebar */}
          <div className="sidebar">
            <button
              onClick={() => handlePanelSelect("metalSheetRockwool")}
              className={`pannel-btns ${
                selectedPanel === "metalSheetRockwool" ? "active" : ""
              }`}
            >
              Static Pass Box
            </button>
            <button
              onClick={() => handlePanelSelect("metalSheetPUF")}
              className={`pannel-btns ${
                selectedPanel === "metalSheetPUF" ? "active" : ""
              }`}
            >
              Dynamic Pass Box
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

export default PassBox;
