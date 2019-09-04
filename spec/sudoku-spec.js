import { Row } from './../src/sudoku.js';

describe ('Row', function() {
  it ("it should accept only integers 1-9.", function() {
    var rowOne = new Row([11]);
    expect(rowOne.checkRow()).toEqual("This number is not valid.");
  });
});
