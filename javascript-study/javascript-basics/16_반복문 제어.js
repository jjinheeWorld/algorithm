// 반복문 제어

// break
// 반복문 수행 시 코드 블록을 탈출할 때 사용되는 식별자
// 다중 반복문일 경우 가장 안쪽의 반복문을 종료

let text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  text += i;
}
console.log(text); // output: "012"

// continue
// 반복문 수행 시 코드 블록 실행을 해당 라인에서 중지하고 
// 블록 코드를 종료 시킨 후, 반복문 내 명시된 조건 판단

text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) continue;
  text += i;
}
console.log(text);  // output: "012456789"


// Label
// 프로그램 내 특정 영역을 지정하여 별도 이름을 붙이는 식별자
// break와 continue를 사용하는 반복문 안에서만 사용 가능하며, 
// break나 continue 지시자 위에 있어야 함

// output: 0 * 0 = 0 \n 1 * 0 = 0 \n 2 * 0 = 0
for (let i = 0; i < 3; i++) {
  for(let j = 0; j < 3; j++) {
    console.log(i + " * " + j + " = " + i * j );
    break;
  }
}

// output: 0 * 0 = 0
end: for (let i = 0; i < 3; i++) {
  for(let j = 0; j < 3; j++) {
    console.log(i + " * " + j + " = " + i * j );
    break end;
  }
}