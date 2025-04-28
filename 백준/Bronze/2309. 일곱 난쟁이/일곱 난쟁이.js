const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const arr = input;
const sum = arr.reduce((a, b) => a + b, 0);
let flag = 0;

for (let i = 0; i < 8; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (sum - (arr[i] + arr[j]) === 100) {
      arr.splice(j, 1);
      arr.splice(i, 1);
      flag = 1;
      break;
    }
  }
  if (flag) break;
}

arr.sort((a, b) => a - b);
console.log(arr.join("\n"));
