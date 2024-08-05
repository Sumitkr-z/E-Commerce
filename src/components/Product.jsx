import React from "react";
import { NavLink } from 'react-router-dom';
import img from "../assets/Mouse.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = () => (
  <>
    <div className="Product_main">
      <div className="col">
        <div className="card border-0 h-100">
          <div className="card_head">
            <img src={img} alt="Mouse" className="img-fluid" />
          </div>
          <div className="card-body">
            <p className="Product_name">Gaming Mouse</p>
            <div className="icons py-2">
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
              <FontAwesomeIcon icon={faStar} className="star" />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="Product_price mb-0">$ 40</h4>
              <NavLink to="/cart" className="btn btn-outline-success ms-2">
                <FontAwesomeIcon icon={faShoppingCart} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Product;
