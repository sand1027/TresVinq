import { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import "./Book.css";

const pages = [
  "./TRESVINQ Business Profile_page-0001.jpg",
  "./TRESVINQ Business Profile_page-0002.jpg",
  "./TRESVINQ Business Profile_page-0003.jpg",
  "./TRESVINQ Business Profile_page-0004.jpg",
  "./TRESVINQ Business Profile_page-0005.jpg",
  "./TRESVINQ Business Profile_page-0006.jpg",
  "./TRESVINQ Business Profile_page-0007.jpg",
  "./TRESVINQ Business Profile_page-0008.jpg",
  "./TRESVINQ Business Profile_page-0009.jpg",
  "./TRESVINQ Business Profile_page-0010.jpg",
  "./TRESVINQ Business Profile_page-0011.jpg",
  "./TRESVINQ Business Profile_page-0012.jpg",
  "./TRESVINQ Business Profile_page-0013.jpg",
  "./TRESVINQ Business Profile_page-0014.jpg",
  "./TRESVINQ Business Profile_page-0015.jpg",
  "./TRESVINQ Business Profile_page-0016.jpg",
  "./TRESVINQ Business Profile_page-0017.jpg",
  "./TRESVINQ Business Profile_page-0018.jpg",
  "./TRESVINQ Business Profile_page-0019.jpg",
  "./TRESVINQ Business Profile_page-0020.jpg",
  "./TRESVINQ Business Profile_page-0021.jpg",
  "./TRESVINQ Business Profile_page-0022.jpg",
  "./TRESVINQ Business Profile_page-0023.jpg",
  "./TRESVINQ Business Profile_page-0024.jpg",
  "./TRESVINQ Business Profile_page-0025.jpg",
  "./TRESVINQ Business Profile_page-0026.jpg",
  "./TRESVINQ Business Profile_page-0027.jpg",
  "./TRESVINQ Business Profile_page-0028.jpg",
  "./TRESVINQ Business Profile_page-0029.jpg",
  "./TRESVINQ Business Profile_page-0030.jpg",
  "./TRESVINQ Business Profile_page-0031.jpg",
  "./TRESVINQ Business Profile_page-0032.jpg",
  "./TRESVINQ Business Profile_page-0033.jpg",
  "./TRESVINQ Business Profile_page-0034.jpg",
  "./TRESVINQ Business Profile_page-0035.jpg",
  "./TRESVINQ Business Profile_page-0036.jpg",
  "./TRESVINQ Business Profile_page-0037.jpg",
  "./TRESVINQ Business Profile_page-0038.jpg",
  "./TRESVINQ Business Profile_page-0039.jpg",
  "./TRESVINQ Business Profile_page-0040.jpg",
  "./TRESVINQ Business Profile_page-0041.jpg",
  "./TRESVINQ Business Profile_page-0042.jpg",
  "./TRESVINQ Business Profile_page-0043.jpg",
  "./TRESVINQ Business Profile_page-0044.jpg",
  "./TRESVINQ Business Profile_page-0045.jpg",
  "./TRESVINQ Business Profile_page-0046.jpg",
  "./TRESVINQ Business Profile_page-0047.jpg",
  "./TRESVINQ Business Profile_page-0048.jpg",
  "./TRESVINQ Business Profile_page-0049.jpg",
  "./TRESVINQ Business Profile_page-0050.jpg",
  "./TRESVINQ Business Profile_page-0051.jpg",
  "./TRESVINQ Business Profile_page-0052.jpg",
  "./TRESVINQ Business Profile_page-0053.jpg",
  "./TRESVINQ Business Profile_page-0054.jpg",
  "./TRESVINQ Business Profile_page-0055.jpg",
];

const Book = () => {
  const bookRef = useRef(null);
  const popupRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleFlip = (e) => {
    setCurrentPage(e.data);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <button className="open-button" onClick={() => setIsOpen(true)}>
        Open Brochure
      </button>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content" ref={popupRef}>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              X
            </button>
            <div className="book-wrapper">
              {currentPage > 0 && (
                <button
                  className="nav-button left"
                  onClick={() => bookRef.current.pageFlip().flipPrev()}
                >
                  &lt;
                </button>
              )}
              <div className="book-container">
                <HTMLFlipBook
                  width={400}
                  height={800}
                  size="fixed"
                  minWidth={500}
                  maxWidth={1000}
                  minHeight={600}
                  maxHeight={1200}
                  drawShadow={true}
                  flippingTime={1000}
                  useMouseEvents={true}
                  showCover={false}
                  mobileScrollSupport={false}
                  startPage={0}
                  maxShadowOpacity={0.5}
                  ref={bookRef}
                  onFlip={handleFlip}
                >
                  {pages.map((src, index) => (
                    <div key={index} className="page">
                      <img
                        src={src}
                        alt={`Page ${index + 1}`}
                        className="page-image"
                      />
                    </div>
                  ))}
                </HTMLFlipBook>
              </div>
              {currentPage < pages.length - 2 && (
                <button
                  className="nav-button right"
                  onClick={() => bookRef.current.pageFlip().flipNext()}
                >
                  &gt;
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;
