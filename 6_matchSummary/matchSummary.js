const matchSumm = (homeTeam, awayTeam) => {
const result = [];
let sumHomeTeam = 0;
let sumAwayTeam = 0;
for (i = 0; i < 4; i++) {
    const randomHomeTeam = Math.floor(Math.random() * (26 - 12 + 1) + 12);
    const randomAwayTeam = Math.floor(
    Math.random() * (26 - 12 + 1) + 12
    );
    const period = `${
    i + 1
    }. Period: ${homeTeam} ${randomHomeTeam} - ${awayTeam} ${randomAwayTeam}`;
    result.push(period);
    sumHomeTeam += randomHomeTeam;
    sumAwayTeam += randomAwayTeam;
}
let matchResult =
    sumHomeTeam > sumAwayTeam
    ? 'won.'
    : sumHomeTeam < sumAwayTeam
    ? 'lost.'
    : 'drawn';
let allResult = `Match Result: ${homeTeam} ${sumHomeTeam} - ${sumAwayTeam} ${matchResult}`;
result.push(allResult);
return result;
};

console.log(matchSumm('Real Madrid', 'Barcelona'));
