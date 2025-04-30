const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const lottoMax = 6;
let idx = 0;

while (true) {
  const [k, ...s] = input[idx].split(" ").map(Number);
  if (k === 0) break;

  const selected = [];
  const answer = [];

  const backtracking = (start, depth) => {
    if (depth === lottoMax) {
      answer.push(selected.join(" "));
      return;
    }

    for (let i = start; i < k; i++) {
      selected[depth] = s[i];
      backtracking(i + 1, depth + 1);
    }
  };

  backtracking(0, 0);
  console.log(answer.join("\n") + "\n");
  idx++;
}
