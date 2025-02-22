const goalsFinals = (fifaData) => {
  const countGoals = {};

  const finalMatches = fifaData.filter((match) => match['Stage'] === 'Final');

  finalMatches.forEach((match) => {
    let homeTeam = match['Home Team Name'];
    let homeGoals = match['Home Team Goals'];

    let awayTeam = match['Away Team Name'];
    let awayGoals = match['Away Team Goals'];

    if (!countGoals[homeTeam]) {
      countGoals[homeTeam] = 0;
    }
    countGoals[homeTeam] += homeGoals;

    if (!countGoals[awayTeam]) {
      countGoals[awayTeam] = 0;
    }
    countGoals[awayTeam] += awayGoals;
  });

  return countGoals;
};
