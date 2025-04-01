import "./WhatWeOffer.css"; // Add your custom CSS for styling

const WhatWeOffer = () => {
  const offerings = [
    {
      title: "Comprehensive Cleanroom Solutions",
      description:
        "Including modular walls, ceilings, doors, windows, and coving systems.",
    },
    {
      title: "Custom Cleanroom Furniture",
      description: "Designed for functionality, durability, and hygiene.",
    },
    {
      title: "HVAC Systems & Cable Management",
      description: "Advanced designs ensuring safety and efficiency.",
    },
  ];

  return (
    <section className="offerings">
      <h2 className="offerings-title">What We Offer</h2>
      <div className="offerings-grid">
        {offerings.map((offering, index) => (
          <div key={index} className="offering-card">
            <h3 className="offering-title">{offering.title}</h3>
            <p className="offering-description">{offering.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
