// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
// n은 0 이상 3000이하인 정수입니다.

function solution(n) {
  // 0은 약수가 없으므로 예외 처리
  if (n === 0) return 0;

  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer += i;
  }

  return answer;
}
