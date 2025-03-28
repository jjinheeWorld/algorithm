const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const num = +input[i];
  if (num === -1) break;

  const arr = [];
  let sum = 0;

  for (let j = 1; j <= num / 2; j++) {
    if (num % j === 0) {
      arr.push(j);
      sum += j;
    }
  }

  if (sum === num) {
    console.log(`${sum} = ${arr.join(" + ")}`);
  } else {
    console.log(`${num} is NOT perfect.`);
  }
}
