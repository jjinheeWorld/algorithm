function solution(N, stages) {
    const sH = new Map(Array.from({ length: N }, (_, i) => [i + 1, 0])); // [스테이지 번호, 실패율]
    // 스테이지 오름차순 정렬
    stages.sort((a, b) => a - b);
    // 스테이지마다 실패율 계산
    for (let pos = 1; pos <= N; pos++) {
        const total = stages.filter(stage => stage >= pos).length;
        const fail = stages.filter(stage => stage === pos).length;
        sH.set(pos, fail / total);
    }
    // 실패율이 높은 스테이지부터 내림차순 정렬
    const answer = [...sH].sort((a, b) => {
        if (a[1] !== b[1]) return b[1] - a[1];
        else return a[0] - b[0];
    });
    
    return answer.map(([stage]) => stage);
}