const fs = require("fs");
const N = +fs.readFileSync("/dev/stdin").toString().trim();

const answer = [];
let count = 0;

const hanoi = (n, start, end, temp) => {
  if (n === 0) return;
  hanoi(n - 1, start, temp, end);
  count++;
  answer.push(`${start} ${end}`);
  hanoi(n - 1, temp, end, start);
};
hanoi(N, 1, 3, 2);
console.log(count);
console.log(answer.join("\n"));
