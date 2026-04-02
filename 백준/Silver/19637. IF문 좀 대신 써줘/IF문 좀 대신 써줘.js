const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const titles = [];
const powers = [];

for (let i = 1; i <= N; i++) {
  const [title, power] = input[i].split(" ");
  titles.push(title);
  powers.push(Number(power));
}

const answer = [];

for (let i = N + 1; i <= N + M; i++) {
  const target = Number(input[i]);

  let left = 0;
  let right = powers.length - 1;
  let index = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (powers[mid] >= target) {
      index = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  answer.push(titles[index]);
}

console.log(answer.join("\n"));