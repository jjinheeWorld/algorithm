function solution(lottos, win_nums) {
    const rankTable = [6, 6, 5, 4, 3, 2, 1];
    const winSet = new Set(win_nums);
    
    let unknownCount = 0;
    let matchCount = 0;
    
    for (const n of lottos) {
        if (n === 0) unknownCount++;
        else if (winSet.has(n)) matchCount++;
    }
    
    const bestCount = matchCount + unknownCount;
    const worstCount = matchCount;
    
    const bestRank = rankTable[bestCount];
    const worstRank = rankTable[worstCount];
    
    return [bestRank, worstRank];
}