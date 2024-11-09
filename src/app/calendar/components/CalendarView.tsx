import {useState} from "react";
import {startOfMonth, format, getDaysInMonth, getDay} from "date-fns";
import Month from "./Month";

export default function CalendarView() {
  const [year, setYear] = useState(new Date().getFullYear());

  // Function to generate month data for the given year
  const generateMonthData = (year: number): MonthData[] => {
    const monthsData: MonthData[] = [];
    for (let month = 0; month < 12; month++) {
      const firstDayOfMonth = startOfMonth(new Date(year, month, 1));
      monthsData.push({
        name: format(firstDayOfMonth, "MMMM"),
        year: year,
        month: month,
        days: getDaysInMonth(firstDayOfMonth),
        startDay: getDay(firstDayOfMonth),
      });
    }
    return monthsData;
  };

  // Generate month data for the current year
  const months = generateMonthData(year);

  // Handle year change
  const changeYear = (increment: number) => {
    setYear((prevYear) => prevYear + increment);
  };

  return (
    <div className="annual-calendar">
      <div className="year-header">
        <button onClick={() => changeYear(-1)}>-&nbsp;</button>
        <span>{year}</span>
        <button onClick={() => changeYear(1)}>&nbsp;+</button>
      </div>
      <div className="months-grid">
        {months.map((month, index) => (
          <Month key={index} monthData={month} />
        ))}
      </div>
    </div>
  );
}
