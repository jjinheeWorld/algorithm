const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let maxValue = Number.MIN_SAFE_INTEGER;
let maxX = 0;
let maxY = 0;

for (let i = 0; i < input.length; i++) {
  input[i].split(" ").map((item, j) => {
    item = Number(item);
    if (item > maxValue) {
      maxValue = item;
      maxX = i + 1;
      maxY = j + 1;
    }
  });
}

console.log(maxValue);
console.log(maxX, maxY);
