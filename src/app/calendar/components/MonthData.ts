class MonthData {
  name: string;
  year: number;
  month: number;
  days: number;
  startDay: number;

  constructor(
    name: string,
    year: number,
    month: number,
    day: number,
    days: number,
    startDay: number
  ) {
    this.name = name;
    this.year = year;
    this.month = month;
    this.days = days;
    this.startDay = startDay; // Day of the week (0 for Sunday, 1 for Monday, etc.)
  }

  // You can add methods if needed, like getting the last day of the month, etc.
}

// Example usage:
// const january = new MonthData("January", 31, 0);
