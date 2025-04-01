import "./OurValues.css"; // Add your custom CSS for styling

const OurValues = () => {
  const values = [
    {
      title: "Innovation",
      description: "Continuous improvement to meet industry demands.",
    },
    {
      title: "Sustainability",
      description: "Commitment to green manufacturing processes.",
    },
    {
      title: "Excellence",
      description: "Ensuring global compliance and unmatched quality.",
    },
  ];

  return (
    <section className="values">
      <h2 className="values-title">Our Values</h2>
      <div className="values-grid">
        {values.map((value, index) => (
          <div key={index} className="value-card">
            <h3 className="value-title">{value.title}</h3>
            <p className="value-description">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
