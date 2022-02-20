// scope
// 변수 혹은 상수에 접근할 수 있는 범위

// global scope
// 전역에 선언되어 어디에서도 접근 가능
let x = 1;
let y = 2;
let z = 3;

console.log(x);  // output: 1
console.log(y);  // output: 2

// local scope
// 특정 지역에 선언되어, 해당 지역 내에서만 접근 가능
{
  let x = 3;
  let y = 4;

  console.log(x);  // output: 3
  console.log(y);  // output: 4
  console.log(z);  // output: 3
}

console.log(x);  // output: 1
console.log(y);  // output: 2


// scope 예제코드 1
// global scope
let A = 1;
let B = 2;

// local scope
{
  let C = 3;
  let D = 4;

  console.log(A);  // output: 1
  console.log(C);  // output: 3
}

// console.log(C);  // ReferenceError: C is not defined


// scope 예제코드 2
let AA = 1;

{
  let CC = 3;
  let DD = 4;
  console.log(CC);    // output: 3
  {
    let CC = 5;
    let DD = 6;
    console.log(CC);  // output: 5
  }
}


// scope 예제코드 3
let index = 1000;

function local_func() {
  let index = 100;

  for (let index = 0; index < 10; index++) {
    console.log(index); // output: 0 ~ 9
  }

  console.log(index); // output: 100
}

local_func();
console.log(index); // output: 1000;