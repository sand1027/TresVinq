import { useState, useRef } from "react"; // Import useRef to reference the panel info
// Import Link for routing
import Slider from "react-slick";

const CrossOver = () => {
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
  const images = ["/cross1.jpeg", "/cross2.jpeg", "/cross3.jpeg"];
  const images1 = ["/crossa1.webp", "/crossa2.jpeg", "/crossa3.jpeg"];

  const panelInfo = {
    metalSheetRockwool: (
      <div className="panel-details">
        <div className="pannel-details-header-container">
          <h2>Crossover Bench with Shoe Rack and Storage</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Material and Thickness:</strong>
                Constructed using SS304 or SS316, ensuring durability and
                resistance to corrosion. Thickness options range from 18G to
                24G, catering to varied requirements.
              </li>
              <li>
                <strong>Dimensions:</strong>
                Standard Size: 1000mm (L) x 400mm (D) x 450mm (H). Custom Sizes:
                Available upon request to suit specific needs.
              </li>
              <li>
                <strong>Design Features:</strong>
                Shoe Storage: 12 pigeonholes for footwear, located on the left.
                General Storage: Swing door compartment on the right for
                miscellaneous items. Hygienic: Designed for easy cleaning, ideal
                for cleanrooms, food production areas, and other sterile
                environments.
              </li>
              <li>
                <strong>Additional Features:</strong>
                Adjustable feet for stability on uneven surfaces. Fully welded,
                eliminating crevices where dirt or bacteria could accumulate.
              </li>
            </ul>
          </div>
          <div className="pannel-details-slider-contaainer">
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
          <h2>Crossover Bench with Shoe Rack and Top Openable Storage</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Material and Thickness:</strong>
                Built from high-grade stainless steel, offering exceptional
                strength and resistance to corrosion. Thickness options of 18G
                to 24G.
              </li>
              <li>
                <strong>Dimensions:</strong>
                Standard Size: 1000mm (L) x 400mm (D) x 450mm (H). Custom Sizes:
                Tailored sizes available on request.
              </li>
              <li>
                <strong>Design Features:</strong>
                Shoe Storage: Two shelves for organized footwear placement on
                the left. Top Openable Storage: Spacious, easy-to-access storage
                compartment on the right. Hygienic: Fully welded construction
                for seamless cleaning and sanitation.
              </li>
              <li>
                <strong>Additional Features:</strong>
                Adjustable feet for better stability. Suitable for use in
                sterile environments such as cleanrooms and food production
                facilities.
              </li>
            </ul>
          </div>
          <div className="pannel-details-slider-contaainer">
            {/* You can add an image slider or any other related content here */}
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
    ),
    metalSheetESP: (
      <div className="panel-details">
        <div className="pannel-details-header-container">
          <h2>Simple Crossover Bench</h2>
        </div>
        <div className="pannel-details-content-container">
          <div className="pannel-details-ul-container">
            <ul>
              <li>
                <strong>Material and Thickness:</strong>
                Made from high-quality stainless steel with thickness options of
                18G to 24G.
              </li>
              <li>
                <strong>Dimensions:</strong>
                Standard Size: 1000mm (L) x 400mm (D) x 450mm (H). Custom Sizes:
                Available to match your specific requirements.
              </li>
              <li>
                <strong>Design Features:</strong>A minimalist design, focused on
                functionality. Hygienic and easy to clean, making it ideal for
                sterile environments.
              </li>
              <li>
                <strong>Additional Features:</strong>
                Fully welded construction ensures no crevices for contamination.
                Adjustable feet for enhanced stability.
              </li>
            </ul>
          </div>
          <div className="pannel-details-slider-contaainer">
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
            <span>Crossover Bench</span>
          </div>
        </div>
      </div>
      <div className="pannel-heading-container">
        <h1>Crossover Bench</h1>
      </div>
      <div className="pannel-main-content-container">
        <div className="trresvinq-overview">
          <h2>Tresvinq Crossover Benches</h2>
          <p>
            Tresvinq Crossover Benches are designed for easy access and
            effective material handling in clean environments. Their ergonomic
            design allows seamless movement from one side to another while
            maintaining a high level of cleanliness. Perfect for industries
            requiring quick and safe transfer of goods between different
            sections, these benches provide both functionality and hygiene. The
            sturdy structure ensures durability and reliability even in
            high-traffic areas
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
              Crossover Bench with Shoe Rack and Storage
            </button>
            <button
              onClick={() => handlePanelSelect("metalSheetPUF")}
              className={`pannel-btns ${
                selectedPanel === "metalSheetPUF" ? "active" : ""
              }`}
            >
              Crossover Bench with Shoe Rack and Top Openable Storage
            </button>
            <button
              onClick={() => handlePanelSelect("metalSheetESP")}
              className={`pannel-btns ${
                selectedPanel === "metalSheetESP" ? "active" : ""
              }`}
            >
              Simple Crossover Bench
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

export default CrossOver;
