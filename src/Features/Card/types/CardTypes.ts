import type { Team } from "../../../Entities/CommandCard/index";
import type { results } from "../../../Shared/ResultWindow/index";

export interface CardProps {
    status: results;
    score: string;
    active: boolean;
    teams: Team[];
    index: number
  }