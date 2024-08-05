import React from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../assets/logo1.jpg";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container gx-0">
        <div className="row gx-0">
          <div className="col-md-4">
            <div className="footer_col1">
              <img src={logo1} alt="Logo" className="logo1" />
            </div>
            <div className="ft_icons pt-md-2 pd-md-4">
              <FontAwesomeIcon icon={faFacebook} className="Brand_icon" />
              <FontAwesomeIcon icon={faInstagram} className="Brand_icon"/>
              <FontAwesomeIcon icon={faTwitter} className="Brand_icon"/>
              <FontAwesomeIcon icon={faLinkedin} className="Brand_icon" />
            </div>
            <p>© 2024 Copyright. All Rights Reserved</p>
          </div>

          <div className="col-md-3">
            <div className="footer_col2">
              <h5 className="ft_h5">Get to Know Us</h5>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Products</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact US</NavLink>
                </li>
                <li>
                  <NavLink to="/faq">FAQ</NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3">
            <div className="footer_col2">
              <h5 className="ft_h5">More Information</h5>
              <ul>
                <li>
                  <NavLink to="/privacy">Privacy Policy</NavLink>
                </li>
                <li>
                  <NavLink to="/terms">Terms of Service</NavLink>
                </li>
                <li>
                  <NavLink to="/careers">Careers</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/support">Support</NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-2">
            <div className="footer_col3">
              <h5 className="ft_h5">Contact Us</h5>
              <p><FontAwesomeIcon icon={faPhone} className="icon" /> Phone Number </p>
              <p><FontAwesomeIcon icon={faEnvelope} className="icon" /> Email Here </p>
              <p><FontAwesomeIcon icon={faLocationDot} className="icon" /> Location </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
