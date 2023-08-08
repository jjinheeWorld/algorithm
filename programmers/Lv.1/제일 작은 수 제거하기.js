function solution(arr) {
  let answer = arr;
  let index = 0, min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
          min = arr[i];
          index = i
      }
  }
  if (arr.length > 1) answer.splice(index, 1);
  else answer = [-1];
  return answer;
}