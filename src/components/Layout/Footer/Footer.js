import React, { Fragment } from "react";
import "./Footer.css";
import { ImLocation2 } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
const Footer = () => {
  return (
    <Fragment>
      <hr></hr>
      <div className="Footer">
        <div className="FooterLeft">
          <h1 className="FooterTitle T1">Contact</h1>
          <ul className="Contact">
            <li className="list">
              <ImLocation2 class="cicon" color="grey" size={30} />

              <a
                href="https://goo.gl/maps/qoBcNFrFWUFtrtKB7"
                target="_blank"
                className="content"
              >
                Delhi Technological University, Rohini, Delhi, 110042
              </a>
            </li>
            <li className="list">
              <BsFillTelephoneFill class="cicon" color="grey" size={30} />
              <a href="tel:9319032773" target="_blank" className="content">
                Phone: (Harshit) 9319032773
              </a>
            </li>
            <li className="list">
              <BsFillTelephoneFill class="cicon" color="grey" size={30} />
              <a href="tel:9953705331" target="_blank" className="content">
                Phone: (Katyani) 9310524085
              </a>
            </li>
            <li className="list">
              <SiGmail class="cicon" color="grey" size={30} />
              <a
                href="mailto:cosmosdtu@dtu.ac.in"
                target="_blank"
                className="content"
              >
                cosmosdtu@dtu.ac.in
              </a>
            </li>
          </ul>
        </div>
        <div className="FooterRight">
          <h1 className="FooterTitle T2">Let's Connect</h1>
          <ul className="Social">
            <a
              href="https://www.instagram.com/cosmologyclub.dtu/"
              className="list1"
              target="_blank"
            >
              <BsInstagram color="grey" size={30} />
            </a>
            <a
              href="https://discord.gg/wTFbQ6Az"
              className="list1"
              target="_blank"
            >
              <FaDiscord color="grey" size={30} />
            </a>
            <a
              href="https://www.facebook.com/cosmologyclub.dtu/"
              className="list1"
              target="_blank"
            >
              <BsFacebook color="grey" size={30} />
            </a>
            <a
              href="https://chat.whatsapp.com/DXLnh8uiLU25kd8igDD0EN"
              className="list1"
              target="_blank"
            >
              <BsWhatsapp color="grey" size={30} />
            </a>
          </ul>
        </div>
      </div>
      <div className="Copyright">
        <p className="CopyrightText">© Web Development Team | Cosmology Club DTU 2022</p>
      </div>
    </Fragment>
  );
};

export default Footer;
