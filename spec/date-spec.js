import { Row } from './../src/date.js';

describe ('Row', function() {
  it ("it should accept only integers 1-9.", function() {
    var rowOne = new Row([1]);
    expect(rowOne.checkRow()).toEqual("This number is not valid.");
  });
});
