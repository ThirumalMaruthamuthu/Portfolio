import React, { useState } from "react";
import "../styles/contact.css";
import contactformFooter from "./../assets/footer.jpg";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:thiruyavan97@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        {/* Left Section */}
        <div className="contact-left">
          <h1>Contact Me</h1>
          <p><strong>Phone:</strong> +91 9787405705</p>
          <p><strong>Email:</strong> thiruyavan97@gmail.com</p>
          <p><strong>Region:</strong> Tamilnadu, India</p>
        </div>

        {/* Right Section */}
        <div className="contact-right">
          <h2>Message Me</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Footer Image */}
      <div className="contact-footer">
        <img src={contactformFooter} alt="footer skyline" />
      </div>
    </div>
  );
};

export default Contact;
