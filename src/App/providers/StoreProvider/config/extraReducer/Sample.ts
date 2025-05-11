import { results } from "../../../../../Widgets/ResultWindow/ResultTypes";
import type { Card, Player, Team } from "../CardList/CardListTypes";

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

export const generateRandomCard = (): Card => ({
  status: getRandomStatus(),
  score: `${Math.floor(Math.random() * 5)} : ${Math.floor(Math.random() * 5)}`,
  active: Math.random() > 0.5, 
  teams: Array.from({ length: 2 }, generateRandomTeam), 
});