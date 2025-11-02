function solution(n) {
    let count = 1;
    let total = 6;
    while (total % n !== 0) {
        total += 6;
        count++;
    }
    return count;
}