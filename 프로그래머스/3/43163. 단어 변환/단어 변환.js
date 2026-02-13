function canMove(str1, str2) {
    let diff = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) diff++;
        if (diff > 1) return false;
    }
    return diff === 1;
}

function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    
    const visited = Array(words.length).fill(false);
    const queue = [[begin, 0]];
    
    while (queue.length) {
        const [current, dist] = queue.shift();
        
        if (current === target) return dist;
        
        for (let i = 0; i < words.length; i++) {
            if (canMove(current, words[i]) && !visited[i]) {
                visited[i] = true;
                queue.push([words[i], dist + 1]);
            }
        }
    }
    
    return 0;
}