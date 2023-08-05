function solution(array, height) {
  let answer = 0;
  for (let x of array) {
      if (x > height) answer++;
  }
  return answer;
}