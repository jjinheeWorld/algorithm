const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const arr = input.slice(1).map((line) => {
  const [name, kor, eng, math] = line.split(" ");
  return [name, +kor, +eng, +math];
});

arr.sort((a, b) => {
  if (a[1] !== b[1]) return b[1] - a[1]; // 국어 내림차순
  if (a[2] !== b[2]) return a[2] - b[2]; // 영어 오름차순
  if (a[3] !== b[3]) return b[3] - a[3]; // 수학 내림차순
  if (a[0] < b[0]) return -1; // 이름 사전순
  if (a[0] > b[0]) return 1;
  return 0;
});

console.log(arr.map((v) => v[0]).join("\n"));