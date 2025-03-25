const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
let scores = input[1].split(" ").map(Number);

const maxScore = Math.max(...scores);

const newScore = scores.map((score) => (score / maxScore) * 100);
const average = newScore.reduce((sum, score) => sum + score, 0) / n;
console.log(average);
