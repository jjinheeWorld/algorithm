const fs = require("fs");
const [a, b, c] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let prize = 0;

if (a === b && b === c) {
  prize = 10000 + a * 1000;
} else if (a === b || a === c || b === c) {
  const same = a === b || a === c ? a : b;
  prize = 1000 + same * 100;
} else {
  prize = Math.max(a, b, c) * 100;
}

console.log(prize);
