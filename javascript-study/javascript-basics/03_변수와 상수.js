// 변수
let A = 123;    // 변수 선언 및 값 초기화
console.log(A); // output: 123

A = 456;        // 값 재할당
console.log(A); // output: 456

// let A = 789; // 재 선언 -> 에러
                // SyntaxError: Identifier 'A' has already been declared


// 상수
const B = 123;  // 상수 선언 및 값 초기화
console.log(B); // output: 123

// B = 456;     // 값 재할당 -> 에러
                // TypeError: Assignment to constant variable

// const C;     // 초기화 없이 상수 선언 -> 에러
// C = 123;     // SyntaxError: Missing initializer in const declaration    


// 변수/상수
// 선언 후 할당
let hi;
hi = "hello";

// 선언과 동시에 초기화
let halo = "Hello!";

// 한 줄에 여러 변수 선언과 초기화
let name = "jinhee", age = 27, msg = 'hello';

// 상수는 보통 대문자로 표기
const TESTCASE = 5;
const BIRTYDAY = '1996.11.23';

console.log(age);
console.log(BIRTYDAY);