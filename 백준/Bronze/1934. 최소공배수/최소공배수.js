const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const t = +input[0];

function gcd(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

for (let i = 1; i <= t; i++) {
  const [a, b] = input[i].split(" ").map(Number);

  console.log(lcm(a, b));
}
