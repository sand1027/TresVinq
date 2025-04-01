import "./Contact.css";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    phone: "",
    email: "",
    message: "",
  });
  const [notification, setNotification] = useState("");
  const [notificationType, setNotificationType] = useState("");

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!formData.firstname || !formData.email || !formData.message) {
      setNotification("All fields are required");
      setNotificationType("error");
      setTimeout(() => setNotification(""), 3000);
      return;
    }

    try {
      await axios.post("http://localhost:5000/send-email", formData);
      setFormData({ firstname: "", phone: "", email: "", message: "" });
      setNotification("Email sent successfully!");
      setNotificationType("success");
      setTimeout(() => setNotification(""), 3000);
    } catch (error) {
      setNotification("Error sending email, please try again.");
      setNotificationType("error");
      setTimeout(() => setNotification(""), 3000);
    }
  };

  return (
    <div className="contact-us">
      <div className="contact-us-header">
        <div className="contact-us-header-container">
          <div className="breadcrumb">
            <span>Home</span>
            <span className="breadcrumb-arrow"> &gt;&gt; </span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      <div className="contact-us-heading">
        <h1 className="contact-us-heading-h1">Contact Us</h1>
      </div>

      <div className="contact-us-container">
        <div className="contact-us-form">
          <div className="contact-us-right">
            <div className="contactus-content-container">
              <p>
                We're happy to answer questions or help you with returns. Please
                reach out to us for any queries.
              </p>
              <div className="contact-us-locators">
                <h2>Office Address</h2>
                <a
                  href="https://www.google.com/maps"
                  target="blank"
                  className="office-a"
                >
                  No. 7 & 8, PM Complex, Sarjapura Main Road, Attibele,
                  Bengaluru - 562107
                </a>
              </div>
              <div className="contact-us-locators">
                <h2>Call Us</h2>
                <a href="tel:+919445331669">9445331669</a>
              </div>
              <div className="contact-us-locators">
                <h2>Email</h2>
                <a href="mailto:contactus@tresengg.com">
                  contactus@tresengg.com
                </a>
              </div>
              <div className="contact-us-locators">
                <h2>Web</h2>
                <a href="https://www.tresengg.com/">www.tresengg.com</a>
              </div>
            </div>
          </div>

          <div className="contact-us-left">
            <div className="contact-us-form-container">
              <p>
                We're happy to answer questions or help you with returns. Please
                fill out the form below.
              </p>
              <form
                onSubmit={onSubmitHandler}
                className="contact-us-bottom-form"
              >
                <div className="contact-us-email">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    type="text"
                    onChange={onChangeHandler}
                    value={formData.firstname}
                    name="firstname"
                  />
                </div>
                <div className="contact-us-email">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    onChange={onChangeHandler}
                    value={formData.email}
                    name="email"
                  />
                </div>
                <div className="contact-us-phone">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="number"
                    onChange={onChangeHandler}
                    value={formData.phone}
                    name="phone"
                  />
                </div>
                <div className="contact-us-message">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    onChange={onChangeHandler}
                    value={formData.message}
                    rows={6}
                  ></textarea>
                </div>
                <button type="submit" className="nav-top-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {notification && (
        <div className={`notification ${notificationType}`}>
          <p>{notification}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
