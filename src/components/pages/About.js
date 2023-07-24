import React from "react";
// import About1 from "../images/about1.png";
// import About2 from "../images/about2.png";

function Aboutus() {
  return (
    <div>
      <main>
        <div className="container mt-4 py-4">
          <div className="p-5 mb-4 bg-body-tertiary rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">FIINZET</h1>
              <p className="col-md-8 fs-4">
                FIINZET, a leading startup in the financial industry, is your
                go-to destination for a wide range of financial solutions. Our
                comprehensive services include home loans, existing home loan
                transfers, and loans against property. We understand the
                importance of transparency in the lending process, and that's
                why we place it at the heart of everything we do.Using a series
                of utilities, you can create this jumbotron, just like the one
                in previous versions of Bootstrap. Check out the examples below
                for how you can remix and restyle it to your liking.
              </p>
              <button className="btn btn-primary btn-lg" type="button">
                Example button
              </button>
              {/* <img
                src={About1}
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="300"
                alt="About1"
              /> */}
            </div>
          </div>

          <div className="row align-items-md-stretch">
            <div className="col-md-6">
              <div className="h-100 p-5 text-bg-dark rounded-3">
                <h2>Change the background</h2>
                <p>
                  At FIINZET, we believe that every consumer deserves to have
                  complete clarity and understanding when it comes to their
                  financial decisions. Our commitment to transparency is
                  unwavering, and we ensure that our customers are well-informed
                  at every step of the loan process. To provide top-notch
                  assistance and guidance, we have a team of loan expert
                  officers who are dedicated to understanding your needs and
                  finding the best financial solution for you.
                </p>
                <button className="btn btn-outline-light" type="button">
                  Example button
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                <h2>Add borders</h2>
                <p>
                  As part of our effort to offer the most comprehensive options,
                  we have established strong corporate tie-ups with reputable
                  banks and non-banking financial companies (NBFCs). This
                  collaboration allows us to bring you a diverse range of loan
                  options and competitive interest rates. With FIINZET, you can
                  be confident that you'll receive the best possible financial
                  support to fulfill your dreams of homeownership or meet your
                  immediate financial needs with a loan against your property.
                  Experience the difference that transparency and expertise
                  make. Choose FIINZET as your trusted partner for home loans,
                  existing home loan transfers, and loans against property. Our
                  dedicated team is here to ensure that you make informed
                  decisions and navigate the financial landscape with ease.
                </p>
                <button className="btn btn-outline-secondary" type="button">
                  Example button
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Aboutus;
