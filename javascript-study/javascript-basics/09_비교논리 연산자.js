// 비교 연산자
// 좌항과 우항의 피연산자를 비교한 다음 결과값을 논리적 자료형으로 반환하는 연산자

console.log("z" > "A");           // output: true

console.log("Hello" < "Hi");      // output: true

console.log("Hello" >= "Helloo"); // output: false

console.log("5" <= 10);           // output: true

console.log(true == 1);           // output: true

console.log(false != 123);        // output: true

console.log(true === 1);          // output: false

console.log(false !== 123);       // output: true


// 논리 연산자 
// 좌항과 우항의 피연산자 간 논리 값을 연산하여 참 또는 거짓을 결과로 얻는 연산자
console.log(true || false);          // output: true

console.log(Boolean(0 || false));    // output: false

console.log(Boolean(123 || false));  // output: true

console.log(Boolean(123 && 0));      // output: false

console.log(Boolean(false && true)); // output: false

console.log(Boolean(true && 3));     // output: true

console.log(Boolean(0 && false));    // output: false

console.log(Boolean(!false));        // output: true

console.log(!123);                   // output: false