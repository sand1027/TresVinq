import { useState, useEffect } from "react";
import "./Products.css";
import { Link } from "react-router-dom";

const products = [
  {
    title: "Clean Room Panels",
    description:
      "Precision-engineered for optimal hygiene and contamination control.",
    image: "/img1.jpg",
    link: "/mcl/pannel",
  },
  {
    title: "Clean Room Ceiling",
    description: "Seamless design for controlled environments.",
    image: "/cel2.jpeg",
    link: "/mcl/ceiling",
  },
  {
    title: "Clean Room Doors",
    description: "Secure, airtight access points.",
    image: "/door1.jpeg",
    link: "/mcl/door",
  },
  {
    title: "Clean Room Windows",
    description: "Crystal-clear views without compromising cleanliness.",
    image: "wind2.avif",
    link: "/mcl/window",
  },
  {
    title: "Clean Room Wall Guards",
    description: "Efficient wall protection solutions.",
    image: "g3.jpeg",
    link: "/mcl/wallgaurd",
  },
];

const products1 = [
  {
    title: "Cross Over Bench",
    description:
      "A versatile crossover bench combining seating, a shoe rack, and hidden storage for a stylish and functional space solution.",
    image: "/cross1.png",
    link: "/crf/cross-bench",
  },
  {
    title: "L Shaped Cross Over Bench",
    description:
      "A sleek L-shaped crossover bench with integrated stainless steel shelves, offering durable and space-efficient seating with storage.",
    image: "/lshap1.jpeg",
    link: "/crf/l-shaped",
  },
  {
    title: "Storage",
    description:
      "Efficient and hygienic storage solutions designed to maintain cleanliness and organization in controlled environments.",
    image: "/store2.webp",
    link: "/crf/storage",
  },
  {
    title: "Cabinets",
    description:
      "Stylish and functional cabinets designed for organized storage, enhancing both utility and aesthetics in any space.",
    image: "caba1.png",
    link: "/crf/cabinets",
  },
  {
    title: "Tables",
    description:
      "Versatile and durable tables crafted for functionality and style, perfect for enhancing any workspace or living area.",
    image: "tab2.jpeg",
    link: "/crf/tables",
  },
  {
    title: "Trolleys",
    description:
      "Durable and mobile trolleys designed for easy transport and organized storage in various environments.",
    image: "trolley3.webp",
    link: "/crf/trolleys",
  },
];
const products2 = [
  {
    title: "Static Pass Box",
    description:
      "Secure enclosures designed for transferring materials between controlled environments without compromising cleanliness.",
    image: "static2.webp",
    link: "/passbox",
  },
  {
    title: "Dynamic Pass Box",
    description:
      " Advanced pass boxes with airflow systems to maintain pressure differentials, ensuring contamination-free material transfer.",
    image: "/dynamic2.webp",
    link: "/passbox",
  },
];
const products3 = [
  {
    title: "Square Ducts Made of Stainless Steel",
    description:
      "Durable stainless steel square ducts designed for efficient airflow and long-lasting performance in industrial and commercial environments..",
    image: "/duct2.webp",
    link: "/ducts",
  },
  {
    title: "Square Ducts Made of Galvanized Steel",
    description:
      "Durable square ducts crafted from galvanized steel, offering robust and corrosion-resistant solutions for efficient air distribution.",
    image: "duct1.webp",
    link: "/ducts",
  },
];
const products4 = [
  {
    title: "Perforated Cable Trays",
    description:
      "Ventilated trays ideal for supporting and organizing cables while allowing heat dissipation.",
    image: "/tray1.webp",
    link: "/cable-trays",
  },
  {
    title: "Ladder-Type Cable Trays",
    description:
      "Sturdy cable management systems designed for heavy-duty cables with easy installation and maintenance.",
    image: "/ltray1.webp",
    link: "/cable-trays",
  },
  {
    title: "Raceway Cable Trays",
    description:
      " Enclosed cable trays providing protection and a neat appearance for cable routing in various settings.",
    image: "/rtray2.webp",
    link: "/cable-trays",
  },
];
const products5 = [
  {
    title: "Electrical Enclosures - Large",
    description:
      "Spacious enclosures designed to house and protect electrical equipment in industrial or commercial environments.",
    image: "lee.jpeg",
    link: "/enclousers",
  },
  {
    title: "Electrical Enclosures - Medium",
    description:
      "Versatile and compact enclosures offering reliable protection for electrical components in various applications.",
    image: "mee3.webp",
    link: "/enclousers",
  },
  {
    title: "Electrical Enclosures - Double Door",
    description:
      "Enclosures with dual doors for easy access and secure storage of electrical components, ideal for larger setups.",
    image: "/dee3.avif",
    link: "/enclousers",
  },
  {
    title: "Electrical Enclosures - Small",
    description:
      "Compact enclosures perfect for housing smaller electrical devices and components while ensuring safety and organization.",
    image: "/see2.webp",
    link: "/enclousers",
  },
];

const Products = () => {
  const [isResponsive, setIsResponsive] = useState(window.innerWidth <= 768);
  const [showMore, setShowMore] = useState({
    products: 2,
    products1: 2,
    products3: 2,
    products4: 2,
    products5: 2,
  });
  const [breadcrumbClass, setBreadcrumbClass] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShowMore = (key) => {
    setShowMore((prev) => ({
      ...prev,
      [key]: prev[key] === 2 ? Infinity : 2,
    }));
  };
  const handleBreadcrumbClick = () => {
    setBreadcrumbClass("animate-breadcrumb");
  };

  useEffect(() => {
    setBreadcrumbClass("animate-breadcrumb");
  }, []);
  return (
    <div className="products-container1">
      <div className="products-top-container">
        <div
          className={`breadcrumb ${breadcrumbClass}`}
          onClick={handleBreadcrumbClick}
        >
          <span>Home</span>
          <span className="breadcrumb-arrow"> &gt;&gt; </span>
          <span>Products</span>
        </div>
      </div>
      <div className="products-heading-container">
        <h1>Products</h1>
      </div>
      <div className="products-container">
        {/* Modular Clean Room */}
        <div className="modular-clean-room">
          <section className="products">
            <div className="products_heading_container">
              <h2 className="products__heading">Modular Clean Room</h2>
            </div>
            <div className="products__grid">
              {products
                .slice(0, isResponsive ? showMore.products : products.length)
                .map((product, index) => (
                  <Link
                    to={product.link}
                    key={index}
                    className="products__link"
                  >
                    <div className="products__card">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="products__image"
                      />
                      <div className="products__overlay">
                        <h3 className="products__title">{product.title}</h3>
                        <p className="products__description">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
            {isResponsive && products.length > 2 && (
              <button
                className="products__view-more"
                onClick={() => handleShowMore("products")}
              >
                {showMore.products === 2 ? "View More" : "View Less"}
              </button>
            )}
          </section>
        </div>

        {/* Clean Room Furniture */}
        <div className="modular-clean-room">
          <section className="products">
            <div className="products_heading_container">
              <h2 className="products__heading">Clean Room Furniture</h2>
            </div>
            <div className="products__grid">
              {products1
                .slice(0, isResponsive ? showMore.products1 : products1.length)
                .map((product, index) => (
                  <Link
                    to={product.link}
                    key={index}
                    className="products__link"
                  >
                    <div className="products__card">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="products__image"
                      />
                      <div className="products__overlay">
                        <h3 className="products__title">{product.title}</h3>
                        <p className="products__description">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
            {isResponsive && products1.length > 2 && (
              <button
                className="products__view-more"
                onClick={() => handleShowMore("products1")}
              >
                {showMore.products1 === 2 ? "View More" : "View Less"}
              </button>
            )}
          </section>
        </div>
        <div className="modular-clean-room">
          <section className="products">
            <div className="products_heading_container">
              <h2 className="products__heading">Pass Boxes</h2>
            </div>
            <div className="products__grid">
              {products2
                .slice(0, isResponsive ? showMore.products2 : products2.length)
                .map((product, index) => (
                  <Link
                    to={product.link}
                    key={index}
                    className="products__link"
                  >
                    <div className="products__card">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="products__image"
                      />
                      <div className="products__overlay">
                        <h3 className="products__title">{product.title}</h3>
                        <p className="products__description">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
            {isResponsive && products2.length > 2 && (
              <button
                className="products__view-more"
                onClick={() => handleShowMore("products2")}
              >
                {showMore.products2 === 2 ? "View More" : "View Less"}
              </button>
            )}
          </section>
        </div>

        <div className="modular-clean-room">
          <section className="products">
            <div className="products_heading_container">
              <h2 className="products__heading">HVAC Ducts</h2>
            </div>
            <div className="products__grid">
              {products3
                .slice(0, isResponsive ? showMore.products3 : products3.length)
                .map((product, index) => (
                  <Link
                    to={product.link}
                    key={index}
                    className="products__link"
                  >
                    <div className="products__card">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="products__image"
                      />
                      <div className="products__overlay">
                        <h3 className="products__title">{product.title}</h3>
                        <p className="products__description">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
            {isResponsive && products3.length > 2 && (
              <button
                className="products__view-more"
                onClick={() => handleShowMore("products3")}
              >
                {showMore.products3 === 2 ? "View More" : "View Less"}
              </button>
            )}
          </section>
        </div>

        <div className="modular-clean-room">
          <section className="products">
            <div className="products_heading_container">
              <h2 className="products__heading">Cable Trays</h2>
            </div>
            <div className="products__grid">
              {products4
                .slice(0, isResponsive ? showMore.products4 : products4.length) // Correct slicing for products4
                .map((product, index) => (
                  <Link
                    to={product.link}
                    key={index}
                    className="products__link"
                  >
                    <div className="products__card">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="products__image"
                      />
                      <div className="products__overlay">
                        <h3 className="products__title">{product.title}</h3>
                        <p className="products__description">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
            {isResponsive &&
              products4.length > 2 && ( // Ensure condition checks products4
                <button
                  className="products__view-more"
                  onClick={() => handleShowMore("products4")} // Pass products4 key
                >
                  {showMore.products4 === 2 ? "View More" : "View Less"}
                </button>
              )}
          </section>
        </div>

        <div className="modular-clean-room">
          <section className="products">
            <div className="products_heading_container">
              <h2 className="products__heading">Electrical Enclosures</h2>
            </div>
            <div className="products__grid">
              {products5
                .slice(0, isResponsive ? showMore.products5 : products5.length) // Correct slicing for products5
                .map((product, index) => (
                  <Link
                    to={product.link}
                    key={index}
                    className="products__link"
                  >
                    <div className="products__card">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="products__image"
                      />
                      <div className="products__overlay">
                        <h3 className="products__title">{product.title}</h3>
                        <p className="products__description">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
            {isResponsive &&
              products5.length > 2 && ( // Ensure condition checks products5
                <button
                  className="products__view-more"
                  onClick={() => handleShowMore("products5")} // Use the correct key
                >
                  {showMore.products5 === 2 ? "View More" : "View Less"}
                </button>
              )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Products;
