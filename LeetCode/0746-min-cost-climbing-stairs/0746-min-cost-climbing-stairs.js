/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function(cost) {
    const n = cost.length;
    const dp = Array(n + 1).fill(-1);
    dp[0] = 0;
    dp[1] = 0;

    for (let i = 2; i < n + 1; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }

    return dp[n];
};