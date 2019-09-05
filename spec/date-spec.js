 import { NewDate } from './../src/date.js';


 describe ('date syntax', function() {
  it ("it should respond as 'undefined' if the syntax is incorrect", function() {
    let date1 = new Date("yesterday").toString().split(" ");
    expect(date1[0]).toEqual("Fri");
  });

  it ("Converts shorthand to longhand", function() {
    let date1 = new Date("September 26, 1981").toString().split(" ");
    expect(date1[0]).toEqual("Sat");
  });

    it ("it should respond as 'undefined' if the syntax is incorrect", function() {
      let date1 = new NewDate("september 26, 1986").dayFinder();
      expect(date1[0]).toEqual("Fri");
    });

    it ("it should respond as 'undefined' if the syntax is incorrect", function() {
      let date1 = new NewDate("september 26, 1986").dayFinder();
      expect(date1[0]).toEqual("Fri");
    });







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
