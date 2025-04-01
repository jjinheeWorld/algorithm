const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

for (let str of input) {
  const arr = [0, 0, 0, 0];
  if (str === "") continue;
  for (let char of str) {
    if (char.match(/[a-z]/)) arr[0]++;
    else if (char.match(/[A-Z]/)) arr[1]++;
    else if (char.match(/[0-9]/)) arr[2]++;
    else arr[3]++;
  }
  console.log(arr.join(" "));
}
