import React from "react";
import { Fragment } from "react";
import "./Sponsors.css";
const Sponsors = () => {
  return (
    <Fragment>
      <div id="sponsors" className="sponsor">
        <div className="sponsorTitle">
          <div className="Ftitle">
            <span>SPONSORS</span>
          </div>
          <div className="imagesConatiner">
            <div className="images">
              <a href="#" className="imageLink i1" target="_blank">
                <img
                  className="sponsorLogo"
                  src="https://res.cloudinary.com/yashrg04/image/upload/v1661083276/COSMIC%20CONCLAVE/astraLens_khagbq.jpg"
                  alt="AstraLens"
                />
              </a>
              <a href="#" className="imageLink i2" target="_blank">
                <img
                  className="sponsorLogo"
                  src="https://res.cloudinary.com/yashrg04/image/upload/v1661083276/COSMIC%20CONCLAVE/astraLens_khagbq.jpg"
                  alt="AstraLens"
                />
              </a>
              <a href="#" className="imageLink i3" target="_blank">
                <img
                  className="sponsorLogo"
                  src="https://res.cloudinary.com/yashrg04/image/upload/v1661083276/COSMIC%20CONCLAVE/astraLens_khagbq.jpg"
                  alt="AstraLens"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sponsors;
