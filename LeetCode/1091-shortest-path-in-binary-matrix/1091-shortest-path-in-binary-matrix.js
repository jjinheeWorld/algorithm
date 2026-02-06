/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = function(grid) {
    const row = grid.length;
    const column = grid[0].length;
    const queue = [];
    const visited = Array.from({ length: row }, () => Array(column).fill(false));

    if (grid[0][0] !== 0 || grid[row - 1][column - 1] !== 0) return -1;

    const dx = [-1, 1, 0, 0, -1, 1, 1, -1];
    const dy = [0, 0, -1, 1, 1, 1, -1, -1];

    queue.push([0, 0, 1]);
    visited[0][0] = true;

    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();
        if (x === row - 1 && y === column - 1) return dist;

        for (let i = 0; i < 8; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= 0 && nx < row && ny >= 0 && ny < column && !visited[nx][ny] && grid[nx][ny] === 0) {
                queue.push([nx, ny, dist + 1]);
                visited[nx][ny] = true;
            }
        }
    }
    
    return -1;
};