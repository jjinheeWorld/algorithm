const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

if (input === "0") {
  console.log("0");
} else {
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    answer += parseInt(input[i], 8).toString(2).padStart(3, "0");
  }

  console.log(answer.replace(/^0+/, ""));
}
