const fs = require("fs");
let n = +fs.readFileSync("/dev/stdin").toString().trim();

let k = 1; // 최소 거리
let num = 1; // 현재 범위의 마지막 번호

while (num < n) {
  num += k * 6;
  k++;
}

console.log(k);
