function solution(s) {
  let answer = [];
  s = s.split(' ').sort((a, b) => a - b);
  answer.push(s[0], s[s.length - 1]);
  return answer.join(' ');
}