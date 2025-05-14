import type { Team } from "../../CommandCard/index";

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