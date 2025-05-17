import type { Team } from "../../../Entities/CommandCard/index";
import type { ResultEnum } from "../../../Features/ResultWindow/index";

export interface CardProps {
    status: ResultEnum;
    score: string;
    active: boolean;
    teams: Team[];
    index: number
  }