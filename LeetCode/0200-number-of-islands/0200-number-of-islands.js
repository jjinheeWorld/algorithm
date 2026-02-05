/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const visited = Array.from({ length : m }, () => Array(n).fill(false));
    let count = 0;

    const dfs = (row, column) => {
        if (row < 0 || row >= m || column < 0 || column >= n) return;
        if (visited[row][column] || grid[row][column] === "0") return;

        visited[row][column] = true;

        dfs(row + 1, column);
        dfs(row - 1, column);
        dfs(row, column + 1);
        dfs(row, column - 1); 
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j] && grid[i][j] === "1") {
                count++;
                dfs(i, j);
            }
        }
    }
    
    return count;
};