import React, { Fragment } from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <Fragment>
      <div id="sponsors" className="sponsor">
        <div className="sponsorTitle">
          <div className="Ftitle">
            <span>XYZ COMPANY</span>
          </div>

          <img
            className="sponsorLogo"
            src="https://res.cloudinary.com/yashrg04/image/upload/v1661083276/COSMIC%20CONCLAVE/astraLens_khagbq.jpg"
            alt="AstraLens"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
