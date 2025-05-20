const fs = require("fs");
const S = +fs.readFileSync("/dev/stdin").toString().trim();

const visited = Array.from({ length: 1001 }, () => Array(1001).fill(false));
const queue = [];

queue.push([1, 0, 0]);
visited[1][0] = true;

while (queue.length > 0) {
  const [screen, clipboard, time] = queue.shift();
  if (screen === S) {
    console.log(time);
    break;
  }

  // 복사: 화면 -> 클립보드
  if (!visited[screen][screen]) {
    visited[screen][screen] = true;
    queue.push([screen, screen, time + 1]);
  }

  // 붙여넣기: 클립보드 -> 화면
  if (
    clipboard > 0 &&
    screen + clipboard <= 1000 &&
    !visited[screen + clipboard][clipboard]
  ) {
    visited[screen + clipboard][clipboard] = true;
    queue.push([screen + clipboard, clipboard, time + 1]);
  }

  // 삭제
  if (screen > 0 && !visited[screen - 1][clipboard]) {
    visited[screen - 1][clipboard] = true;
    queue.push([screen - 1, clipboard, time + 1]);
  }
}
