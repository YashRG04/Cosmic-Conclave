import React, { Fragment } from "react";
import Footer from "../../Layout/Footer/Footer";
import Header from "../../Layout/Header/Header";
import MetaData from "../../Layout/MetaData";
import About from "../About/About";
import Events from "../Events/Events";

import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <MetaData title="Cosmic Conclave 3.0"></MetaData>
      <Header />
      <div className="MainConatiner">
        <div className="HomeContainer">
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
        </div>
        <div className="AboutContainer">
          <About id="#about" />
        </div>
        <div className="EventsContainer">
          <Events id="#events" />
        </div>
        <div className="SponsorsContainer">
          <Footer id="#sponsors" />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
