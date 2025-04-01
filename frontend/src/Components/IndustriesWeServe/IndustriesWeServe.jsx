import "./IndustriesWeServe.css";

const IndustriesWeServe = () => {
  const industries = [
    "Pharmaceuticals",
    "Healthcare",
    "Electronics",
    "Food & Beverages",
    "Aerospace",
    "And More",
  ];

  return (
    <section className="industries">
      <div className="industries_we_serve_container">
        <h2 className="industries__heading">Industries We Serve</h2>
      </div>

      <ul className="industries__list">
        {industries.map((industry, index) => (
          <li key={index} className="industries__item">
            {industry}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IndustriesWeServe;
