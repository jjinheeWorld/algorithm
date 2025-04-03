const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const arr = input.splice(1).map((str) => str.split(" ").map(Number));

arr.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  else return a[1] - b[1];
});

console.log(arr.map((v) => v.join(" ")).join("\n"));
