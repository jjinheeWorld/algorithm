const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const testCaseT = input[0];

for (let i = 1; i <= testCaseT; i++) {
  let cent = input[i];

  const quarter = Math.floor(cent / 25);
  cent %= 25;

  const dime = Math.floor(cent / 10);
  cent %= 10;

  const nickel = Math.floor(cent / 5);
  cent %= 5;

  const penny = cent;

  console.log(quarter, dime, nickel, penny);
}
