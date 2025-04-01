import { useState, useRef } from "react"; // Import useRef to reference the panel info
// Import Link for routing
import Slider from "react-slick";
const LShaped = () => {
  {
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
    const images = ["/lshap1.jpeg", "/lshap2.jpeg", "/lshap3.jpeg"];

    const panelInfo = {
      metalSheetRockwool: (
        <div className="panel-details">
          <div className="pannel-details-header-container">
            <h2>L Shape Crossover Bench Made of Stainless Steel</h2>
          </div>
          <div className="pannel-details-content-container">
            <div className="pannel-details-ul-container">
              <ul>
                <li>
                  <strong>Material and Thickness:</strong>
                  <p>
                    Stainless Steel Grades: Available in SS304 and SS316, both
                    offering high corrosion resistance for long-lasting
                    performance.
                    <br />
                    Thickness: Constructed using 18G – 24G stainless steel,
                    ensuring strength and durability for heavy-duty use in
                    cleanroom settings.
                  </p>
                </li>
                <li>
                  <strong>Standard Dimensions:</strong>
                  <p>
                    Size 1: 1000mm (L) x 400mm (D) x 450mm (H)
                    <br />
                    Size 2: 1400mm (L) x 400mm (D) x 450mm (H)
                    <br />
                    Custom Sizes: Custom-made sizes are available on request to
                    fit your specific space and operational needs.
                  </p>
                </li>
                <li>
                  <strong>Design Features:</strong>
                  <p>
                    Simple, No-Storage Design: The bench features a clean,
                    straightforward design with no storage components, providing
                    a spacious and clear workspace.
                    <br />
                    Hygienic and Easy to Clean: The smooth stainless steel
                    surface ensures that the bench is easy to maintain and
                    clean, minimizing contamination risk in sterile
                    environments.
                    <br />
                    Adjustable Feet: For stable installation, the bench comes
                    with adjustable feet that allow you to level the bench even
                    on uneven surfaces.
                  </p>
                </li>
                <li>
                  <strong>Key Features:</strong>
                  <p>
                    Fully Welded Construction: The bench is built to last with
                    strong, welded joints that add to the unit’s sturdiness.
                    <br />
                    Versatile Use: Perfect for use in cleanrooms, food
                    production industries, and laboratories where cleanliness is
                    paramount.
                    <br />
                    Customization Options: Available in standard sizes or can be
                    customized to fit specific requirements.
                  </p>
                </li>
              </ul>
            </div>
            <div className="pannel-details-slider-contaainer pannel-details-slider-contaainer1">
              {/* Image slider or other content */}
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
            <h2>
              L Shape Crossover Bench with Shelves Made of Stainless Steel
            </h2>
          </div>
          <div className="pannel-details-content-container">
            <div className="pannel-details-ul-container">
              <ul>
                <li>
                  <strong>Material and Thickness:</strong>
                  <p>
                    Stainless Steel Grades: Available in SS304 and SS316, which
                    offer excellent corrosion resistance and durability in clean
                    environments.
                    <br />
                    Thickness: Constructed from 18G – 24G stainless steel,
                    ensuring structural integrity and longevity.
                  </p>
                </li>
                <li>
                  <strong>Standard Dimensions:</strong>
                  <p>
                    Size 1: 1000mm (L) x 400mm (D) x 450mm (H)
                    <br />
                    Size 2: 1400mm (L) x 400mm (D) x 450mm (H)
                    <br />
                    Custom Sizes: Custom sizes can be made on request to meet
                    specific design or spatial needs.
                  </p>
                </li>
                <li>
                  <strong>Design Features:</strong>
                  <p>
                    Shelving for Additional Storage: The inclusion of shelves on
                    one side of the bench allows for organized storage, making
                    it ideal for storing cleanroom tools, personal protective
                    equipment, or small supplies.
                    <br />
                    Hygienic, Easy-to-Clean Design: As with all our stainless
                    steel products, this bench is designed for ease of cleaning
                    and maintenance, ensuring that it maintains the highest
                    standards of cleanliness in sensitive environments.
                    <br />
                    Adjustable Feet: The bench features adjustable feet to
                    ensure stable placement, even on uneven floors.
                  </p>
                </li>
                <li>
                  <strong>Key Features:</strong>
                  <p>
                    Fully Welded Construction: The bench is built for durability
                    with fully welded joints, ensuring it withstands heavy use
                    and the rigors of cleanroom environments.
                    <br />
                    Standard and Custom Sizes: Available in standard sizes or
                    customized to suit the specific requirements of your space.
                    <br />
                    Suitable for Cleanrooms: Perfect for cleanroom settings,
                    food production facilities, and laboratories, this bench
                    meets the stringent hygiene standards required in such
                    environments.
                  </p>
                </li>
              </ul>
            </div>
            <div className="pannel-details-slider-contaainer pannel-details-slider-contaainer">
              {/* Image slider or other content */}
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
        <div className="pannel-head-container">
          {/* Breadcrumb Navigation */}
          <div className="products-top-container">
            <div
              className={`breadcrumb ${breadcrumbClass}`}
              onClick={handleBreadcrumbClick}
            >
              <span>Our Products</span>
              <span className="breadcrumb-arrow"> &gt;&gt; </span>
              <span>L Shaped Bench</span>
            </div>
          </div>
        </div>
        <div className="pannel-heading-container">
          <h1>L Shaped Bench</h1>
        </div>
        <div className="pannel-main-content-container">
          <div className="trresvinq-overview">
            <h2>Tresvinq L-Shaped Cross Over Bench</h2>
            <p>
              The L-Shaped Cross Over Bench from Tresvinq offers a unique design
              that allows users to move between different zones without
              contaminating the clean environment. This bench ensures a smooth,
              efficient transfer of materials, reducing cross-contamination
              risks. Its space-efficient L-shape fits perfectly in tight spaces
              while maintaining a large surface area for storage. Built with
              precision, it is ideal for sectors such as pharmaceuticals,
              laboratories, and electronics.
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
                Metal Sheet - Rockwool Core
              </button>
              <button
                onClick={() => handlePanelSelect("metalSheetPUF")}
                className={`pannel-btns ${
                  selectedPanel === "metalSheetPUF" ? "active" : ""
                }`}
              >
                Metal Sheet - PUF Core
              </button>
              <button
                onClick={() => handlePanelSelect("metalSheetESP")}
                className={`pannel-btns ${
                  selectedPanel === "metalSheetESP" ? "active" : ""
                }`}
              >
                Metal Sheet - ESP Core
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
  }
};

export default LShaped;
