const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = +input[0];

function bfs(start, target, isPrime) {
  const visited = Array(10000).fill(false);
  const queue = [];
  queue.push([start, 0]);
  visited[start] = true;

  while (queue.length > 0) {
    const [num, step] = queue.shift();
    if (num === target) return step;

    const numStr = String(num);
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j <= 9; j++) {
        if (i === 0 && j === 0) continue;

        const nextNumStrArr = numStr.split("");
        nextNumStrArr[i] = String(j);
        const nextNum = Number(nextNumStrArr.join(""));

        if (!visited[nextNum] && isPrime[nextNum]) {
          visited[nextNum] = true;
          queue.push([nextNum, step + 1]);
        }
      }
    }
  }

  return "Impossible";
}

function solution(t) {
  // 소수 판별 (에라토스테네스의 체)
  const limit = 10000;
  const isPrime = Array(limit).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i < limit; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < limit; j += i) {
        isPrime[j] = false;
      }
    }
  }

  for (let i = 1; i <= t; i++) {
    const [start, target] = input[i].split(" ").map(Number);
    console.log(bfs(start, target, isPrime));
  }
}

solution(T);