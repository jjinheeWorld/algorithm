const fs = require("fs");
let num = +fs.readFileSync("/dev/stdin").toString().trim();

const arr = [];
let divisor = 2;

while (num >= 2) {
  if (num % divisor === 0) {
    arr.push(divisor);
    num /= divisor;
  } else {
    divisor++;
  }
}

console.log(arr.join("\n"));
