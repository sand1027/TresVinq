import { useState, useRef, useEffect } from "react";
import { FaComment, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import "./Message.css";

const MessageComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const messageRef = useRef(null);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = (event) => {
    if (messageRef.current && !messageRef.current.contains(event.target)) {
      setIsPopupOpen(false);
    }
  };

  const initiatePhoneCall = () => {
    window.location.href = "tel:+919999999999";
  };

  useEffect(() => {
    document.addEventListener("mousedown", closePopup);
    return () => {
      document.removeEventListener("mousedown", closePopup);
    };
  }, []);

  return (
    <div className="message-component" ref={messageRef}>
      <div
        className={`message-icon ${isPopupOpen ? "open" : ""}`}
        onClick={togglePopup}
      >
        <FaComment size={24} />
      </div>

      {isPopupOpen && (
        <div className="message-popup active">
          <a
            href="https://wa.me/+919480597535"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={20} /> WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/company/shairozconsultancy/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
        </div>
      )}
    </div>
  );
};

export default MessageComponent;
