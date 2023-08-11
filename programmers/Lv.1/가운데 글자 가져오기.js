function solution(s) {
  let answer = '';
  let len = s.length;
  for (let i = 0; i <= Math.floor(len / 2); i++) {
      if (len % 2 === 1) answer = s[i];
      else answer = s[i - 1] + s[i];
  }
  return answer;
}