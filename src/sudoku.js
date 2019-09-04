//Back-end
export function Row (row) {
  this.row= row;
}


Row.prototype.checkRow = function() {
  var invalidNum = "This number is not valid."
  for (var i = 0; i < this.row.length; i++) {
    if (this.row[i] !== 1 && this.row[i] !== 2 && this.row[i] !== 3 && this.row[i] !== 4 && this.row[i] !== 5 && this.row[i] !== 6 && this.row[i] !== 7 && this.row[i] !== 8 && this.row[i] !== 9) {
      console.log("working");
      return invalidNum;
    } else {
      console.log("reached else");
    }
  }
};

  // col1
  // col2
  // col3
  // col4
  // col5
  // col6
  // col7
  // col8
  // col9
  // grid1
  // grid2
  // grid3
  // grid4
  // grid5
  // grid6
  // grid7
  // grid8
  // grid9




// Sudoku.prototype.checkRow2 = function(){
//
// }
//
//
// Sudoku.prototype.checkColumn= function(){
//
// }
//
// Sudoku.prototype.checkGrid= function(){
//
// }
