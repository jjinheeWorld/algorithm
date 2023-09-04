function solution(numbers) {
  let answer;
  let tmp = new Set();
  for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
          if (i !== j) tmp.add(numbers[i] + numbers[j]);
      }
  }
  answer = Array.from(tmp).sort((a, b) => a - b);
  return answer;
}