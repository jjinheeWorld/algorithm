function solution(x) {
  let answer = true;
  let num = x, res = 0;
  while(num !== 0) {
      res += num % 10;
      num = parseInt(num / 10);
  }
  if (x % res !== 0) answer = false;
  return answer;
}