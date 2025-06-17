const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const meetings = input.slice(1).map((meting) => meting.split(" ").map(Number));
meetings.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let lastEnd = 0;
let count = 0;

for (let i = 0; i < N; i++) {
  if (meetings[i][0] >= lastEnd) {
    count++;
    lastEnd = meetings[i][1];
  }
}
console.log(count);
