// 반복문 for
// 선언문, 조건문, 증감문 형태로 이루어진 반복문
// 조건문이 fail이 되기 전까지 코드 블록을 계속적으로 반복 수행
// 선언문, 조건문, 증감문 자리에 공백 입력 가능

// for 예제
// output: 0, 1, 2
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// output: 
for (let i = 10; i < 3; i++) {
  console.log(i);
}

// output: 0, 1
let num = 0;
for ( ; num < 2; ) {
  console.log(num);
  num++;
}


// 2중 for 예제
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`${i} + ${j} = ${i + j}`);
  }
}

/* output
0 + 0 = 0
0 + 1 = 1
0 + 2 = 2
1 + 0 = 1
1 + 1 = 2
1 + 2 = 3
2 + 0 = 2
2 + 1 = 3
2 + 2 = 4
*/


// 반복문 for (확장)
// for .. in 반복문
// 객체의 key, value 형태를 반복하여 수행하는데 최적화 된 유형
// 첫번째부터 마지막까지, 객체의 키 개수만큼 반복
const person = { fname: "Jinhee", lname: "Lee", age: 27};

let text_1 = "";
for (let x in person) {
  text_1 += person[x];
}
console.log(text_1); // output: JinheeLee27



// for .. of 반복문
// Collection 객체 자체가 Symbol.iterator 속성(property)을 가지고 있어야 동작 가능한 유형
// ES6에 새로 추가된 Collection 기반의 반복 구문
let language = "JavaScript";
let text_2 = "";

for (let x of language) {
  text_2 += x;
  console.log(x);  // output: J \n a \n . . . t
}
console.log(text_2);