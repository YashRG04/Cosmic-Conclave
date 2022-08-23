import React, { Fragment } from "react";

import "./EventCard.css";
const EventCard = (props) => {
  return (
    <Fragment>
      <div class="infoContainer">
        <div class="infoCard currentEvent">
          <div class="pictureDiv currDiv">
            <img
              class="picture currentimage"
              src={props.img}
              alt="Astra Lens"
            />
          </div>
          <div class="content">
            <div class="head">
              <div class="title">{props.title}</div>
            </div>

            <div class="info">
              {props.info}
            </div>
            <a href={props.link} className="EventButton">
              RuleBook
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EventCard;
