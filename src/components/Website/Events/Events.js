import React, { Fragment } from "react";
import EventCard from "./EventCard";
import "./Events.css";
import { Data } from "../../../data/EventData";
const Events = () => {
  return (
    <Fragment>
      <div id="events" className="Events">
        <div className="EventsContainer">
          <div className="EventTitle">
            <span>EVENTS</span>
          </div>
          <div className="eventCard">
            {Data.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                img={event.img}
                register={event.register}
                rulebook={event.rulebook}
                info={event.info}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Events;
