import type { Team } from "../../App/providers/StoreProvider/config/CardList/CardListTypes";

export interface User{
    name: string,
    kills: number
}
export interface matchStats {
    points: string,
    place: number,
    totalKills: number
}
export interface CommandCardProps {
    team: Team; 
  }