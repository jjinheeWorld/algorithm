function countOnes(num) {
    return num.toString(2).replaceAll("0", "").length;
}

function solution(n) {
    const target = countOnes(n);

    while (true) {
        n++;
        if (countOnes(n) === target) return n;
    }
}