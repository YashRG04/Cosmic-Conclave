import React, { Fragment } from "react";
import "./Calendar.css";
const Calendar = () => {
  return (
    <Fragment>
      <div class="container">
        <div class="calendar">
          <div id="js-month" class="calendar__month">
            Sept
          </div>
          <div id="js-day" class="calendar__day">
            13
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Calendar;
