import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const contactInfo = [
    {
      branch: "Factory Address : ",
      type: "address",
      value:
        "Plot.No 150, SIDCO Industrial Estate, Billanakuppam Post, Krishnagiri-635115. Tamil Nadu.",
      link: "https://maps.app.goo.gl/8hPuCrMJELmGi6eX9",
    },
    {
      branch: "Banglore Office : ",
      type: "address",
      value:
        "Shop.No 7 & 8, PM Complex, Sarjapura Main Road, Attibele, Banglore-562107. Karnataka.",
      link: "https://maps.app.goo.gl/mh3yy4ueovixysPu8",
    },
    { type: "phone", value: "+91 7259950955", link: "tel:+917259950955" },
    {
      type: "email",
      value: "contactus@tresvinq.com",
      link: "mailto:contactus@tresvinq.com",
    },
  ];

  const leftLinks = [
    { title: "About Us", href: "/about-us" },
    { title: "Contact", href: "/contact-us" },
  ];

  const products = [
    { title: "Modular Clean Room", href: "/mcl" },
    { title: "Clean Room Furnitures", href: "/crf" },
    { title: "Pass Boxes", href: "/passbox" },
    { title: "Hvac Ducts", href: "/ducts" },
    { title: "Cable Trays", href: "/cable-trays" },
    { title: "Electrical Enclosures", href: "/enclousers" },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-section">
          <div className="company-logo">
            <img src="logo.png" alt="TresvinQ Logo" className="logo" />
          </div>
          <h3 className="company-title">TresvinQ</h3>
          <p>
            We are dedicated to providing the best service to our customers.
          </p>
          <div className="contact-info">
            {contactInfo.map((item, index) => (
              <p key={index}>
                <a
                  href={item.link}
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>{item.branch}</h4>

                  {item.value}
                </a>
              </p>
            ))}
          </div>
        </div>

        {/* Left Links (About & Contact) */}
        <div className="footer-section left-links">
          <h3>Quick Links</h3>
          <ul className="quick-links">
            {leftLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>

          {/* Social Media */}
          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/sandeep-v-a6aaa529b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Products (Right Side) */}
        <div className="footer-section products-section">
          <Link to="/product">
            <h3>Products</h3>
          </Link>
          <ul className="products-list">
            {products.map((product, index) => (
              <li key={index}>
                <a href={product.href}>{product.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} TresvinQ. All rights reserved.</p>
        <p className="developer-credit">
          Designed & Developed by{" "}
          <a
            href="https://linkedin.com/in/your-profile"
            className="developer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sandeep
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
