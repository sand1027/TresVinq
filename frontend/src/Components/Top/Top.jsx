import { useEffect, useState } from "react";
import "./Top.css"; // Import the CSS file

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Makes the scroll smooth
    });
  };

  // Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      onClick={scrollToTop}
      className={`scroll-to-top-btn ${!isVisible ? "hide" : ""}`}
    >
      ^ {/* You can replace this with a proper icon if needed */}
    </div>
  );
};

export default ScrollToTopButton;
