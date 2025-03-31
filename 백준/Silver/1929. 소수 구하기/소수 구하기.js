const fs = require("fs");
const [m, n] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const primes = Array(n + 1).fill(true);
primes[0] = primes[1] = false;

// 에라토스테네스의 체
for (let i = 2; i * i <= n; i++) {
  if (primes[i]) {
    for (let j = i * i; j <= n; j += i) {
      primes[j] = false;
    }
  }
}

for (let i = m; i <= n; i++) {
  if (primes[i]) {
    console.log(i);
  }
}
