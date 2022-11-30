// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성해보자

// 첫 번째 방법 (Number.MAX_SAFE_INTEGER)
function solution1(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER; // min에 9007199254740991로 초기화
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      // 배열의 첫 번째 숫자는 무조건 참이 되기 때문에 min에 무조건 할당됨
      min = arr[i]; // 최종적으로 최솟값이 min에 할당됨
    }
  }
  answer = min; // answer에 최솟값 할당하면 끝!
  return answer;
}

// 두 번째 방법 (Math.min())
function solution2(arr) {
  let answer = Math.min(...arr); // Math.min()를 사용할 때, 배열은 arr만 작성하면 ❌ 전개 연산자를 통해 최솟값을 구하면 된다 ⭕️ 참고로 전개 연산자는 arr[0], arr[1]﹒﹒﹒arr[6]처럼 하나씩 펼쳐준다.
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution2(arr));

/* Number.MAX_SAFE_INTEGER
안전한 최대 정수 값
*/
