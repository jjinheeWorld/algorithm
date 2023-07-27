function solution(message) {
  let answer = 0;
  for (let x of message) {
      answer += x.length * 2
  }
  return answer;
}