import { useState, useRef } from "react"; // Import useRef to reference the panel info
// Import Link for routing
import Slider from "react-slick"; // Importing react-slick for the carousel
import "./Door.css";

const doorTypes = [
  {
    type: "Single Door",
    standardSize: "1000 x 2100 mm",
    customSizes: "Available on request to fit unique dimensions",
    colorOptions: "Customized to your preference",
  },
  {
    type: "Double Door",
    standardSize: "2000 x 2100 mm",
    customSizes: "Tailored to your specific needs",
    colorOptions: "Available in a variety of finishes",
  },
  {
    type: "Unequal Double Door",
    standardSize: "1500 x 2100 mm",
    customSizes: "Fabricated to fit non-standard spaces",
    colorOptions: "Matches your project aesthetics",
  },
];
const accessories = [
  {
    category: "Opening Options",
    details: [
      "Right-handed, left-handed, or sliding configurations to suit your space layout.",
    ],
  },
  {
    category: "Opening Mechanism",
    details: [
      "Handle for conventional use.",
      "Push Plate for ease of access.",
      "Panic Bar for emergency exits.",
      "Kick Plate for added protection against damage.",
    ],
  },
  {
    category: "View Glass Options",
    details: [
      "Enhance visibility with:",
      "Round or square shapes.",
      "Single-glazed or double-glazed glass.",
      "Options for standard or fire-rated glass to meet safety standards.",
    ],
  },
  {
    category: "Door Closers",
    details: [
      "Smooth and controlled closing with:",
      "Overhead door closers.",
      "Surface-mounted door closers.",
    ],
  },
  {
    category: "Additional Features",
    details: [
      "Lock & Key systems for secure access.",
      "Tower bolts for enhanced stability.",
      "Sleeve anchors for robust installation.",
    ],
  },
];
const accessories1 = [
  {
    title: "Opening Options",
    details: [
      "Designed for flexibility, with right-handed, left-handed, or sliding openings to suit your layout.",
    ],
  },
  {
    title: "Opening Mechanism",
    details: [
      "Handle for traditional functionality.",
      "Push Plate for hands-free access.",
      "Panic Bar for emergency exits.",
      "Kick Plate for added protection from wear and tear.",
    ],
  },
  {
    title: "View Glass Options",
    details: [
      "Add visibility and style with:",
      "Round or square shapes.",
      "Single-glazed or double-glazed options.",
      "Standard or fire-rated glass configurations for safety and aesthetic needs.",
    ],
  },
  {
    title: "Door Closers",
    details: [
      "Ensure smooth operation with:",
      "Overhead door closers.",
      "Surface-mounted door closers.",
    ],
  },
  {
    title: "Additional Features",
    details: [
      "Lock & Key systems for secure entry.",
      "Tower Bolts for enhanced locking capabilities.",
      "Sleeve Anchors for reliable and sturdy installation.",
    ],
  },
];

const table1 = [
  {
    type: "Single Door",
    standardSize: "1000 x 2100 mm",
    customSizes: "Available on request to meet unique spatial requirements.",
    colorOptions: "Fully customizable to match your design preferences.",
  },
  {
    type: "Double Door",
    standardSize: "2000 x 2100 mm",
    customSizes: "Tailored to your specific needs.",
    colorOptions: "Available in a range of finishes.",
  },
  {
    type: "Unequal Double Door",
    standardSize: "1500 x 2100 mm",
    customSizes: "Fabricated to fit non-standard dimensions.",
    colorOptions: "Choose from various colors to suit your project.",
  },
];

const Pannel = () => {
  // Set initial selected panel to "metalSheetRockwool"
  const [selectedPanel, setSelectedPanel] = useState("metalSheetRockwool");
  const [breadcrumbClass, setBreadcrumbClass] = useState("");
  const handleBreadcrumbClick = () => {
    setBreadcrumbClass("animate-breadcrumb");
  };
  // Scroll to the selected panel info when the button is clicked

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
  const images = ["/door1.jpeg", "/door2.jpeg", "/door3.jpeg"];
  const images1 = ["/door4.png", "/door5.jpeg"];

  // Door Types

  // Cable Tray Data

  const panelInfo = {
    metalSheetRockwool: (
      <>
        <div className="panel-details">
          <div className="pannel-details-header-container">
            {" "}
            <h2>Metal Sheet Door with Rockwool Core</h2>
          </div>
          <div className="doorP">
            <p>
              Our <strong>Metal Sheet Door with Rockwool Core</strong> is a
              premium choice for secure, durable, and fire-retardant door
              solutions. Designed with precision, these doors combine
              functionality with aesthetics, making them ideal for various
              commercial, industrial, and cleanroom environments.
            </p>
          </div>

          <div className="pannel-details-content-container">
            <div className="pannel-details-ul-container">
              <ul>
                <li>
                  <strong>Galvanized Steel Frame:</strong>{" "}
                  <ul className="doorUl">
                    <li>
                      Built with a robust galvanized steel frame, ensuring
                      strength and durability.
                    </li>
                    <li>
                      Integrated with MCP sockets, providing stability and
                      resistance to wear.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Core Specifications:</strong>Filled with 150 Kg/m³
                  Rockwool Core, offering superior fire resistance, sound
                  insulation, and thermal protection.
                </li>
                <li>
                  <strong>Fire Retardant Properties:</strong> o Rated for 2
                  hours of fire resistance, ensuring safety in high-risk
                  environments.
                </li>
                <li>
                  <strong>Sheet Thickness:</strong>Fabricated with sheet
                  thickness options ranging from 1.2 mm to 2 mm, tailored to
                  meet specific structural requirements.
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
        <div className="accessories-container">
          <h2 className="accessories-header">Customizable Accessories</h2>
          <div className="accessories-list">
            {accessories.map((item, index) => (
              <div key={index} className="accessories-item">
                <h3 className="accessories-category">{item.category}</h3>
                <ul>
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="accessory-detail">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="door-types-container">
          <h2 className="door-types-header">Door Types and Specifications</h2>
          <table className="door-types-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Standard Size</th>
                <th>Custom Sizes</th>
                <th>Color Options</th>
              </tr>
            </thead>
            <tbody>
              {doorTypes.map((door, index) => (
                <tr key={index}>
                  <td>{door.type}</td>
                  <td>{door.standardSize}</td>
                  <td>{door.customSizes}</td>
                  <td>{door.colorOptions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    ),
    metalSheetPUF: (
      <>
        <div className="panel-details">
          <div className="pannel-details-header-container">
            {" "}
            <h2>Honeycomb Core Metal Sheet Door</h2>
          </div>
          <div className="doorP">
            <p>
              The <strong>Honeycomb Core Metal Sheet Door </strong> is a
              reliable and lightweight door solution, designed for functional
              spaces requiring durability and aesthetic flexibility. Built with
              high-quality materials, this door offers excellent structural
              integrity while catering to a variety of customization needs.
            </p>
          </div>

          <div className="pannel-details-content-container">
            <div className="pannel-details-ul-container">
              <ul>
                <li>
                  <strong>Galvanized Steel Frame:</strong>{" "}
                  <ul className="doorUl">
                    <li>
                      Constructed with a galvanized steel frame, ensuring
                      long-term durability and resistance to environmental
                      factors.
                    </li>
                    <li>
                      Equipped with MCP sockets, offering stability and ease of
                      installation.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Core Material:</strong>
                  <ul className="doorUl">
                    <li>
                      Fitted with a 150 Kg/m³ Honeycomb Core, delivering
                      excellent strength-to-weight ratio while maintaining a
                      lightweight structure
                    </li>
                    <li>
                      Fire Property: Classified as non-fire retardant, suitable
                      for areas where fire resistance is not a primary
                      requirement.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Sheet Thickness:</strong> Available in sheet thickness
                  options ranging from 1.2 mm to 2 mm, tailored to meet
                  project-specific requirements
                </li>
                <li>
                  <strong>Applications:</strong>
                  <ul className="doorUl">
                    <li>
                      High Fire Resistance: These doors are specifically
                      designed for areas where fire safety is a priority, such
                      as industrial plants, laboratories, and cleanrooms.
                    </li>
                    <li>
                      Soundproofing: Perfect for offices, conference rooms, or
                      auditoriums where noise reduction is essential.
                    </li>
                  </ul>
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
        <div className="accessories-container">
          <h2 className="accessories-header">Customizable Accessories</h2>
          <div className="accessories-list">
            {accessories1.map((item, index) => (
              <div key={index} className="accessories-item">
                <h3 className="accessories-category">{item.category}</h3>
                <ul>
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="accessory-detail">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="door-types-container">
          <h2 className="door-types-header">Door Types and Specifications</h2>
          <table className="door-types-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Standard Size</th>
                <th>Custom Sizes</th>
                <th>Color Options</th>
              </tr>
            </thead>
            <tbody>
              {table1.map((door, index) => (
                <tr key={index}>
                  <td>{door.type}</td>
                  <td>{door.standardSize}</td>
                  <td>{door.customSizes}</td>
                  <td>{door.colorOptions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
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
            <span>Clean Room Door</span>
          </div>
        </div>
        <div className="pannel-heading-container">
          <h1>Door</h1>
        </div>
        <div className="pannel-main-content-container">
          <div className="trresvinq-overview">
            <h2>Tresvinq Clean Room Doors</h2>
            <p>
              Tresvinq Clean Room Doors are crafted with precision to provide
              effective contamination control without compromising on
              functionality. These doors are designed with high-performance
              seals to prevent the entry of unwanted particles, maintaining a
              controlled environment. Their smooth surfaces and easy-to-clean
              features enhance the overall hygiene, while their sturdy
              construction ensures long-lasting durability for high-traffic
              areas.
            </p>
          </div>
        </div>
        <div className="pannel-content-container">
          <div className="panel-container">
            {/* Sidebar */}
            <div className="sidebar .pannel-details-slider-contaainer1">
              <button
                onClick={() => handlePanelSelect("metalSheetRockwool")}
                className={`pannel-btns ${
                  selectedPanel === "metalSheetRockwool" ? "active" : ""
                }`}
              >
                Metal Sheet Door with Rockwool Core
              </button>
              <button
                onClick={() => handlePanelSelect("metalSheetPUF")}
                className={`pannel-btns ${
                  selectedPanel === "metalSheetPUF" ? "active" : ""
                }`}
              >
                Honeycomb Core Metal Sheet Door
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
