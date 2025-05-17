import type { ResultEnum } from "../../../../Features/ResultWindow/index"
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
    status: ResultEnum;
    score: string;
    active: boolean;
    teams: Team[];
  }
  
  export interface CardsState {
    cards: Card[];
  }