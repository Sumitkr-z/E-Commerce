import React from 'react'
import iphone from "../assets/iphones.png";
import "../styles/NewArrivals.css"
import Arrivals from './Arrivals';

const NewArrivals = () => {
  return (
    <div className="container gx-0 py-5">
      <h2 className='pb-5'> New Arrivals </h2>
      <div className="row ">
        <div className="col-md-6">
          <div className="NewArrival_col1">
            <h3>New Iphone 15 Pro Max</h3>
            <div className="banner_btns pt-3">
              <button className="btn btn-primary">Shop Now </button>
            </div>
            <img src={iphone} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="NewArrival_col2"></div>
          <Arrivals/>
          <Arrivals/>
          <Arrivals/>
          <Arrivals/>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
