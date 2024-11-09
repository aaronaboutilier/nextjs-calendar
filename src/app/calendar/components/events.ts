export interface MyEvent {
  eventType: string;
  title: string;
  description: string;
  day: number;
  month: number;
  year: number;
}

function isWeekend(day: Date): boolean {
  return day.getDay() === 0 || day.getDay() === 6;
}

function getPreviousWorkingDay(day: Date): Date {
  let prevDay = new Date(day);
  do {
    prevDay.setDate(prevDay.getDate() - 1);
  } while (isWeekend(prevDay));
  return prevDay;
}

export function generateEventsFor2024() {
  const myEvents: MyEvent[] = [];

  // Generate paydays
  for (let month = 0; month < 12; month++) {
    let firstPayday = new Date(2024, month, 15);
    let lastDay = new Date(2024, month + 1, 0); // Last day of the month

    // First Payday of the month
    if (isWeekend(firstPayday)) {
      firstPayday = getPreviousWorkingDay(firstPayday);
    }
    myEvents.push({
      eventType: "payday",
      title: "Payday",
      description: "Monthly salary deposit",
      day: firstPayday.getDate(),
      month: firstPayday.getMonth(),
      year: firstPayday.getFullYear(),
    });

    // Last Payday of the month
    if (isWeekend(lastDay)) {
      lastDay = getPreviousWorkingDay(lastDay);
    }
    myEvents.push({
      eventType: "payday",
      title: "Payday",
      description: "Monthly salary deposit",
      day: lastDay.getDate(),
      month: lastDay.getMonth(),
      year: lastDay.getFullYear(),
    });
  }

  // Add holidays
  const holidays: [number, number, string][] = [
    [1, 1, "New Year's Day"],
    [2, 19, "Family Day"],
    [4, 7, "Good Friday"],
    [5, 20, "Victoria Day"],
    [7, 1, "Canada Day"],
    [8, 5, "New Brunswick Day"],
    [9, 2, "Labour Day"],
    [10, 14, "Thanksgiving"],
    [11, 11, "Remembrance Day"],
    [12, 25, "Christmas Day"],
    [12, 26, "Boxing Day"],
  ];

  holidays.forEach(([month, day, title]) => {
    myEvents.push({
      eventType: "holiday",
      title: title,
      description: `National holiday in New Brunswick`,
      day: day,
      month: month - 1, // Month in Date object is 0-indexed
      year: 2024,
    });
  });

  return myEvents;
}

//const eventsFor2024 = generateEventsFor2024();
//console.log(eventsFor2024);
