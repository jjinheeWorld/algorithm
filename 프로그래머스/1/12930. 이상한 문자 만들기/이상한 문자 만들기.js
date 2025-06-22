function solution(s) {
    return s.split(" ").map(word => [...word].map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join("")).join(" ");
}