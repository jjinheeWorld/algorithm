// 객체 예제 코드
let user = {
  name: "jinhee",  // key: "name", value: "jinhee"
  age: 27,         // key: age, value: 27
};

console.log(typeof user); // output: object
console.log(typeof user.name); // output: string
console.log(typeof user.age); // output: number

console.log(user); // output: { name: 'jinhee', age: 27 }
console.log(user.name); // output: "jinhee"
console.log(user.age); // output: 27

user.age = 28;
console.log(user.age); // output: 30

// 개체 추가
user.weight = 45;  // or user["weight"] = 72;
console.log(user); // output: { name: 'jinhee', age: 28, weight: 45 }

// 개체 삭제
delete user.age;
console.log(user);  // output: { name: 'jinhee', weight: 45 }


// 객체 복사 문제점
let admin = user;
console.log(admin);

admin.name = "lee";

console.log(admin.name);    // output: "lee"
console.log(user.name);     // output: "jinhee"가 아니고 "lee"로 출력

user.weight = 50;
console.log(user.weight);   // output: 50
console.log(admin.weight);  // output: 45이 아니고 50로 출력