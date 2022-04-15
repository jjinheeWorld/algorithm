function solution(num) {
  var answer = 0;

  // 결과로 나온 수에 같은 작업을 1이 될 때까지 반복한다.
  while (num != 1) {
    if (num % 2 == 0) {
      // 입력된 수가 짝수라면 2로 나눈다.
      num /= 2;
    } else {
      // 입력된 수가 홀수라면 홀수라면 3을 곱하고 1을 더한다.
      num = num * 3 + 1;
    }
    answer++;
  }
  // 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환한다.
  if (answer > 500) {
    answer = -1;
  }

  return answer;
}
