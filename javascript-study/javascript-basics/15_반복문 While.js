// 반복문 while
// 조건문이 참일 때 코드 블록을 계속해서 반복 수행하는 반복문
// for문에 비해 선언문과 증감문 없이 loop를 수행하며, 무한 loop 등 수행 시 많이 사용
// 조건문을 코드 블록보다 아래로 옮긴 do ... while 반복문도 존재 (최소 한번 수행이 필요할 때 많이 사용)

let i = 0;
// output: 0, 1, 2
while (i < 3) {
  console.log(i);
  i++;
}

// output: 0, 1, 2
i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);

// output: 4
i = 4;
do {
  console.log(i);
  i++;
} while (i < 3);