import React from "react";
import './header.css';


const Navbar = () => {

  return ( 
    <nav className="navbar navbar-expand-lg" id="header">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Simple Header
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="collapse navbar-collapse justify-content-end d-flex"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <a
            className="text-white btn btn-primary nav-link active"
            aria-current="page"
            href="#"
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-primary" href="#">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-primary" href="#">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-primary" href="#">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-primary" href="#">
            About
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
};

export default Navbar;
