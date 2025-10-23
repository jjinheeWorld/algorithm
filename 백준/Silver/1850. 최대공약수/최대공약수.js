const fs = require("fs");
const [A, B] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(BigInt);

const gcd = (a, b) => {
  if (b === 0n) return a;
  return gcd(b, a % b);
};

const resultGcd = gcd(A, B);
let answer = "";
for (let i = 0n; i < resultGcd; i++) {
  answer += "1";
}

console.log(answer);
