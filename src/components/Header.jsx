import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../assets/logo1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const [scrolled, setScrolled] = useState(false);

const HandleScroll = () => {
    const offsets = window.scrollY;
    if (offsets > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }
useEffect(()=>{
window.addEventListener("scroll", HandleScroll);
return () => {
  window.removeEventListener("scroll", HandleScroll);
};
},[]);

  return (
    <>
      <nav className={`navbar navbar-expand-lg nav_sec1 ${scrolled ?"sticky_nav1":""}`}>
        <div className="container gx-0">
          <NavLink to="/">
            <img src={logo1} alt="website logo" className="logo"/>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-lg-0 nav_ul">
              <li className="nav_li">
               <NavLink to="/"> Home </NavLink>
              </li>
              <li className="nav_li">
                 <NavLink to="/about">About</NavLink> 
              </li>
              <li className="nav_li">
                 <NavLink to="/products">Products</NavLink> 
              </li>
              <li className="nav_li">
                 <NavLink to="/contact">Contact Us</NavLink> 
              </li>
            </ul>
            <form className="d-flex" role="search">
              <NavLink to="/search" className="btn btn-outline-success">
                <FontAwesomeIcon icon={faSearch} />
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-success ms-2">
                <FontAwesomeIcon icon={faShoppingCart} />
              </NavLink>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
