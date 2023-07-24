import React from "react";
import Slider1 from "../images/banner1.jpg";
import Slider2 from "../images/banner2.jpg";
import Slider3 from "../images/banner3.jpg";
// import Slider1 from "../images/banner1.jpeg";
// import Slider2 from "../images/banner2.jpeg";
// import Slider3 from "../images/banner3.jpeg";

function Slider() {
  return (
    <div>
      {/* .................slider............... */}
      <div
        id="myCarousel"
        className="carousel slide mb-6"
        data-bs-ride="carousel"
        data-bs-theme="light"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Slider1}
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              alt="banner1"
            />
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />

            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Zero processing fees.</h1>
                <p className="opacity-75">
                  T&C Apply.
                  <br />
                  Product (Home Loan/Balance transfer)
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="/">
                    Apply Now
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Slider2}
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              alt="banner2"
            />
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />

            <div className="container">
              <div className="carousel-caption">
                <h1>Starting rate of interest</h1>
                <p>
                  at 8.60%
                  <br />
                  T&C Apply
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="/">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Slider3}
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              alt="banner3"
            />
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />

            <div className="container">
              <div className="carousel-caption text-end">
                <h1>No EMI Till 36 months.</h1>
                <p>
                  (For only Under construction project) <br />
                  product (Home Loan)
                  <br />
                  T&C
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="/">
                    Apply Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
