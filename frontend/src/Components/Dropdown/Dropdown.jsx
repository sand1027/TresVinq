import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Dropdown.css";

const Dropdown = () => {
  const [showOptions, setShowOptions] = useState(null);
  const [showTypes, setShowTypes] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const categories = [
    {
      name: <Link to="/puf-core">Category 1</Link>,
      options: [
        {
          name: <Link to="/category/1/option/1">Option 1-1</Link>,
          types: [
            <Link to="/category/1/option/1/type/1">Type A</Link>,
            <Link to="/category/1/option/1/type/2">Type B</Link>,
            <Link to="/category/1/option/1/type/3">Type C</Link>,
          ],
        },
        {
          name: <Link to="/category/1/option/2">Option 1-2</Link>,
          types: [
            <Link to="/category/1/option/2/type/1">Type A</Link>,
            <Link to="/category/1/option/2/type/2">Type B</Link>,
            <Link to="/category/1/option/2/type/3">Type C</Link>,
          ],
        },
        {
          name: <Link to="/category/1/option/3">Option 1-3</Link>,
          types: [
            <Link to="/category/1/option/3/type/1">Type A</Link>,
            <Link to="/category/1/option/3/type/2">Type B</Link>,
            <Link to="/category/1/option/3/type/3">Type C</Link>,
          ],
        },
      ],
    },
    {
      name: <Link to="/cros-bench1">Category 2</Link>,
      options: [
        {
          name: <Link to="/category/2/option/1">Option 2-1</Link>,
          types: [
            <Link to="/category/2/option/1/type/1">Type A</Link>,
            <Link to="/category/2/option/1/type/2">Type B</Link>,
            <Link to="/category/2/option/1/type/3">Type C</Link>,
          ],
        },
        {
          name: <Link to="/category/2/option/2">Option 2-2</Link>,
          types: [
            <Link to="/category/2/option/2/type/1">Type A</Link>,
            <Link to="/category/2/option/2/type/2">Type B</Link>,
            <Link to="/category/2/option/2/type/3">Type C</Link>,
          ],
        },
        {
          name: <Link to="/category/2/option/3">Option 2-3</Link>,
          types: [
            <Link to="/category/2/option/3/type/1">Type A</Link>,
            <Link to="/category/2/option/3/type/2">Type B</Link>,
            <Link to="/category/2/option/3/type/3">Type C</Link>,
          ],
        },
      ],
    },
    {
      name: <Link to="/category/3">Category 3</Link>,
      options: [
        {
          name: <Link to="/category/3/option/1">Option 3-1</Link>,
          types: [
            <Link to="/category/3/option/1/type/1">Type A</Link>,
            <Link to="/category/3/option/1/type/2">Type B</Link>,
            <Link to="/category/3/option/1/type/3">Type C</Link>,
          ],
        },
        {
          name: <Link to="/category/3/option/2">Option 3-2</Link>,
          types: [
            <Link to="/category/3/option/2/type/1">Type A</Link>,
            <Link to="/category/3/option/2/type/2">Type B</Link>,
            <Link to="/category/3/option/2/type/3">Type C</Link>,
          ],
        },
        {
          name: <Link to="/category/3/option/3">Option 3-3</Link>,
          types: [
            <Link to="/category/3/option/3/type/1">Type A</Link>,
            <Link to="/category/3/option/3/type/2">Type B</Link>,
            <Link to="/category/3/option/3/type/3">Type C</Link>,
          ],
        },
      ],
    },
  ];

  return (
    <div className="dropdown-container" data-aos="fade-in">
      <div className="dropdown">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category"
            onMouseEnter={() => setShowOptions(index)}
            onMouseLeave={() => {
              setShowOptions(null);
              setShowTypes(null);
            }}
            data-aos="fade-up"
          >
            {category.name}
            {showOptions === index && (
              <div className="options" data-aos="fade-right">
                {category.options.map((option, optIndex) => (
                  <div
                    key={optIndex}
                    className="option"
                    onMouseEnter={() => setShowTypes(optIndex)}
                    onMouseLeave={() => setShowTypes(null)}
                    data-aos="fade-up"
                  >
                    {option.name}
                    {showTypes === optIndex && (
                      <div className="types" data-aos="fade-left">
                        {option.types.map((type, typeIndex) => (
                          <div key={typeIndex} className="type">
                            {type}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
