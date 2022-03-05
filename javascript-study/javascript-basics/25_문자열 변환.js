/* 문자열 치환
  처음 만나는 요소 문자열 치환 (치환된 문자열 반환) : String.replace(origin_str, change_str)
  정규 표현식 활용 문자열 치환 : 치환 문자열에 정규 표현식 기입 -> /치환문자열/g(전체)i(대소문자 구분 X)
*/

let text = "helLo, world!!!";
let changed_text = "";

changed_text = text.replace("world", "earth");

console.log(changed_text); // output: helLo, earth!!!
console.log(text); // output: helLo, world!!!

console.log(text.replace("!", "?")); // output: helLo, world?!!
console.log(text.replace("l", "i")); // output: heiLo, world!!!

console.log(text.replace(/l/g, "i")); // output: heiLo, worid!!!
console.log(text.replace(/l/gi, "i")); // output: heiio, worid!!!

/* 문자열 추출
  위치 기반 문자열 추출 : String.slice(start, end), String.substring(start, end)
  길이 기반 문자열 추출 : String.substr(start, length)
*/

let texxt = "hello, world!!!";

console.log(texxt.slice(0, 5)); // output: hello
console.log(texxt.slice(4, 5)); // output: o
console.log(texxt.slice(4)); // output: o, world!!!
console.log(text.slice(-4)); // output: d!!!

// substring: end > start -> start > end
console.log(texxt.slice(2, 6)); // output: llo,
console.log(texxt.slice(6, 2)); // output:
console.log(texxt.substring(2, 6)); // output: llo,
console.log(texxt.substring(6, 2)); // output: llo,

console.log(texxt.substr(2, 6)); // output: llo, w
console.log(texxt.substr(-5, 3)); // output: ld!

/* 문자열 분할
  배열로 문자열 분할 : String.split(Separator, limit)
*/

let fruits = "apple banana melon";

result = fruits.split(" ");
console.log(result); // output: [ 'apple', 'banana', 'melon' ]
console.log(result[0]); // output: apple
console.log(result[1]); // output: banana
console.log(result[2]); // output: melon

let textt = "hello";

result = textt.split("");
console.log(result); // output: [ 'h', 'e', 'l', 'l', 'o' ]
console.log(result.length); // output: 5
console.log(result[0]); // output: h

result = textt.split("", 3);
console.log(result); // output: [ 'h', 'e', 'l' ]
console.log(result.length); // output: 3
