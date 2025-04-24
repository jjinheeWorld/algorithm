const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const a = input.slice(1, n + 1).map(Number);
const b = a.sort((a, b) => a - b);
const questions = input.slice(n + 1).map(Number);

const answer = [];

for (let d of questions) {
  let left = 0;
  let right = n - 1;
  let same = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (d === b[mid]) {
      same = mid;
      right = mid - 1;
    } else if (d < b[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  answer.push(same);
}

console.log(answer.join("\n"));
