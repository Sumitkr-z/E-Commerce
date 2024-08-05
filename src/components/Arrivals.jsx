import React from 'react';
import img1 from "../assets/blue_headphones.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "../styles/NewArrivals.css"

const Arrivals = () => {
  return (
    <>
      <div className="container gx-0 Arrivals">
        <div className="row gx-0 align-items-center Arrivals_main">
          <div className="col-4">
            <div className="Arrivals_col1 text-center">
              <img src={img1} alt="Arrival" className="img-fluid" />
            </div>
          </div>
          <div className="col-8">
            <div className="Arrivals_col2">
              <p className="Product_name">HeadPhones</p>
              <div className="icons py-2">
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
                <FontAwesomeIcon icon={faStar} className="star" />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="Product_price mb-0">$40</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Arrivals;
