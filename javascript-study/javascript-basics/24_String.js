// String
// 텍스트 길이에 상관없이 문자열 형태로 저장되는 자료형


/* 정의 방법
  string 정의 방법 : "hello"(큰 따옴표), 'hello'(작은 따옴표), String()
  문자열과 변수 혼합 표현 방법 : `Hello` (역 따옴표)
*/

let str_1 = "hello_1", str_2 = String("Hello_2");
let num = 3, str_3 = `hello_${num}`;

console.log(str_1); // output: hello_1
console.log(str_2); // output: hello_2
console.log(str_3); // output: hello_3
console.log(`hello_${2 * 2}`); // output: hello_4


/* 문자 표기
  다양한 문자 표기 방법 : Line feed(\n), Carriage return(\r), Backslash(\\), Unicode(\u{})
*/ 

console.log("line\nfeed"); // output: line <newline> feed
console.log("line\rfeed"); // output: carriage <newline> return
console.log("line\\feed"); // output: backslash \
console.log("line\tfeed"); // output : tab tab
console.log("line\u{1F60D}feed"); // output: smile : 😍


/* 문자열 길이 
  문자열 길이 확인 방법 : String.length
*/

let str = "hello\nworld\n!!!";
console.log(str.length);  // output: 15


/* 문자 접근
  문자열 내 개별 문자 접근 방법 : String.charAt(index), String.charCodeAt(index), String[index]
*/

console.log(str.charAt(1));     // output: e
console.log(str.charCodeAt(1)); // output: 101
console.log(str[0]);            // output: h


/* 문자열 검색
  문자열 검색(index) : String.indexOf(substr, pos), Stirng.lastIndexOf(substr, pos)
  문자열 검색(bool) : String.includes(substr, pos), String.startsWith(substr, pos), String.endsWith(substr, pos)
*/

let text = "hello, world!!!"; // l

console.log(text.indexOf("l"));     // output: 2
console.log(text.indexOf("l", 3));  // output: 3
console.log(text.lastIndexOf("l")); // output: 10

console.log(text.includes("hello"));     // output: true
console.log(text.includes("HeLlo"));     // output: false, 대소문자 구분
console.log(text.startsWith("ello"));    // output: false
console.log(text.startsWith("ello", 1)); // output: true 
console.log(text.endsWith("!!!"));       // output: true
console.log(text.endsWith("world"));     // output: false


/* 문자열 대소문자 변환
  대소문자 변환 : String.toUpperCase(), String.toLowerCase()
*/
let strr = "HeLlo!";
console.log(strr.toUpperCase()); // output: HELLO!!
console.log(strr.toLowerCase()); // output: hello!!
