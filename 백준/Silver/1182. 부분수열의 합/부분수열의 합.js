const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, S] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let count = 0;

const dfs = (index, sum, chosen) => {
  if (index === N) {
    if (chosen && sum === S) {
      count++;
    }
    return;
  }
  dfs(index + 1, sum + arr[index], true);
  dfs(index + 1, sum, chosen);
};

dfs(0, 0, false);
console.log(count);
