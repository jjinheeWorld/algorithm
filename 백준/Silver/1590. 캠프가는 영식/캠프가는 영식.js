const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

/**
 * 버스의 개수 n
 * 버스터미널에 도착하는 시간 t
 */
const [n, t] = input[0].split(" ").map(Number);
let min = Number.MAX_SAFE_INTEGER;

for (let i = 1; i <= n; i++) {
  /**
   * 각 버스의 시작 시간 s
   * 간격 interval
   * 대수 c
   */
  const [s, interval, c] = input[i].split(" ").map(Number);

  let time = s;
  let count = 0;

  while (time < t && count < c) {
    time += interval;
    count++;
  }

  if (count < c && time >= t) {
    min = Math.min(min, time - t);
  }
}

console.log(min === Number.MAX_SAFE_INTEGER ? -1 : min);
