const fs = require("fs");
const [m, n] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const arr = [];
for (let i = m; i <= n; i++) {
  if (isPrime(i)) arr.push(i);
}

if (arr.length > 0) {
  console.log(arr.reduce((acc, num) => acc + num));
  console.log(Math.min(...arr));
} else {
  console.log(-1);
}
