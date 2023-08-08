function solution(arr, divisor) {
  let answer = arr.filter(x => x % divisor === 0)
  if (!answer.length) answer.push(-1)
  return answer.sort((a, b) => a - b);
}