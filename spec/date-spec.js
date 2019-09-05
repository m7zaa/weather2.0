// import { Date } from './../src/date.js';

describe ('date syntax', function() {
  it ("it should respond as 'undefined' if the syntax is incorrect", function() {
    let date1 = new Date("se").toString().split(" ");

    expect(date1[0]).toEqual("Invalid");
  });
  // it ("Test for correct input.", function() {
  //   let date1 = new Date('12/12/69');
  //   expect(date1).toEqual("undefined");
  // });
  // it ("Determine day based on correct input", function() {
  //   let date1 = new Date('December 17, 1995');
  //   expect(date1).toEqual("Sun");
  // });
  // it ("Program returns day based on correct input", function() {
  //   let date1 = new Date('December 17, 1995');
  //   expect(date1).toEqual("Sunday");
  // });





  // it ("it should respond as 'undefined' if the syntax is incorrect", function() {
  //   let date1 = new Date("september 26, 1986").toString().split(" ");
  //
  //   expect(date1[0]).toEqual("Fri");
  // });
});
