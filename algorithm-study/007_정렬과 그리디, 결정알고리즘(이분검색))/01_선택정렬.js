// N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성해보자
// 정렬하는 방법은 선택정렬이다.

function solution(arr) {
  let answer = arr; // 얕은 복사
  for (let i = 0; i < arr.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j; // 가장 작은 값의 인덱스를 idx에 할당
    }
    // i번째 값과 idx번째 값을 서로 바꿔준다.
    [arr[i], arr[idx]] = [arr[idx], arr[i]]; // 구조 분해 할당
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
