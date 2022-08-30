import React, { Fragment } from "react";
import Logo from "../../../images/logo.png";
import Soundbar from "../Soundbar";
import "./Header.css";
// import { HashLink as Link } from "react-router-hash-link";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <Fragment>
      <div class="navbar">
        <div class="menu">
          <a href="https://cosmologyclub.netlify.app/" target="_blank">
            <img class="image" src={Logo} alt="" />
          </a>
          <ul class="subnav s1" id="primary">
            <li>
              <Soundbar className="soundbar" />
            </li>
          </ul>
          <ul class="subnav s1" id="primary">
            <li>
              <Link  className="link"
                to="about"
                spy={true}
                smooth={true}
                duration={1500}
                offset={-75}
              >
                ABOUT
              </Link>
            </li>
          </ul>
          <ul class="subnav s2" id="primary">
            <li>
              <Link className="link"
                to="events"
                spy={true}
                smooth={true}
                duration={2000}
                offset={-62}
              >
                EVENTS
              </Link>
            </li>
          </ul>
          <ul class="subnav s4" id="primary">
            <li>
              <Link className="link"
                to="sponsors"
                spy={true}
                smooth={true}
                duration={2000}
                offset={50}
              >
                SPONSORS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
