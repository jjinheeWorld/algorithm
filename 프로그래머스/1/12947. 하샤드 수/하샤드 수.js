function solution(x) {
    const sum = String(x).split("").map(Number).reduce((acc, v) => acc + v, 0);

    return x % sum === 0;
}