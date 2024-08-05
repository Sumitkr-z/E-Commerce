import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <>
      {" "}
      <section className="contact">
        <form className="form2">
          <h2>Contact Form</h2>
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              className="field"
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              className="field"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>
          <div className="input-box">
            <label>Your Message</label>
            <textarea
              className="field"
              placeholder="Enter your message"
              name="message"
              required
            ></textarea>
          </div>
          <button className="button1" type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
};

export default Contact;
