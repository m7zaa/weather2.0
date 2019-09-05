import { Date } from './../src/date.js';

describe ('date syntax', function() {
  it ("it should respond as 'undefined' if the syntax is incorrect", function() {
    var date1 = new Date('12/26/1981');
    expect(date1).toEqual("undefined");
  });
});
