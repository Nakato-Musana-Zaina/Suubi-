
import React from "react";
import dashboardImage from "../images/dashboard.jpeg";
// import androidAppImage from './images/android-app.jpg';
// import videoFile from './videos/video.mp4';
import "./product.css";

const Product = () => {
  return (
    <div className="product-container">
      <h1 className="product-heading">Products</h1>
      <video controls className="video">
        {/* <source src={videoFile} type="video/mp4" /> */}
      </video>

      <div className="product-section">
        <div className="product-card">
          <h3 className="product-card-heading">Dashboard</h3>
          <div className="product-card-content">
            <img
              src={dashboardImage}
              alt="Dashboard"
              className="product-card-image"
            />
            <p className="product-card-description">
              We have Sacco tools which will enable your Sacco to{" "}
              <b>APPROVE, TRACK and View Sacco ANALYTICS</b>.
            </p>
            
          </div>
          <h2>Features</h2>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
        </div>

        <div className="product-card">
          <h3 className="product-card-heading">Android App</h3>
          <div className="product-card-content">
            {/* <img src={androidAppImage} alt="Android App" className="product-card-image" /> */}
            <div className="product-card-description-container">
              <p className="product-card-description">
                We have member tools which will enable your Sacco members to
                SAVE, BORROW and REPAY through their mobile phones.
              </p>
              <h2>Features</h2>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <button className="product-card-button"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
