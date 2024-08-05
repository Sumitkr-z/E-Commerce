import React from "react";
import Product from "./Product";
import "../styles/Products.css";
import { NavLink } from 'react-router-dom';
const Products = () => {
  return (
    <>
      <div className="container gx-0 py-5">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="Product_h2 pb-5">Lateset Products</h2>
          <NavLink to="/products" className="btn btn-brimary ms-2 class_btn">
                Browse More
              </NavLink>
        </div>
        <div className="row gx-0">
          <div className="col-md-12">
            <div className="Products_main">
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
