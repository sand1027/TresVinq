import "./OurJourney.css"; // Add your custom CSS for styling

const OurJourney = () => {
  const milestones = [
    {
      year: 2009,
      event:
        "Established to provide plumbing and gas line solutions for pharma industries.",
    },
    {
      year: 2015,
      event: "Renamed Vintech Fabrications, maintaining unmatched quality.",
    },
    {
      year: 2018,
      event:
        "Evolved into TRES Engineering & Solutions Pvt Ltd, focusing on turnkey cleanroom solutions.",
    },
    {
      year: 2024,
      event: "Joint venture with Vintech formed TRESVINQ Kleanir Pvt Ltd.",
    },
  ];

  return (
    <section className="journey">
      <h2 className="journey-title">Our Journey</h2>
      <ul className="journey-timeline">
        {milestones.map((milestone, index) => (
          <li key={index} className="journey-item">
            <span className="journey-year">{milestone.year}</span>
            <p className="journey-event">{milestone.event}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OurJourney;
