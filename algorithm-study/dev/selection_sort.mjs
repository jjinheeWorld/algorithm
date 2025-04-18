function SelectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minValueIndex = i; // 정렬된 영역은 반복에서 제외하기
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValueIndex]) {
        minValueIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minValueIndex];
    arr[minValueIndex] = temp;
  }
}

let arr = [4, 2, 1, 3];

console.log("===== 정렬 전 =====");
console.log(arr);

SelectionSort(arr);

console.log("===== 정렬 후 =====");
console.log(arr);
