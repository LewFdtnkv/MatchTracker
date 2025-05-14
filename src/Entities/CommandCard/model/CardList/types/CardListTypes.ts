import type { results } from "../../../../../Shared/ResultWindow/index"
export interface Player {
    name: string;
    kills: number;
  }
  
  export interface Team {
    name: string;
    players: string[];
    kills: number[];
    points: number;
    place: number;
    totalKills: number;
  }
  
  export interface Card {
    status: results;
    score: string;
    active: boolean;
    teams: Team[];
  }
  
  export interface CardsState {
    cards: Card[];
  }