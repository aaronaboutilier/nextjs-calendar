import Day from "./Day";
import {generateEventsFor2024} from "./events";
import {MyEvent} from "./events";

type MonthProps = {
  monthData: MonthData;
};

export default function Month({monthData}: MonthProps) {
  const days = [];

  const myEvents: MyEvent[] = generateEventsFor2024();

  for (let i = 0; i < monthData.startDay; i++) {
    days.push(<Day key={`empty-${i}`} />); // Empty cells for non-starting days
  }
  for (let i = 1; i <= monthData.days; i++) {
    days.push(
      <Day
        key={i}
        day={i}
        month={monthData.month}
        year={monthData.year}
        events={myEvents.filter(
          (ev) =>
            ev.day == i &&
            ev.month == monthData.month &&
            ev.year == monthData.year
        )}
      />
    ); // // In your parent component or Month component <Day day={25} month={10} year={2024} />
  }

  return (
    <div className="month">
      <h2>{monthData.name}</h2>
      <div className="month-grid">
        <div className="">S</div>
        <div className="">M</div>
        <div className="">T</div>
        <div className="">W</div>
        <div className="">T</div>
        <div className="">F</div>
        <div className="">S</div>
      </div>
      <div className="month-grid">{days}</div>
    </div>
  );
}
