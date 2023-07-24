import React from "react";
import { Link } from "react-router-dom";
import logoFiinzet from "../images/logo.png";
import textFiinzet from "../images/text.png";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-sm navbar-light  fixed-top "
        id="neubar"
      >
        <div className="container">
          <div>
            <a className="navbar-brand" href="/">
              <img
                src={logoFiinzet}
                className="logo"
                alt="Bootstrap"
                width="30"
                height="30"
              />
            </a>
            <a className="navbar-brand" href="/home">
              <img src={textFiinzet} alt="Bootstrap" width="129" height="30" />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link to="/home" className="nav-link " aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" aria-current="page">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link " aria-current="page">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link " aria-current="page">
                  Eligibility
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link " aria-current="page">
                  Contact
                </Link>
              </li>

              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link mx-2 dropdown-toggle"
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Company
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Contact us
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      {/* ...........used navbar................ */}
      {/* 
      <nav className="navbar navbar-expand-md navbar fixed-top navBG">
        <div className="container-fluid">
          <div className="navbar-left">
            <a className="navbar-brand" href="/">
              <img
                src={logoFiinzet}
                className="logo"
                alt="Bootstrap"
                width="30"
                height="30"
              />
            </a>
            <a className="navbar-brand" href="/home">
              <img src={textFiinzet} alt="Bootstrap" width="129" height="30" />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            s
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link active"
                  aria-current="page"
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/product"
                  className="nav-link active"
                  aria-current="page"
                >
                  Product
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/product"
                  className="nav-link active"
                  aria-current="page"
                >
                  Eligibility
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link active"
                  aria-current="page"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </div>
  );
}

export default Navbar;
