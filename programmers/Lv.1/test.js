function solution(participant, completion) {
  const players = new Map();
  participant.forEach((player) => {
    if (players.has(player)) players.set(player, players.get(player) + 1);
    else players.set(player, 1);
  });
  completion.forEach((player) => {
    if (players.get(player) > 1) players.set(player, players.get(player) - 1);
    else players.delete(player);
  });

  return players.keys().next().value;
}
