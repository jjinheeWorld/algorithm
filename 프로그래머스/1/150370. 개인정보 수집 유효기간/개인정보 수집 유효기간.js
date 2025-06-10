function returnNumberDate(today) {
    const [year, month, day] = today.split(".").map(Number);
    return year * 12 * 28 + month * 28 + day;
}

function solution(today, terms, privacies) {
    const answer = [];
    
    // terms를 Map으로 변환
    const termsMap = new Map();
    for (const term of terms) {
        const [type, duration] = term.split(" ");
        termsMap.set(type, Number(duration));
    }
    
    const todayNumberDate = returnNumberDate(today);
    privacies.forEach((privacy, index) => {
        const [date, type] = privacy.split(" ");
        const startNumberDate = returnNumberDate(date);
        const duration = termsMap.get(type);
        
        // 유효기간 종료일 계산
        const expNumberDate = startNumberDate + duration * 28 - 1;
        
        if (expNumberDate < todayNumberDate) answer.push(index + 1)
    });
    return answer;
}