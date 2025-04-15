const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const t = +input[0];
const numbers = input.slice(1).map(Number);
const max = 1000000;

const primes = Array(max + 1).fill(true);
primes[0] = primes[1] = false;

// 에라토스테네스의 체
for (let i = 2; i * i <= max; i++) {
  if (primes[i]) {
    for (let j = i * i; j <= max; j += i) {
      primes[j] = false;
    }
  }
}

for (let n of numbers) {
  let count = 0;
  for (let i = 2; i <= n / 2; i++) {
    if (primes[i] && primes[n - i]) count++;
  }
  console.log(count);
}
