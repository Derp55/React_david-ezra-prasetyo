import React from "react";
import './body.css';
import Logo from "../assets/hero-img.png";

const BodyLanding = () => {

  return ( 
<div id="body">
  <div className="container text-white">
    <div className="row">
      <div className="col mt-5  px-5" id="tulisan">
        <h1>
          Better Solutions For Your <br /> Business
        </h1>
        <p>We are team of talented designers making websites with Bootstrap</p>
        <div className="btn1">
          <button type="button" className="btn btn-primary text-white">
            Get Started
          </button>
          <button type="button" className="btn btn-link text-white">
            Watch Video
          </button>
        </div>
      </div>
      <div className="col mt-5">
        <img src={Logo} alt="" />
      </div>
    </div>
  </div>
</div>
  )
};

export default BodyLanding;