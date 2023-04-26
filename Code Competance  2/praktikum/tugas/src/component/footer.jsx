import React from "react";
import './footer.css';


const Footer = () => {

  return ( 
<footer>
  
  <div className="container" id="footer-mid">
    <div className="row">
      <div className="col mt-4">
        <h4>Arsha</h4>
        <p5>A108 Adam Street</p5>
        <br />
        <p5>New York, NY 535022</p5>
        <br />
        <p5>United States</p5>
        <br />
        <br />
        <p5>
          <strong>Phone:</strong>+1 5589 55488 55
        </p5>
        <br />
        <p5>
          <strong>Email:</strong> info@example.com
        </p5>
      </div>
      <div className="col mt-4">
        <h5>Useful Links</h5>
        <ul type="none">
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Terms of service</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      <div className="col mt-4">
        <h5>Our Services</h5>
        <ul type="none">
          <li>Web Design</li>
          <li>Web Development</li>
          <li>Product Management</li>
          <li>Marketing</li>
          <li>Graphic Design</li>
        </ul>
      </div>
      <div className="col mt-4">
        <h5>Our Social Networks</h5>
        <div className="social-links">
          <p4>
            Cras fermentum odio eu feugiat lide par <br /> naso tierra videa
            magna derita valies
          </p4>
          <br />
          <br />
          <button
            type="button"
            className="btn btn-primary text-primary rounded-circle"
          >
            I
          </button>
          <button
            type="button"
            className="btn btn-primary text-primary rounded-circle"
          >
            I
          </button>
          <button
            type="button"
            className="btn btn-primary text-primary rounded-circle"
          >
            I
          </button>
          <button
            type="button"
            className="btn btn-primary text-primary rounded-circle"
          >
            I
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="justify-content-between text-white px-5 " id="footer-bottom">
    <p3 className="mt-3">©Copyright Arsha. All Rights Reserved</p3>
    <p6 className="mt-3">Designed by BootstrapMade</p6>
  </div>
</footer>
  )
};

export default Footer;