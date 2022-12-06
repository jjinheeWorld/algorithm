function solution(array) {
  let answer = [];
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  answer.push(max);
  // indexOf()로 가장 큰 수의 인덱스를 찾아보자
  answer.push(array.indexOf(max));

  return answer;
}
