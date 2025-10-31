function solution(n, computers) {
    const visited = Array(n).fill(false);
    let count = 0;
    
    const dfs = (node) => {
        visited[node] = true;
        for (let next = 0; next < n; next++) {
            if (node === next) continue;
            if (computers[node][next] === 1 && !visited[next]) dfs(next);
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            count++;
        }
    }
    
    return count;
}