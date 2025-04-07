const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.splice(1);

for (let str of arr) {
  const answer = str
    .split(" ")
    .map((word) => word.split("").reverse().join(""));
  console.log(answer.join(" "));
}
