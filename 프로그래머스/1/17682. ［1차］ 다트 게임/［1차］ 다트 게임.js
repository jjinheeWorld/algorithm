function solution(dartResult) {
    const regex = /\d{1,2}[SDT][*#]?/g; // 점수+보너스+옵션
    const parts = dartResult.match(regex);
    const bonusMap = new Map([["S", 1], ["D", 2], ["T", 3]]);
    const scores = [];
    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        
        // 1. 점수, 보너스, 옵션 분리
        const [_, number, bonus, option] = part.match(/(\d{1,2})([SDT])([*#]?)/);

        let score = parseInt(number);
        
        // 2. 보너스 계산 (제곱)
        score = number ** bonusMap.get(bonus);
        
        // 3. 옵션 처리
        if (option === "*") {
            score *= 2;
            // 이전 점수도 있으면 2배
            if (i > 0) scores[i - 1] *= 2;
        } else if (option === "#") {
            score *= -1; 
        }
        
        // 4. scores 배열에 추가
        scores.push(score);
    }
    
    // 5. 총점수 계산
    return scores.reduce((a, b) => a + b);
}