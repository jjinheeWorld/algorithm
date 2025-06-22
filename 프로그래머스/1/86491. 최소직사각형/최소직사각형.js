function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    
    for (let size of sizes) {
        size.sort((a, b) => b - a);
        const [w, h] = size;
        maxWidth = Math.max(maxWidth, w);
        maxHeight = Math.max(maxHeight, h);
    }
    
    return maxWidth * maxHeight;
}