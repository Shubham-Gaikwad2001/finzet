import React from "react";

import HomeLoan from "../images/homeLoan.png";
import BalanceTransfer from "../images/BT.png";
import LoanAgainstProperty from "../images/LAP.png";

function Cards() {
  return (
    <div>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {/* ...................BANNER1..................... */}
            <div className="col">
              <div className="card shadow">
                <img
                  src={HomeLoan}
                  className="bd-placeholder-img card-img-top img-fluid"
                  width="100%"
                  height="300"
                  alt="Home loan"
                />
                {/* <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" /> */}

                <div className="card-body col text-center ">
                  <p className="card-text">Home Loan</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ...................BANNER2..................... */}
            <div className="col">
              <div className="card shadow">
                <img
                  src={BalanceTransfer}
                  className="bd-placeholder-img card-img-top img-fluid"
                  width="100%"
                  height="300"
                  alt="Balance Transfer"
                />
                {/* <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" /> */}

                <div className="card-body col text-center ">
                  <p className="card-text">Balance Transfer</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ...................BANNER3..................... */}

            <div className="col">
              <div className="card shadow">
                <img
                  src={LoanAgainstProperty}
                  className="bd-placeholder-img card-img-top img-fluid"
                  width="100%"
                  height="300"
                  alt="Loan Against Property"
                />
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />

                <div className="card-body col text-center ">
                  <p className="card-text">Loan Against Property</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* .......................................... */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
