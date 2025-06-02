function solution(k, m, score) {
    const answer = [];
    score.sort((a, b) => b - a);
    for (let i = 0; i < score.length; i += m) {
        const box = [];
        for (let j = i; j < i + m; j++) {
            if (!score[j]) break;
            box.push(score[j]);
        }
        if (box.length === m) {
            const minScore = Math.min(...box);
            answer.push(minScore * m);
        }
    }
    return answer.reduce((a, b) => a + b, 0);
}