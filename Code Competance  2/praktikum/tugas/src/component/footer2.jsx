import React from "react";
import './footer.css';


const Footer2 = () => {

  return ( 
<footer>
<div
    className="container-fluid d-flex justify-content-center"
    id="footer-top"
  >
    <div className="row">
      <div className="col">
        <h3 className="ps-5 mt-5">Join Our Newspaper</h3>
        <p1>
          Tamen quem nulla quae legam multos aute sint culpa legam noster magna
        </p1>
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
</footer>
  )
};

export default Footer2;