const fs = require("fs");
let n = +fs.readFileSync("/dev/stdin").toString().trim();

let count = 0;
while (n >= 0) {
  if (n % 5 === 0) {
    console.log((count += n / 5));
    return;
  } else {
    n -= 3;
    count++;
  }
}

console.log(-1);
