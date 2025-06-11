function solution(players, callings) {
    const playerIndex = {};
    
    players.forEach((player, index) => {
        playerIndex[player] = index;
    });
    
    for (let name of callings) {
        const index = playerIndex[name];
        const frontPlayer = players[index - 1];
        
        players[index - 1] = name;
        players[index] = frontPlayer;
        
        playerIndex[name]--;
        playerIndex[frontPlayer]++;
    }
     return players;
}