import type { Team } from "../../App/providers/StoreProvider/config/CardList/CardListTypes";
import type { results } from "../../Widgets/ResultWindow/ResultTypes";

export interface CardProps {
    status: results;
    score: string;
    active: boolean;
    teams: Team[];
    index: number
  }