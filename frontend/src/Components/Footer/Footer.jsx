import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const contactInfo = [
    {
      type: "address",
      value: "123 Business Street, Suite 100, City, State 12345",
      link: "https://maps.google.com/?q=123+Business+Street+Suite+100+City+State+12345",
    },
    { type: "phone", value: "+1 (555) 123-4567", link: "tel:+15551234567" },
    {
      type: "email",
      value: "contact@company.com",
      link: "mailto:contact@company.com",
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
