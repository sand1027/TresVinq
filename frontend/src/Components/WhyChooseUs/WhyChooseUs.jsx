import "./WhyChooseUs.css"; // Import the external CSS file

const WhyChooseUs = () => {
  const features = [
    {
      title: "Expertise You Can Trust",
      description:
        "With years of experience in the industry, we bring unparalleled knowledge and expertise to every project.",
      icon: "🔧", // Replace with a suitable icon or image.
    },
    {
      title: "Tailored Solutions",
      description:
        "We understand that every client is unique, and we deliver custom solutions that fit your specific needs.",
      icon: "🎯",
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "Our team leverages the latest tools and technologies to ensure high-quality and efficient results.",
      icon: "💻",
    },
    {
      title: "Commitment to Excellence",
      description:
        "We pride ourselves on delivering exceptional service and exceeding expectations at every step.",
      icon: "🏆",
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="Why_choose_us_container">
        <h2 className="why-choose-us__heading">Why Choose Us?</h2>
      </div>

      <div className="why-choose-us__grid">
        {features.map((feature, index) => (
          <div key={index} className="why-choose-us__card">
            <div className="why-choose-us__icon">{feature.icon}</div>
            <h3 className="why-choose-us__title">{feature.title}</h3>
            <p className="why-choose-us__description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
