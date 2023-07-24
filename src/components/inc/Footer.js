import React from "react";

function Footer() {
  return (
    <div className="position-relative">
      {/* .........used footer....... */}
      <hr className="featurette-divider" />

      <footer className="my-3 pt-3 text-body-secondary text-center text-small position-sticky bottom-0 w-100">
        <p className="mb-1">&copy; @2023 FIINET</p>
        <p>
          All rights reserved
          <br />
          Fiinzet and the Fiinzet.com logo are registered trademarks of Fiinzet
          Captech Pvt Ltd.
        </p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/">Privacy</a>
          </li>
          <li className="list-inline-item">
            <a href="/">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="/">T&C</a>
          </li>
        </ul>
      </footer>

      {/* ........unused footer....... */}

      {/* <footer className="container">
        <p className="float-end">
          <a href="/">Back to top</a>
        </p>
        <p>
          &copy; 2017–2023 FIINET, Inc. &middot; <a href="/">Privacy</a>{" "}
          &middot; <a href="/">Terms</a>
        </p>
      </footer> */}
    </div>
  );
}

export default Footer;
