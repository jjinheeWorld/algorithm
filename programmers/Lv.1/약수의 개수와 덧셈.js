function solution(left, right) {
  let answer = 0;
  for (let range = left; range <= right; range++) {
      let cnt = 0;
      for (let num = 1; num <= range; num++) {
          if (range % num === 0) cnt++;
      }
      if (cnt % 2 === 0) answer += range;
      else answer -= range;
  }
  return answer;
}