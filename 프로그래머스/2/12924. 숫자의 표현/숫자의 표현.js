function solution(n) {
    let count = 0;
    let sum = 0;
    let left = 1;
    for (let right = 1; right <= n; right++) {
        sum += right;
        if (sum === n) count++;
        while (sum > n) {
            sum -= left;
            left++;
            if (sum === n) count++;
        }
    }
    return count;
}