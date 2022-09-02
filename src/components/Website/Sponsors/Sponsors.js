import React from "react";
import { Fragment } from "react";
import "./Sponsors.css";
import AICTE from "../../../images/aicte.png";
import DTU from "../../../images/dtu.png";
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
                <img className="sponsorLogo" src={AICTE} alt="AICTE" />
              </a>
              <a
                href="http://dtu.ac.in/"
                className="imageLink i1"
                target="_blank"
              >
                <img className="sponsorLogo" src={DTU} alt="DTU" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sponsors;
