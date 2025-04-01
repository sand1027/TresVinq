import "./Home.css";
import CarouselWithButton from "../../Components/Courasel/Courasel";

import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import IndustriesWeServe from "../../Components/IndustriesWeServe/IndustriesWeServe";
import OurProducts from "../../Components/OurProducts/OurProducts";
const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeHeadingContainer">
        <h1>
          TRESVINQ Kleanir – Your Cleanroom, Our Expertise. Hygiene and
          Efficiency, Seamlessly Engineered
        </h1>
        <div className="solganContainer">
          <div className="headingContent additionalHeading">
            <h2>
              Sustainable, efficient, and reliable – TRESVINQ Kleanir delivers
              it all.
            </h2>
          </div>
          <div className="headingContent">
            <h2>
              Redefining Cleanroom Standards. Tailored Partitions for a Cleaner
              Tomorrow
            </h2>
          </div>
        </div>
      </div>
      <div className="caoroselContainer">
        <CarouselWithButton />
      </div>
      <div className="WhyChooseUs">
        <WhyChooseUs />
      </div>
      <div className="IndustriesWeServe">
        <IndustriesWeServe />
      </div>
    </div>
  );
};

export default Home;
