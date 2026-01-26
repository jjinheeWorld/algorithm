function solution(genres, plays) {
  const genreTotalMap = new Map(); 
  const genreSongsMap = new Map();  
  const n = genres.length;
  const answer = [];

  for (let i = 0; i < n; i++) {
    const genre = genres[i];
    const play = plays[i];

    if (!genreTotalMap.has(genre)) genreTotalMap.set(genre, play); 
    else genreTotalMap.set(genre, genreTotalMap.get(genre) + play);

    if (!genreSongsMap.has(genre)) genreSongsMap.set(genre, [{ index: i, plays: play }]);
    else genreSongsMap.get(genre).push({ index: i, plays: play });
  }

  const genreRank = [...genreTotalMap].sort((a, b) => b[1] - a[1]);

  for (const [genre] of genreRank) {
    const sortedSongs = genreSongsMap.get(genre);
    sortedSongs.sort((a, b) => { 
        if (a.plays === b.plays) return a.index - b.index;
        else return b.plays - a.plays; 
    })
      
    for (let i = 0; i < Math.min(2, sortedSongs.length); i++) {
      answer.push(sortedSongs[i].index);
    }
  }

  return answer;
}
