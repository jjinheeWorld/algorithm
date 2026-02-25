/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const networkDelayTime = function(times, n, k) {
    const costs = Array(n + 1).fill(-1);
    const graph = Array.from({ length: n + 1 }, () => []);
    const pq = [];
    times.forEach(item => {
        const [u, v, w] = item;
        graph[u].push([v, w]);
    });
    pq.push([k, 0]);

    while (pq.length > 0) {
        const [currentValue, currentCost] = pq.pop();
        if (costs[currentValue] === -1) {
            costs[currentValue] = currentCost;
            graph[currentValue].forEach(item => {
                const [nextValue, cost] = item;
                const nextCost = currentCost + cost;
                pq.push([nextValue, nextCost]);
            })
            pq.sort((a, b) => {
                if (a[1] > b[1]) return -1;
                else if (a[1] < b[1]) return 1;
                return 0;
            });
        }
    }
    costs.shift();
    const flag = costs.every(cost => {
        return cost !== -1;
    })
    if (flag) {
        return Math.max(...costs);
    }
    return -1;
};