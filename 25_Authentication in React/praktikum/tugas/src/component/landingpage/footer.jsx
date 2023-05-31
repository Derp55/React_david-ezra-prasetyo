import React from "react";
import './footer.css';


const Footer = () => {

  return ( 
<footer>
  <div
    className="container-fluid d-flex justify-content-center"
    id="footer-top"
  >
    <div className="row">
      <div className="col">
        <h3 className="ps-5 mt-5">Join Our Newspaper</h3>
        <p>
          Tamen quem nulla quae legam multos aute sint culpa legam noster magna
        </p>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="...."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span>
            <input
              className="btn btn-primary"
              type="submit"
              defaultValue="Subscribe"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
  <div className="container" id="footer-mid">
    <div className="row">
      <div className="col mt-4">
        <h4>Arsha</h4>
        <p>A108 Adam Street</p>
        <br />
        <p>New York, NY 535022</p>
        <br />
        <p>United States</p>
        <br />
        <br />
        <p>
          <strong>Phone:</strong>+1 5589 55488 55
        </p>
        <br />
        <p>
          <strong>Email:</strong> info@example.com
        </p>
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
          <p>
            Cras fermentum odio eu feugiat lide par <br /> naso tierra videa
            magna derita valies
          </p>
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
    <p className="mt-3">©Copyright Arsha. All Rights Reserved</p>
    <p className="mt-3">Designed by BootstrapMade</p>
  </div>
</footer>
  )
};

export default Footer;