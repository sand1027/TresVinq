import { assets } from "../../assets/assets";

import OurValues from "../../Components/OurValues/OurValues";
import OurVision from "../../Components/OurVision/OurVision";

import "./Aboutus.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Aboutus = () => {
  const [breadcrumbClass, setBreadcrumbClass] = useState("");

  const handleBreadcrumbClick = () => {
    setBreadcrumbClass("animate-breadcrumb");
  };

  return (
    <div className="about-us">
      <div className="products-top-container">
        <div
          className={`breadcrumb ${breadcrumbClass}`}
          onClick={handleBreadcrumbClick}
        >
          <span>Home</span>
          <span className="breadcrumb-arrow"> &gt;&gt; </span>
          <span>About Us</span>
        </div>
      </div>
      <div className="about-us-heading">
        <h1 className="about-us-heading-h1">About Us</h1>
      </div>
      <div className="about-us-contents">
        <div className="about-us-top-container">
          {" "}
          <div className="about-us-content-heading">
            <h1>TRESVINQ Kleanir Private Limited </h1>
          </div>
          <div className="about-us-content-p">
            {" "}
            <p>
              is a leading solution provider in Cleanroom, Air Duct, SS
              Furniture, Electrical enclosures and all related to clean room
              solution. TRESVINQ is your trusted partner for cutting-edge clean
              room solutions. Our state-of-the-art manufacturing processes
              ensure top-quality products that meet industry standards. Explore
              our range:
            </p>
          </div>
        </div>
      </div>

      <p className="about-us-p">
        Offering an all-inclusive, turnkey service, we are experts in planning,
        designing, directly manufacturing, validating and installing Clean
        Rooms. Choosing Galvani means choosing a partner who understands your
        needs and can provide you with effective, customized, certified and
        ready-to-use solutions.
      </p>
      <div className="about-us-choose-us-section">
        <div className="choose-us">
          <h1>Why Choose Us</h1>
        </div>
        <div className="choose-us-container">
          <div className="choose-left">
            <div className="choose-us-content">
              <div className="border-container">
                {" "}
                <div className="choose-us-image-container">
                  <img src={assets.choose1} alt="" className="choose-us-img" />
                </div>
              </div>
              <div className="p-span-holder">
                {" "}
                <span>
                  <strong>Top Quality Factory Price</strong>
                </span>
                <p>
                  We have a quality control department to verify each product at
                  different phases, from the procurement of parts to finished
                  products
                </p>
              </div>
            </div>
            <div className="choose-us-content">
              <div className="choose-us-content">
                <div className="border-container">
                  {" "}
                  <div className="choose-us-image-container">
                    <img
                      src={assets.choose2}
                      alt=""
                      className="choose-us-img"
                    />
                  </div>
                </div>
                <div className="p-span-holder">
                  {" "}
                  <span>
                    <strong>Top Quality Factory Price</strong>
                  </span>
                  <p>
                    We have a quality control department to verify each product
                    at different phases, from the procurement of parts to
                    finished products
                  </p>
                </div>
              </div>
            </div>
            <div className="choose-us-content">
              <div className="choose-us-content">
                <div className="border-container">
                  {" "}
                  <div className="choose-us-image-container">
                    <img
                      src={assets.choose3}
                      alt=""
                      className="choose-us-img"
                    />
                  </div>
                </div>
                <div className="p-span-holder">
                  {" "}
                  <span>
                    <strong>Top Quality Factory Price</strong>
                  </span>
                  <p>
                    We have a quality control department to verify each product
                    at different phases, from the procurement of parts to
                    finished products
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="choose-right">
            <div className="choose-us-content">
              <div className="border-container">
                {" "}
                <div className="choose-us-image-container">
                  <img src={assets.choose4} alt="" className="choose-us-img" />
                </div>
              </div>
              <div className="p-span-holder">
                {" "}
                <span>
                  <strong>Top Quality Factory Price</strong>
                </span>
                <p>
                  We have a quality control department to verify each product at
                  different phases, from the procurement of parts to finished
                  products
                </p>
              </div>
            </div>
            <div className="choose-us-content">
              <div className="border-container">
                {" "}
                <div className="choose-us-image-container">
                  <img src={assets.choose5} alt="" className="choose-us-img" />
                </div>
              </div>
              <div className="p-span-holder">
                {" "}
                <span>
                  <strong>Top Quality Factory Price</strong>
                </span>
                <p>
                  We have a quality control department to verify each product at
                  different phases, from the procurement of parts to finished
                  products
                </p>
              </div>
            </div>
            <div className="choose-us-content">
              <div className="border-container">
                {" "}
                <div className="choose-us-image-container">
                  <img src={assets.choose6} alt="" className="choose-us-img" />
                </div>
              </div>
              <div className="p-span-holder">
                {" "}
                <span>
                  <strong>Top Quality Factory Price</strong>
                </span>
                <p>
                  We have a quality control department to verify each product at
                  different phases, from the procurement of parts to finished
                  products
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/contact-us">
        {" "}
        <div className="about-us-contact">
          <h2>Discover excellence with TRESVINQ. Contact us today!</h2>
        </div>
      </Link>
      <OurValues />
      <OurVision />
    </div>
  );
};

export default Aboutus;
