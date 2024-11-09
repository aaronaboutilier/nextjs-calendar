import {isToday, isPast, isFuture} from "date-fns";
import classNames from "classnames";
import {MyEvent} from "./events";
import React, {useState} from "react";
import Tooltip from "./Tooltip";

interface DayProps {
  day?: number;
  month?: number;
  year?: number;
  events?: MyEvent[];
}

function Day({day, month, year, events}: DayProps) {
  if (day == undefined || year == undefined || month == undefined)
    return <div className="day inactive-day"></div>;

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  const dayDate = new Date(year, month, day);

  // Determine if the date is past, today, or future
  const isDateToday = isToday(dayDate);
  const isDatePast = isPast(dayDate);
  const isDateFuture = isFuture(dayDate);

  const isPayDay =
    events &&
    events.length > 0 &&
    events.filter((ev) => ev.eventType === "payday").length > 0;

  const isHoliday =
    events &&
    events.length > 0 &&
    events.filter((ev) => ev.eventType === "holiday").length > 0;

  const dayClasses = classNames("day", "active-day", {
    past: isDatePast,
    today: isDateToday,
    future: isDateFuture,
    holiday: isHoliday,
    payday: isPayDay,
  });

  return (
    <div
      className={dayClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p>
        <small>{day}</small>
      </p>
      {isHovering && events && events.length > 0 && <Tooltip events={events} />}
    </div>
  );
}

export default Day;
