import { results } from "../../../../../Shared/ResultWindow/index";
import type { Card, Player, Team } from "../../../../../Entities/CommandCard/index";

const getRandomStatus = (): results => {
  const statuses: results[] = [
    results.Live,
    results.Finished,
    results.MatchPreparing,
  ];
  return statuses[Math.floor(Math.random() * statuses.length)];
};
const generateRandomPlayer = (): Player => ({
  name: `Player${Math.floor(Math.random() * 100)}`,
  kills: Math.floor(Math.random() * 10),
});
const generateRandomTeam = (): Team => {
  const playerCount = 3; 
  const players = Array.from({ length: playerCount }, generateRandomPlayer);
  const totalKills = players.reduce((sum, player) => sum + player.kills, 0);

  return {
    name: `Command${Math.floor(Math.random() * 10)}`,
    players: players.map((p) => p.name),
    kills: players.map((p) => p.kills),
    points: Math.floor(Math.random() * 30),
    place: Math.floor(Math.random() * 5) + 1,
    totalKills,
  };
};

export const generateRandomCard = (): Card => {
    const status = getRandomStatus();
    let team1 = generateRandomTeam()
    let team2 = generateRandomTeam()
    while(team1.name === team2.name)team2 = generateRandomTeam()
    return {
        status,
        score: status !==results.MatchPreparing ?`${Math.floor(Math.random() * 5)} : ${Math.floor(Math.random() * 5)}`: '0 : 0',
        active: false, 
        teams: [team1, team2]
    }
};