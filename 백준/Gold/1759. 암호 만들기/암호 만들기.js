const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [l, c] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").sort();

const vowel = ["a", "e", "i", "o", "u"];

const selected = [];
const answer = [];

const backtracking = (start, depth) => {
  if (depth === l) {
    const vowelCount = selected.filter((al) => vowel.includes(al)).length;
    const consonantCount = selected.length - vowelCount;

    if (vowelCount >= 1 && consonantCount >= 2) {
      answer.push(selected.join(""));
    }
    return;
  }

  for (let i = start; i < c; i++) {
    selected[depth] = arr[i];
    backtracking(i + 1, depth + 1);
  }
};

backtracking(0, 0);
console.log(answer.join("\n"));
