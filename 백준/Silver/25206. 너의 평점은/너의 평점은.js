const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const grades = new Map([
  ["A+", 4.5],
  ["A0", 4.0],
  ["B+", 3.5],
  ["B0", 3.0],
  ["C+", 2.5],
  ["C0", 2.0],
  ["D+", 1.5],
  ["D0", 1.0],
  ["F", 0.0],
]);

const classCount = input.length;
let total = 0;
let sumScore = 0;

for (let i = 0; i < classCount; i++) {
  const [subject, score, grade] = input[i].split(" ");
  if (grade !== "P") {
    total += Number(score) * grades.get(grade);
    sumScore += Number(score);
  }
}

console.log(total / sumScore);
