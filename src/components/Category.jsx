import React from 'react';
import img1 from "../assets/Categories/headphones.png";
import img2 from "../assets/Categories/camera.png";
import img3 from "../assets/Categories/laptop.png";
import img4 from "../assets/Categories/phone.png";
import img5 from "../assets/Categories/videogame.png";
import img6 from "../assets/Categories/watch.png";
import "../styles/Category.css"

const Category = () => {
  return (
    <>
    <div className="container gx-0 py-5 my-5 Full_main_category">
      <h2 className='py-3'>Shop by categories</h2>
    <div className="row gx-0 main_category">
      <div className="col-md-2 col-6">
        <div className="home_category text-center">
          <img src={img1} alt="" className="img-fluid" />
          <h5 className="Category_title">Headphones</h5>
        </div>
      </div>
      <div className="col-md-2 col-6">
        <div className="home_category text-center">
          <img src={img2} alt="" className="img-fluid" />
          <h5 className="Category_title">Cameras</h5>
        </div>
      </div>
      <div className="col-md-2 col-6">
        <div className="home_category text-center">
          <img src={img3} alt="" className="img-fluid" />
          <h5 className="Category_title">Laptops</h5>
        </div>
      </div>
      <div className="col-md-2 col-6">
        <div className="home_category text-center">
          <img src={img4} alt="" className="img-fluid" />
          <h5 className="Category_title">Mobiles</h5>
        </div>
      </div>
      <div className="col-md-2 col-6">
        <div className="home_category text-center">
          <img src={img5} alt="" className="img-fluid" />
          <h5 className="Category_title">Videogames</h5>
        </div>
      </div>
      <div className="col-md-2 col-6">
        <div className="home_category text-center">
          <img src={img6} alt="" className="img-fluid" />
          <h5 className="Category_title">Watches</h5>
        </div>
      </div>
    </div>
  </div>
  </>
  );
};

export default Category;