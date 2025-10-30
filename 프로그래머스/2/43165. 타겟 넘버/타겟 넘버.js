function solution(numbers, target) {
    let count = 0;
    const dfs = (i, sum) => {
        if (i === numbers.length) {
            if (sum === target) count++;
            return;
        }
        dfs(i + 1, sum + numbers[i]);
        dfs(i + 1, sum - numbers[i]);
    }
    dfs(0, 0);
    return count;
}