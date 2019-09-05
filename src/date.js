// Back-end

export class NewDate {
constructor(date) {
  this.date= new Date(date);
  this.day =[];
  this.longDay = []
  }
  dayFinder() {
    let dayStr = this.date.toString().split(" ");
    this.day.push(dayStr[0]);
  }
  longhand(date) {
    if (this.day.includes("Fri")) {
    this.longDay.push("Friday");
  } else if (this.day.includes("Thu")) {
    this.longDay.push("Thursday");
  } else if (this.day.includes("Wed")) {
    this.longDay.push("Wednesday");
  } else if (this.day.includes("Tue")) {
    this.longDay.push("Tuesday");
  } else if (this.day.includes("Mon")) {
    this.longDay.push("Monday");
  } else if (this.day.includes("Sun")) {
    this.longDay.push("Sunday");
  } else if (this.day.includes("Sat")) {
    this.longDay.push("Saturday");
  };
};
};
