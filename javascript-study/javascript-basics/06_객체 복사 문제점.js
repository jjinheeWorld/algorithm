// 가리키는 대상 전체를 복사하는 방법은 얕은 복사, 깊은 복사를 통해 가능
let user = {
  name: "jinhee",
  age: 27,
  sizes: {
    height: 155.1,
    wegith: 45,
  }
};


// 얕은 복사 (Shallow copy)
// 반복문 for문을 통한 객체 복사
let admin = {};

for (let key in user) {
  admin[key] = user[key];
}

admin.name = "lee";
console.log(admin.name);  // output: "lee"
console.log(user.name);   // output: "jinhee"


// Object.assing()함수를 이용한 복사          
let admin_obj = Object.assign({}, user);

admin_obj.name = "cute";
user.age = 28;

console.log(admin_obj.name); // output: "cute"
console.log(user.name);      // output: "jinhee"
console.log(admin_obj.age);  // output: 27
console.log(user.age);       // output: 28 


// ES6에서부터 지원하는 전개 연산자를 이용한 복사
let admin_spread = { ...user};

admin_spread.name = "kim";
user.age = 29;

console.log(admin_spread.name); // output: "kim"
console.log(user.name);      // output: "jinhee"
console.log(admin_spread.age);  // output: 28
console.log(user.age);       // output: 29


/* 얕은 복사 문제점 
객체 내 또 다른 객체가 있다면 복사되지 않음!!!!!!
*/


// JSON 객체를 이용한 깊은 복사 (Deep copy)
let admin_json = JSON.parse(JSON.stringify(user));

admin_json.sizes.height = admin_json.sizes.height + 1; // 155.1 -> 156.1
console.log(admin_json.sizes.height); // output: 156.1
console.log(user.sizes.height);       // output: 155.1


user.age = 30;
console.log(user.age);       // output: 30
console.log(admin_json.age); // output: 29


