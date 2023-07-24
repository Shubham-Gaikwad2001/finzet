import React from "react";
import HomeLoan from "../images/homeLoan.png";
import BalanceTransfer from "../images/BT.png";
import LoanAgainstProperty from "../images/LAP.png";

function Product() {
  return (
    <div className="my-3 pt-2">
      <div className="container marketing my-5 ">
        {/* <hr className="featurette-divider" /> */}

        <div className="row featurette">
          <div className="col-md-7 mt-lg-5">
            <h2 className="featurette-heading fw-normal lh-1">
              Home Loan.{" "}
              <span className="text-body-secondary">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              "Apply for a home loan hassle-free with zero processing fees and
              enjoy a free consultation with our expert team!"
            </p>
          </div>
          <div className="col-md-5">
            <img
              src={HomeLoan}
              className="bd-placeholder-img card-img-top img-fluid"
              width="400"
              height="400"
              alt="Home loan"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2 mt-lg-5">
            <h2 className="featurette-heading fw-normal lh-1">
              Balance Transfer{" "}
              <span className="text-body-secondary">See for yourself.</span>
            </h2>
            <p className="lead">
              "Save money and enjoy better terms by transferring your existing
              home loan to our trusted lending partners today!"
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              src={BalanceTransfer}
              className="bd-placeholder-img card-img-top img-fluid"
              width="400"
              height="400"
              alt="Balance Transfer"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 mt-lg-5">
            <h2 className="featurette-heading fw-normal lh-1">
              Loan Against Property.{" "}
              <span className="text-body-secondary">Check Now</span>
            </h2>
            <p className="lead">
              "Enjoy the convenience of doorstep service for all your home loan
              needs with our expert team at your service!"
            </p>
          </div>
          <div className="col-md-5">
            <img
              src={LoanAgainstProperty}
              className="bd-placeholder-img card-img-top img-fluid"
              width="400"
              height="400"
              alt="Loan Against Property"
            />
          </div>
        </div>

        {/* <hr className="featurette-divider" /> */}
      </div>
    </div>
  );
}

export default Product;
