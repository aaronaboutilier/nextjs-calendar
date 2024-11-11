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
  if (day === undefined || year === undefined || month === undefined)
    return <div className="day inactive-day"></div>;

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  const dayDate = new Date(year, month, day);

  // Determine if the date is past, today, or future
  const isDateToday = isToday(dayDate);
  const isDatePast = isPast(dayDate);
  const isDateFuture = isFuture(dayDate);

  const isPayDay = events && events.some((ev) => ev.eventType === "payday");

  const isHoliday = events && events.some((ev) => ev.eventType === "holiday");

  // Determine the styles for the top and bottom divs based on the events
  let topDivClass = "";
  let bottomDivClass = "";

  events?.forEach((event) => {
    const startTime = event.startTime ? new Date(event.startTime) : null;
    const endTime = event.endTime ? new Date(event.endTime) : null;
    const isAllDay = !startTime || !endTime;

    const colorClass =
      event.eventType === "aspen-vacation-leave"
        ? "bg-green-600"
        : event.eventType === "aspen-personal-leave"
        ? "bg-blue-600"
        : event.eventType === "aspen-sick-leave"
        ? "bg-purple-600"
        : "";

    if (colorClass) {
      if (isAllDay) {
        // Full day event
        topDivClass = colorClass;
        bottomDivClass = colorClass;
      } else if (startTime && endTime) {
        const eventStartsInMorning = startTime.getHours() < 12;
        const eventStartsInAfternoon = startTime.getHours() >= 12;

        const isMoreThanFourHours =
          endTime.getTime() - startTime.getTime() > 4 * 60 * 60 * 1000;

        if (eventStartsInMorning) topDivClass = colorClass; // Morning event
        if (
          eventStartsInAfternoon ||
          (eventStartsInMorning && isMoreThanFourHours)
        )
          bottomDivClass = colorClass; // Afternoon event
      }
    }
  });

  const dayClasses = classNames("relative", "day", "active-day", {
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
      <small className="text-xs absolute top-0 left-1">{day}</small>

      {/* Top and bottom divs styled based on leave type and time */}
      <div
        className={`absolute top-0 opacity-25 w-full min-h-5 ${topDivClass}`}
      ></div>
      <div
        className={`absolute top-5 opacity-25 w-full min-h-5 ${bottomDivClass}`}
      ></div>

      {/* Payday indicator */}
      {isPayDay && <small className="text-xs absolute top-0 right-1">$</small>}

      {/* Tooltip for events */}
      {isHovering && events && events.length > 0 && <Tooltip events={events} />}
    </div>
  );
}

export default Day;
