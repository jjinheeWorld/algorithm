const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);

// 수강한 과목 저장
const scoreMap = new Map();

for (let i = 1; i <= n; i++) {
  const [subject, score] = input[i].split(" ");
  scoreMap.set(subject, Number(score));
}

// 공개된 과목 저장
const knownSubjects = input.slice(n + 1);

let sum = 0;

for (let subject of knownSubjects) {
  if (scoreMap.has(subject)) {
    sum += scoreMap.get(subject);
    scoreMap.delete(subject);
  }
}

const unknownScores = [...scoreMap.values()];

// 최소 점수
unknownScores.sort((a, b) => a - b);
const minScore = sum + unknownScores.slice(0, m - k).reduce((acc, v) => acc + v, 0);

// 최대 점수
unknownScores.sort((a, b) => b - a);
const maxScore = sum + unknownScores.slice(0, m - k).reduce((acc, v) => acc + v, 0);

console.log(minScore, maxScore);
