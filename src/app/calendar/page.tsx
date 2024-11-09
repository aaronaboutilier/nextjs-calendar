"use client";
import Image from "next/image";
import CalendarView from "./components/CalendarView";
import {generateEventsFor2024} from "./components/events";

const months = generateEventsFor2024();

export default function Calendar() {
  return (
    <div className="grid justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <CalendarView />

      {/* <ul>
        {months.map((month, index) => (
          <li>
            {month.year}-{month.month}-{month.day} | {month.eventType} |{" "}
            {month.title}
          </li>
        ))}
      </ul> */}
    </div>
  );
}
