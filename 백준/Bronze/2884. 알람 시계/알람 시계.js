const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let hour = input[0];
let minute = input[1];

if (minute < 45) {
  if (hour === 0) hour = 23;
  else hour -= 1;
  minute = 60 - (45 - minute);
} else {
  minute -= 45;
}

console.log(hour, minute);
