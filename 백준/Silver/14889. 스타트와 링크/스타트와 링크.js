const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const s = input.slice(1).map((line) => line.split(" ").map(Number));

let minScore = Number.MAX_SAFE_INTEGER;

const dfs = (start, team) => {
  if (team.length === n / 2) {
    const other = [];
    for (let i = 0; i < n; i++) {
      if (!team.includes(i)) other.push(i);
    }

    const startScore = calcScore(team);
    const linkScore = calcScore(other);

    const score = Math.abs(startScore - linkScore);
    minScore = Math.min(minScore, score);
    return;
  }

  for (let i = start; i < n; i++) {
    team.push(i);
    dfs(i + 1, team);
    team.pop();
  }
};

const calcScore = (team) => {
  let score = 0;
  for (let i = 0; i < team.length - 1; i++) {
    for (let j = i + 1; j < team.length; j++) {
      const a = team[i];
      const b = team[j];
      score += s[a][b] + s[b][a];
    }
  }
  return score;
};

dfs(0, []);
console.log(minScore);
