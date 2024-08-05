import React from 'react'
import "../styles/About.css"
import OrderMethod from './OrderMethod';

const About = () => {
  return (
    <> <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <h1 className="display-4">About Us</h1>
            <p className="lead">
              Welcome to our company. We are committed to delivering the best services and solutions to our clients.
            </p>
            <p>
              Our team of experts is dedicated to providing top-notch service and support. We pride ourselves on our professionalism and commitment to excellence.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas saepe totam voluptate ab veniam animi deserunt, rerum sapiente sunt natus accusamus beatae quod nisi laboriosam iusto minima unde ea reprehenderit tenetur sequi in? Tempore amet itaque ipsum, beatae laborum iste ad in hic pariatur assumenda dignissimos magni, voluptatibus quibusdam fuga incidunt reiciendis? Ratione doloribus error ut consectetur, amet quae quo.
            </p>
          </div>
          <div className="col-lg-6 mb-4">
            <img src="https://via.placeholder.com/500" alt="About Us" className="img-fluid rounded shadow mb-5" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card h-100 mt-3">
              <div className="card-body">
                <h5 className="card-title">Our Mission</h5>
                <p className="card-text">
                  Our mission is to deliver high-quality solutions that meet the needs of our clients and help them achieve their business goals.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100 mt-3">
              <div className="card-body">
                <h5 className="card-title">Our Vision</h5>
                <p className="card-text">
                  Our vision is to be a leader in our industry, recognized for our innovative solutions and exceptional customer service.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100 mt-3">
              <div className="card-body">
                <h5 className="card-title">Our Values</h5>
                <p className="card-text">
                  We value integrity, excellence, and teamwork. These values guide everything we do and help us build strong relationships with our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OrderMethod/>
      </>
  )
}

export default About ;