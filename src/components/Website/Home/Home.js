import React, { Fragment, useRef } from "react";

import Footer from "../../Layout/Footer/Footer";
import Header from "../../Layout/Header/Header";
import MetaData from "../../Layout/MetaData";
import About from "../About/About";
import Events from "../Events/Events";
import Sponsors from "../Sponsors/Sponsors";
import Calendar from "./Calendar";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";
import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <MetaData title="Cosmic Conclave 3.0"></MetaData>
      <Header />
      <div className="MainConatiner" id="top">
        <div className="HomeContainer" id="home">
          <div className="starBackground">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
          </div>
          <div id="title">
            <span>COSMIC CONCLAVE 3.0</span>
            <br />
            <span className="titleName">COSMOLOGY CLUB X DEPTH</span>
          </div>
          <div className="Calendar__">
            <Calendar />
          </div>
          <div className="button">
            <a className="RegisterButton" href="#" target="_blank">
              Register
            </a>
          </div>
        </div>
        <div className="AboutContainer">
          <About id="#about" />
        </div>
        <div className="EventsContainer">
          <Events id="#events" />
        </div>
        <div className="SponsorsContainer">
          <Sponsors id="#sponsors" />
        </div>
      </div>

      <Link to="top" spy={true} smooth={true} duration={2000}>
        <BsFillArrowUpCircleFill
          size={60}
          fill="aliceblue"
          className="scrollTop"
        />
      </Link>

      <Footer />
    </Fragment>
  );
};

export default Home;
