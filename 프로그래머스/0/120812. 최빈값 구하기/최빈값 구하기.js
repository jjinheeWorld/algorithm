function solution(array) {
    const sH = new Map();
    for (const number of array) {
        if (sH.has(number)) sH.set(number, sH.get(number) + 1);
        else sH.set(number, 1);
    }
    const sorted = [...sH.entries()].sort((a, b) => b[1] - a[1]);
    if (sorted.length > 1 && sorted[0][1] === sorted[1][1]) return -1;
    return sorted[0][0];
}