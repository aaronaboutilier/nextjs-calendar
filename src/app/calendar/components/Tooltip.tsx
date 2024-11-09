import React from "react";
import {MyEvent} from "./events";

interface TooltipProps {
  events: MyEvent[];
}

const Tooltip: React.FC<TooltipProps> = ({events}) => {
  return (
    <div className="tooltip">
      {events.map((event, index) => (
        <div key={index}>
          <strong>{event.title}</strong>: {event.description}
        </div>
      ))}
    </div>
  );
};

export default Tooltip;
