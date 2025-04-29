import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Book from "../Book/Book";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const menuRef = useRef(null);

  const categories = [
    {
      name: "Modular Clean Room",
      path: "/mcl",
      options: [
        { name: "Pannels", path: "/mcl/pannel" },
        { name: "Ceiling", path: "/mcl/ceiling" },
        { name: "Door", path: "/mcl/door" },
        { name: "Windows", path: "/mcl/window" },
        { name: "Wall Gaurds", path: "/mcl/wallgaurd" },
      ],
    },
    {
      name: "Clean Room Furnitures",
      path: "/crf",
      options: [
        { name: "Crossover Bench", path: "crf/cross-bench" },
        { name: "L Shape Crossover Bench", path: "crf/l-shaped" },
        { name: "Storage", path: "crf/storage" },
        { name: "Cabinets", path: "crf/cabinets" },
        { name: "Tables", path: "crf/tables" },
        { name: "Trollyes", path: "crf/trolleys" },
      ],
    },
    {
      name: "Pass Boxes",
      path: "/passbox",
    },
    {
      name: "HVAC Ducts",
      path: "/ducts",
    },
    {
      name: "Cable Trays",
      path: "/cable-trays",
    },
    {
      name: "Electrical Enclosures",
      path: "/enclousers",
    },
  ];

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseEnterOurProducts = () => {
    setShowDropdown(true);
    setHoveredCategory(null); // Reset category state when showing dropdown
  };

  const handleMouseLeaveOurProducts = () => {
    if (!menuOpen) {
      setShowDropdown(false);
      setHoveredCategory(null);
    }
  };

  const handleMouseEnterCategory = (categoryName) => {
    setHoveredCategory(categoryName);
  };

  // Close the dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        setShowDropdown(false);
        setHoveredCategory(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-top-container">
          <Link to="/">
            <div className="nav-left">
              <img src={assets.logo} alt="Logo" className="logo" />
            </div>
          </Link>
        </div>

        <div className="nav-right">
          <div className="openBookBtn">
            <Book />
          </div>

          <div className="nav-contactus">
            <button className="nav-btn">Contact us</button>
          </div>
          <div className="hamburger-menu" onClick={handleMenuToggle}>
            {menuOpen ? (
              <FaTimes className="bars" />
            ) : (
              <FaBars className="bars" />
            )}
          </div>
        </div>
      </div>

      <div
        className={`navbar-menu-container ${menuOpen ? "active" : ""}`}
        ref={menuRef}
      >
        <ul className="navbar-ul">
          <li className="navbar-li">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="navbar-li">
            <Link to="/about-us" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li
            className="navbar-li-ourproducts"
            onMouseEnter={handleMouseEnterOurProducts}
            onMouseLeave={handleMouseLeaveOurProducts}
          >
            <Link
              to="/product"
              onClick={() => {
                setMenuOpen(false);
                setShowDropdown(false);
              }}
            >
              Our Products
            </Link>

            {showDropdown && (
              <div className="dropdown-menu">
                <div className="drop-down-inside">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className="dropdown-column"
                      onMouseEnter={() =>
                        handleMouseEnterCategory(category.name)
                      }
                      onMouseLeave={() => setHoveredCategory(null)} // Reset hover state on leave
                    >
                      <span className="dropdown-header">
                        <Link
                          to={category.path}
                          onClick={() => {
                            setMenuOpen(false);
                            setShowDropdown(false);
                            setHoveredCategory(null); // Reset hovered category
                          }}
                        >
                          {category.name}
                        </Link>
                      </span>
                      {hoveredCategory === category.name &&
                        category.options && (
                          <ul className="nested-dropdown">
                            {category.options.map((option, optionIndex) => (
                              <li key={optionIndex}>
                                <span className="option-header">
                                  <Link
                                    to={option.path}
                                    onClick={() => {
                                      setMenuOpen(false);
                                      setShowDropdown(false);
                                      setHoveredCategory(null); // Reset hovered category
                                    }}
                                  >
                                    {option.name}
                                  </Link>
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
          <li className="navbar-li">
            <Link to="/blog" onClick={() => setMenuOpen(false)}>
              Blogs
            </Link>
          </li>
          <li className="navbar-li">
            <Link to="/contact-us" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
