export interface MyEvent {
  eventType: string;
  title: string;
  description: string;
  day: number;
  month: number;
  year: number;
  startTime?: Date;
  endTime?: Date;
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

  // ADD PTO MANUALLY
  myEvents.push({
    eventType: "aspen-sick-leave",
    title: "Sick Leave",
    description: `Sick leave from Aspen`,
    day: 2,
    month: 1 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 1 - 1, 2, 9),
    endTime: new Date(2024, 1 - 1, 2, 17),
  });
  myEvents.push({
    eventType: "aspen-sick-leave",
    title: "Sick Leave",
    description: `Sick leave from Aspen`,
    day: 2,
    month: 2 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 2 - 1, 2, 9),
    endTime: new Date(2024, 2 - 1, 2, 17),
  });
  myEvents.push({
    eventType: "aspen-sick-leave",
    title: "Sick Leave",
    description: `Sick leave from Aspen`,
    day: 6,
    month: 3 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 3 - 1, 6, 9),
    endTime: new Date(2024, 3 - 1, 6, 17),
  });
  myEvents.push({
    eventType: "aspen-sick-leave",
    title: "Sick Leave",
    description: `Sick leave from Aspen`,
    day: 10,
    month: 4 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 4 - 1, 10, 8, 30),
    endTime: new Date(2024, 4 - 1, 10, 12),
  });
  myEvents.push({
    eventType: "aspen-sick-leave",
    title: "Sick Leave",
    description: `Sick leave from Aspen`,
    day: 18,
    month: 6 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 6 - 1, 18, 9),
    endTime: new Date(2024, 6 - 1, 18, 17),
  });
  myEvents.push({
    eventType: "aspen-sick-leave",
    title: "Sick Leave",
    description: `Sick leave from Aspen`,
    day: 20,
    month: 6 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 6 - 1, 20, 13, 0),
    endTime: new Date(2024, 6 - 1, 20, 17),
  });

  myEvents.push({
    eventType: "aspen-vacation-leave",
    title: "Vacation Leave",
    description: `Vacation leave from Aspen`,
    day: 12,
    month: 1 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 1 - 1, 12, 9, 0),
    endTime: new Date(2024, 1 - 1, 12, 17),
  });
  myEvents.push({
    eventType: "aspen-vacation-leave",
    title: "Vacation Leave",
    description: `Vacation leave from Aspen`,
    day: 7,
    month: 2 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 2 - 1, 7, 8, 30),
    endTime: new Date(2024, 2 - 1, 7, 12),
  });
  myEvents.push({
    eventType: "aspen-vacation-leave",
    title: "Vacation Leave",
    description: `Vacation leave from Aspen`,
    day: 16,
    month: 2 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 2 - 1, 16, 9, 0),
    endTime: new Date(2024, 2 - 1, 16, 17),
  });
  myEvents.push({
    eventType: "aspen-vacation-leave",
    title: "Vacation Leave",
    description: `Vacation leave from Aspen`,
    day: 1,
    month: 4 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 4 - 1, 1, 9, 0),
    endTime: new Date(2024, 4 - 1, 1, 17),
  });
  myEvents.push({
    eventType: "aspen-vacation-leave",
    title: "Vacation Leave",
    description: `Vacation leave from Aspen`,
    day: 1,
    month: 4 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 4 - 1, 1, 9, 0),
    endTime: new Date(2024, 4 - 1, 1, 17),
  });
  myEvents.push({
    eventType: "aspen-vacation-leave",
    title: "Vacation Leave",
    description: `Vacation leave from Aspen`,
    day: 3,
    month: 5 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 5 - 1, 3, 9, 0),
    endTime: new Date(2024, 5 - 1, 3, 17),
  });
  myEvents.push({
    eventType: "aspen-vacation-leave",
    title: "Vacation Leave",
    description: `Vacation leave from Aspen`,
    day: 10,
    month: 5 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 5 - 1, 10, 9, 0),
    endTime: new Date(2024, 5 - 1, 10, 17),
  });
  myEvents.push({
    eventType: "aspen-vacation-leave",
    title: "Vacation Leave",
    description: `Vacation leave from Aspen`,
    day: 3,
    month: 6 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 6 - 1, 3, 9, 0),
    endTime: new Date(2024, 6 - 1, 3, 17),
  });
  myEvents.push({
    eventType: "aspen-vacation-leave",
    title: "Vacation Leave",
    description: `Vacation leave from Aspen`,
    day: 17,
    month: 6 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 6 - 1, 17, 8, 30),
    endTime: new Date(2024, 6 - 1, 17, 12),
  });
  myEvents.push({
    eventType: "aspen-vacation-leave",
    title: "Vacation Leave",
    description: `Vacation leave from Aspen`,
    day: 21,
    month: 6 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 6 - 1, 21, 9, 0),
    endTime: new Date(2024, 6 - 1, 21, 17),
  });
  myEvents.push({
    eventType: "aspen-vacation-leave",
    title: "Vacation Leave",
    description: `Vacation leave from Aspen`,
    day: 28,
    month: 6 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 6 - 1, 28, 9, 0),
    endTime: new Date(2024, 6 - 1, 28, 17),
  });
  myEvents.push({
    eventType: "aspen-vacation-leave",
    title: "Vacation Leave",
    description: `Vacation leave from Aspen`,
    day: 5,
    month: 7 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 7 - 1, 5, 9, 0),
    endTime: new Date(2024, 7 - 1, 5, 17),
  });
  myEvents.push({
    eventType: "aspen-vacation-leave",
    title: "Vacation Leave",
    description: `Vacation leave from Aspen`,
    day: 19,
    month: 7 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 7 - 1, 19, 9, 0),
    endTime: new Date(2024, 7 - 1, 19, 17),
  });
  myEvents.push({
    eventType: "aspen-vacation-leave",
    title: "Vacation Leave",
    description: `Vacation leave from Aspen`,
    day: 22,
    month: 7 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 7 - 1, 22, 9, 0),
    endTime: new Date(2024, 7 - 1, 22, 17),
  });
  myEvents.push({
    eventType: "aspen-vacation-leave",
    title: "Vacation Leave",
    description: `Vacation leave from Aspen`,
    day: 23,
    month: 7 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 7 - 1, 23, 9, 0),
    endTime: new Date(2024, 7 - 1, 23, 17),
  });
  myEvents.push({
    eventType: "aspen-vacation-leave",
    title: "Vacation Leave",
    description: `Vacation leave from Aspen`,
    day: 24,
    month: 7 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 7 - 1, 24, 9, 0),
    endTime: new Date(2024, 7 - 1, 24, 17),
  });
  myEvents.push({
    eventType: "aspen-vacation-leave",
    title: "Vacation Leave",
    description: `Vacation leave from Aspen`,
    day: 25,
    month: 7 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 7 - 1, 25, 9, 0),
    endTime: new Date(2024, 7 - 1, 25, 17),
  });
  myEvents.push({
    eventType: "aspen-vacation-leave",
    title: "Vacation Leave",
    description: `Vacation leave from Aspen`,
    day: 26,
    month: 7 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 7 - 1, 26, 9, 0),
    endTime: new Date(2024, 7 - 1, 26, 17),
  });
  myEvents.push({
    eventType: "aspen-vacation-leave",
    title: "Vacation Leave",
    description: `Vacation leave from Aspen`,
    day: 9,
    month: 8 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 8 - 1, 9, 9, 0),
    endTime: new Date(2024, 8 - 1, 9, 17),
  });
  myEvents.push({
    eventType: "aspen-vacation-leave",
    title: "Vacation Leave",
    description: `Vacation leave from Aspen`,
    day: 22,
    month: 8 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 8 - 1, 22, 9, 0),
    endTime: new Date(2024, 8 - 1, 22, 17),
  });
  myEvents.push({
    eventType: "aspen-vacation-leave",
    title: "Vacation Leave",
    description: `Vacation leave from Aspen`,
    day: 30,
    month: 8 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 8 - 1, 30, 9, 0),
    endTime: new Date(2024, 8 - 1, 30, 17),
  });
  myEvents.push({
    eventType: "aspen-vacation-leave",
    title: "Vacation Leave",
    description: `Vacation leave from Aspen`,
    day: 3,
    month: 9 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 9 - 1, 3, 9, 0),
    endTime: new Date(2024, 9 - 1, 3, 17),
  });

  myEvents.push({
    eventType: "aspen-personal-leave",
    title: "Personal Leave",
    description: `Personal leave from Aspen`,
    day: 8,
    month: 4 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 4 - 1, 8, 9, 0),
    endTime: new Date(2024, 4 - 1, 8, 17),
  });
  myEvents.push({
    eventType: "aspen-personal-leave",
    title: "Personal Leave",
    description: `Personal leave from Aspen`,
    day: 13,
    month: 9 - 1, // Month in Date object is 0-indexed
    year: 2024,
    startTime: new Date(2024, 9 - 1, 13, 9, 0),
    endTime: new Date(2024, 9 - 1, 13, 17),
  });

  return myEvents;
}

//const eventsFor2024 = generateEventsFor2024();
//console.log(eventsFor2024);
