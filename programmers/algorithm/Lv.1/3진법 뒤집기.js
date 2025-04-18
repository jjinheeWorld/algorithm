// 자연수 n이 매개변수로 주어집니다.
// n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(n) {
  // n을 3진법으로 변환하고 뒤집은 문자열 생성
  const reversedTernary = n.toString(3).split("").reverse().join("");

  // 뒤집힌 3진법 문자열을 10진법으로 변환
  return parseInt(reversedTernary, 3);
}
