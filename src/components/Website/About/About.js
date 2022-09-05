import React from "react";
import "./About.css";
const About = () => {
  return (
    <div id="about" className="About">
      <div className="aboutCard">
        <h1 className="aboutTitle">
          <span>ABOUT</span>
        </h1>
        <div className="aboutCont">
          <div className="aboutPic">
            <img
              className="timeline"
              src="https://res.cloudinary.com/yashrg04/image/upload/v1662391953/COSMIC%20CONCLAVE/timelinefinal_v5bml0.jpg"
            ></img>
          </div>
          <div className="aboutText">
            Hola the astrophilics “When I first looked back at the earth ,
            standing on the moon , I cried 🥺” With this feeling instilled in
            our mind , the Cosmology Club and DEPTH is coming up with its
            exciting activities in the arena of cosmic conclave 3.0 Cosmic
            Conclave is now bigger and better than ever with 5 gripping events
            and competitions waiting for you to knock on their door. Stay tuned
            with the amaze of cosmic conclave 3.0 🌟🌟
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
