// method
// 객체에 저장된 값이 함수인 경우, 이를 메서드(method)라고 부름

// method 변경 : 객체 내 초기 선언된 함수를 다른 함수로 변경
function hello_func() {
  console.log("hello");
}

function hi_func() {
  console.log("hi");
}

let obj = {
  name: "jinhee",
  age: 27,
  func: hello_func,
};

hello_func(); // output: hello
hi_func();    // output: hi 
obj.func();   // output: hello
console.log(hello_func == obj.func);  // output: true

obj.func = hi_func;
obj.func();   // output: hi
console.log(hello_func == obj.func);  // outptu: false
console.log(hi_func == obj.func);     // output: true


// this
// 메서드에서 객체 내부의 속성(property)값을 접근할 수 있는 지시자
// this를 사용하는 method는 추가 가능하며, 이 때 this는 runtime에 결정되어 호출한 객체에 따라 다름
let user = {name: "jinhee"};
let admin = { name: "admin"};

function hello_funcc() {
  console.log("Hello " + this.name);
}

user.funcc = hello_funcc;
admin.funcc = hello_funcc;

user.funcc();
admin.funcc();

user["funcc"]();
admin["funcc"]();