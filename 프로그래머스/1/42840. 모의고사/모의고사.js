function solution(answers) {
    const result = [];
    const pattern1 = [1, 2, 3, 4, 5];
    const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const scores = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === pattern1[i % pattern1.length]) scores[0]++;
        if (answers[i] === pattern2[i % pattern2.length]) scores[1]++;
        if (answers[i] === pattern3[i % pattern3.length]) scores[2]++;
    }
    
    const maxScore = Math.max(...scores);
    scores.forEach((score, index) => {
        if (score === maxScore) result.push(index + 1);
    })
    
    return result;
}