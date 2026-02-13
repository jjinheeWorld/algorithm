/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {
    const dp = Array.from({ length : m }, () => Array(n).fill(-1));
    
    for (let r = 0; r < m; r++) {
        dp[r][0] = 1;
    }

    for (let c = 0; c < n; c++) {
        dp[0][c] = 1;
    }

    for (let r = 1; r < m; r++) {
        for (c = 1; c < n; c++) {
            if (dp[r][c] === -1) {
                dp[r][c] = dp[r][c - 1] + dp[r - 1][c];
            }
        }
    }

    return dp[m - 1][n - 1];
};