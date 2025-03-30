const fs = require("fs");
const x = +fs.readFileSync("/dev/stdin").toString().trim();

let n = 1; // 대각선 번호
while ((n * (n + 1)) / 2 < x) {
  n++;
}

let lastIndex = (n * (n - 1)) / 2; // 이전 대각선의 마지막 x값
let pos = x - lastIndex; // 현재 대각선에서 몇 번째인지

let top, bottom;
if (n % 2 === 1) {
  top = n - pos + 1;
  bottom = pos;
} else {
  top = pos;
  bottom = n - pos + 1;
}

console.log(`${top}/${bottom}`);