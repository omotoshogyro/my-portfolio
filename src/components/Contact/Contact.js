import React, { useEffect } from "react";
import "./Contact.css";

function Contact({ menu, changeMenu }) {
  useEffect(() => {
    changeMenu(2);
  }, [changeMenu]);

  return (
    <div className="contact">
      <form name="contact" method="POST"  action="/contact/?success=true" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
        <div className="input__form">
          <label htmlFor="name">
            <span>Name*</span>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </label>
        </div>

        <div className="input__form">
          <label htmlFor="email">
            <span>Email*</span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </label>
        </div>

        <div className="input__form">
          <label>
            <span>Your Message*</span>
            <textarea
              type="message"
              name="name"
              placeholder="Leave a Message..."
              required
            />
          </label>
        </div>

        <button className="contact__btn" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
