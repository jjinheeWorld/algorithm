function solution(a, b, n) {
  let cnt = 0;
  while (n >= a) {
    const coke = Math.floor(n / a) * b;
    const tmp = n % a;
    n = coke + tmp;
    cnt += coke;
  }
  return cnt;
}
