// 형 변환
// String
console.log(String(123));        // output: 123
console.log(String(1 / 0));      // output: Infinity
console.log(String(-1 / 0));     // output: -Infinity
console.log(String(NaN));        // output: NaN
console.log(String(true));       // output: true
console.log(String(false));      // output: false
console.log(String (undefined)); // output: undefined
console.log(String(null));       // output: null

// Number
// Number는 정수와 실수를 모두 포함하는 자료 형 변환이므로, 정수 혹은 실수의 명시적 변환은 parse 함수 사용
// 정수 변환 : parseInt(피연산자), 실수 변환 : parseFloat(피연산자)
console.log(Number(""));            // output: 0
console.log(Number("123"));         // output: 123
console.log(Number("hello"));       // output: NaN
console.log(Number("123hello"));    // output: NaN
console.log(Number(true));          // output: 1
console.log(Number(false));         // output: 0
console.log(Number(null));          // output: 0
console.log(Number(undefined))      // output: NaN

console.log(parseInt("123.123"));          // output: 123
console.log(typeof parseInt("123.123"));   // output: number
console.log(parseFloat("123.123"));        // output: 123.123
console.log(typeof parseFloat("123.123")); // output: number


// Boolean
console.log(Boolean(""));       // output: false
console.log(Boolean("123"));    // output: true
console.log(Boolean("hello"));  // output: frue
console.log(Boolean("0"));      // output: true
console.log(Boolean(0));        // output: false
console.log(Boolean(123));      // output: true
console.log(Boolean(NaN));      // output: false
console.log(Boolean(null));     // output: false
console.log(Boolean(undefined)) // output: false