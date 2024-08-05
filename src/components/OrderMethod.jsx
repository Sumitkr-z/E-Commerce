import React from 'react';
import "../styles/OrderMethod.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faLock, faHeadset } from '@fortawesome/free-solid-svg-icons';

const OrderMethod = () => {
  return (
    <div className="container order-method">
      <div className="row">
        <div className="col-md-4 text-center">
          <div className="order-box">
            <FontAwesomeIcon icon={faShippingFast} size="2x" className="icon" />
            <h4>Free Shipping</h4>
            <p>On orders over $50</p>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="order-box">
            <FontAwesomeIcon icon={faLock} size="2x" className="icon" />
            <h4>Secure Payment</h4>
            <p>100% secure payment</p>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="order-box">
            <FontAwesomeIcon icon={faHeadset} size="2x" className="icon" />
            <h4>Support 24/7</h4>
            <p>Always here to help</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMethod;
