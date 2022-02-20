// 조건문 switch
// switch는 표현식을 평가하여 그 값이 일치하는 case 문을 실행하는 조건문
// switch, case, break, default 키워드를 통해 구성되며, switch의 조건에 맞는 case 구문을 수행
// 일반적으로 하나의 case만 수행되도록 case 끝을 break로 끝맺음 

// switch 예제 (1)
let day_number = 1;
let day = "";

switch (day_number) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;  
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;  
  case 6:
    day = "Saturday";
    break;
  default:
    day = "error"
    break;
}

console.log(day);  // output: Monday


// switch 예제 (2)
let browser = "Chrome";

switch (browser) {
  case "Explorer":
    msg = "ActiveX installation required.";
    break;
  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    msg = "Supported browsers!";
    break;

  default:
    msg = "Unsupported browsers!";
    break;
}

console.log(msg);  // output: Supported browsers!