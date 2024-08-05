import React from 'react';
import img from "../assets/mid_headphone.png";
import "../styles/Discount.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Discount = () => {
  return (
    <>
      <h2 className='Dis_1'>Top Discount</h2>
      <div className="container Discount px-5">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="Discount_col1 pt-md-4">
              <h5 className="Main_Lable pb-3">
                <FontAwesomeIcon icon={faStar} /> Weekend Discount
              </h5>
              <h2>Micropack MHP Headphone Pink</h2>
              <p className="py-3">
                Discover optimal well-being through tailored exercises. Achieve
                a healthy body with our expert guidance, personalized routines,
                and transformative fitness solutions.
              </p>
              <div className="banner_btns">
                <button className="btn btn-primary main_btn">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <img src={img} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Discount;
