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
              <a
                href="https://www.aicte-india.org/"
                className="imageLink i1"
                target="_blank"
              >
                <img
                  className="sponsorLogo"
                  src="https://res.cloudinary.com/yashrg04/image/upload/v1662471681/COSMIC%20CONCLAVE/aicte_i6yx1b.png"
                  alt="AICTE"
                />
              </a>
              <a
                href="http://dtu.ac.in/"
                className="imageLink i1"
                target="_blank"
              >
                <img
                  className="sponsorLogo"
                  src="https://res.cloudinary.com/yashrg04/image/upload/v1662471680/COSMIC%20CONCLAVE/dtu_kr7lg1.png"
                  alt="DTU"
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
