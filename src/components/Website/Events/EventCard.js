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

            <div class="info">{props.info}</div>
            <div className="eventbuttons">
              <a href={props.register} target="_blank" className="EventButton e1">
                Register
              </a>
              <a href={props.rulebook} target="_blank" className="EventButton e2">
                RuleBook
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EventCard;
