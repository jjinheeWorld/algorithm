// N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성해보자
// 정렬하는 방법은 삽입정렬이다.

function solution(arr) {
  let answer = arr; // 얕은 복사
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }
  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
