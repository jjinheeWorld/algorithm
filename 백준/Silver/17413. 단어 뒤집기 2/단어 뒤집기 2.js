const fs = require("fs");
const s = fs.readFileSync("/dev/stdin").toString();

const answer = s.replace(/<[a-z\s]+>|[a-z0-9]+/g, (word) => {
  if (word.startsWith("<")) {
    return word;
  } else {
    return word.split("").reverse().join("");
  }
});

console.log(answer);
