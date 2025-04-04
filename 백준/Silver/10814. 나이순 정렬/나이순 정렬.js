const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const users = input.slice(1).map((user, index) => {
  const [age, name] = user.split(" ");
  return [age, name, index];
});

users.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
  return a[2] - b[2];
});

console.log(users.map((user) => `${user[0]} ${user[1]}`).join("\n"));
