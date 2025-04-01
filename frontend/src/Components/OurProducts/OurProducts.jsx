import "./OurProducts.css";

const products = [
  {
    title: "Clean Room Wall Panels",
    description:
      "Precision-engineered for optimal hygiene and contamination control.",
    image: "https://via.placeholder.com/300x200", // Replace with your actual image URL.
  },
  {
    title: "Clean Room Ceiling Panels",
    description: "Seamless design for controlled environments.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Clean Room Doors",
    description: "Secure, airtight access points.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Clean Room Windows",
    description: "Crystal-clear views without compromising cleanliness.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "GI & SS Rectangular Ducts",
    description: "Efficient ventilation systems.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "SS Pharma Furniture & Equipment",
    description: "Hygienic, durable solutions.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "GI/SS Cable Tray",
    description: "Organize cables seamlessly.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Electrical Enclosures",
    description: "Safe housing for electrical components.",
    image: "https://via.placeholder.com/300x200",
  },
];

const OurProducts = () => {
  return (
    <section className="products">
      <div className="products_heading_container">
        <h2 className="products__heading">Our Products</h2>
      </div>

      <div className="products__grid">
        {products.map((product, index) => (
          <div key={index} className="products__card">
            <img
              src={product.image}
              alt={product.title}
              className="products__image"
            />
            <div className="products__overlay">
              <h3 className="products__title">{product.title}</h3>
              <p className="products__description">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
