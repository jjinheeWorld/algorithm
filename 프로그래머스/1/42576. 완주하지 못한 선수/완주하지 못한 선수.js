function solution(participant, completion) {
    const players = new Map();
    
    for (const player of participant) {
        if (!players.has(player)) players.set(player, 1);
        else players.set(player, players.get(player) + 1);
    }
    
    for (const player of completion) {
        if (players.get(player) > 1) players.set(player, players.get(player) - 1);
        else players.delete(player);
    }
    
    return players.keys().next().value;
}