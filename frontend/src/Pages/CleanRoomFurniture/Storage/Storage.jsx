import { useState, useRef } from "react"; // Import useRef to reference the panel info
// Import Link for routing
import Slider from "react-slick";
const Storage = () => {
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
    const images = ["/store1.webp", "/store2.webp", "/store3.webp"];

    const panelInfo = {
      metalSheetRockwool: (
        <div className="panel-details">
          <div className="pannel-details-header-container">
            <h2>Clean Room Storage Made of Stainless Steel</h2>
          </div>
          <div className="pannel-details-content-container">
            <div className="pannel-details-ul-container">
              <ul>
                <li>
                  <strong>Material and Thickness:</strong>
                  <p>
                    Constructed using high-quality SS304 or SS316 stainless
                    steel, offering superior strength and resistance to
                    environmental factors.
                    <br />
                    Available in 18G to 24G thickness, depending on the level of
                    durability required for your cleanroom application.
                  </p>
                </li>
                <li>
                  <strong>Dimensions:</strong>
                  <p>
                    Standard Size: 1200mm (L) x 450mm (D) x 2000mm (H)
                    <br />
                    Custom Sizes: Tailored solutions are available upon request
                    to accommodate specific storage needs and space constraints.
                  </p>
                </li>
                <li>
                  <strong>Design Features:</strong>
                  <p>
                    <ul>
                      <li>
                        Internal Shelving: Cabinets come with internal shelves,
                        allowing for efficient storage and easy organization of
                        cleanroom supplies.
                      </li>
                      <li>
                        Roof Options: These units may feature a sloping roof
                        design to prevent dust accumulation and maintain
                        cleanliness.
                      </li>
                      <li>
                        Door Configurations: Choose from 1, 2, or 4-door
                        options, with stainless steel or glass doors. The doors
                        can be configured as either hinged or sliding to suit
                        your operational requirements.
                      </li>
                      <li>
                        Mounting Options: Cabinets are available in a variety of
                        mounting styles, including wall-mounted, with leveler
                        legs, or equipped with casters for easy mobility.
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <strong>Key Features:</strong>
                  <p>
                    Hygienic and Easy to Clean: The electropolished surface is
                    smooth, minimizing the risk of bacterial growth and making
                    the cabinets easy to clean and maintain.
                    <br />
                    Fully Welded Construction: Ensures durability and strength
                    while eliminating seams where dust and contaminants could
                    accumulate.
                    <br />
                    Adjustable Feet: Provides stability on uneven surfaces.
                    <br />
                    Suitable for Cleanrooms: Ideal for use in cleanrooms, food
                    production facilities, laboratories, and other environments
                    that require high levels of cleanliness.
                  </p>
                </li>
                <li>
                  <strong>Application:</strong>
                  <p>
                    The Clean Room Storage Cabinets are designed to meet the
                    stringent hygiene standards required in critical
                    environments. Whether you need to store chemicals, tools, or
                    other sensitive materials, these cabinets offer a practical,
                    safe, and efficient solution.
                  </p>
                </li>
              </ul>
            </div>
            <div className="pannel-details-slider-contaainer pannel-details-slider-contaainer1">
              {/* You can add an image slider or other related content here */}
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
              <span>Storage</span>
            </div>
          </div>
        </div>
        <div className="pannel-heading-container">
          <h1>Storage</h1>
        </div>
        <div className="pannel-main-content-container">
          <div className="trresvinq-overview">
            <h2>Tresvinq Storage</h2>
            <p>
              Tresvinq Storage Cabinets are designed to provide secure,
              organized, and hygienic storage solutions for clean rooms. Crafted
              with high-quality materials, these cabinets feature smooth,
              non-porous surfaces that are easy to clean and maintain. They are
              available in a variety of sizes to accommodate different storage
              needs, ensuring maximum efficiency in cleanroom environments.
              Perfect for storing sensitive equipment and materials while
              preventing contamination.
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

export default Storage;
