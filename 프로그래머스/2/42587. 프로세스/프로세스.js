function solution(priorities, location) {
    const queue = priorities.map((priority, index) => [priority, index]);
    let order = 0;
    
    while (queue.length > 0) {
        const current = queue.shift();
        if (queue.some(([priority, _]) => current[0] < priority)) queue.push(current);
        else {
            order++;
            if (current[1] === location) return order;
        }
    }
}