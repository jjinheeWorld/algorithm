const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const arr = input.splice(1).map((str) => str.split(" ").map(Number));

arr.sort((a, b) => {
  if (a[0] < b[0]) return -1;
  else if (a[0] > b[0]) return 1;
  else {
    if (a[1] < b[1]) return -1;
    else if (a[1] > a[1]) return 1;
    else return 0;
  }
});

arr.forEach((v) => console.log(...v));
