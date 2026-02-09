/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
    const dp = Array(n + 1).fill(-1);
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i < n + 1; i++) {
        dp[i] = dp[i - 2] + dp[i - 1];
    }

    return dp[n];
};