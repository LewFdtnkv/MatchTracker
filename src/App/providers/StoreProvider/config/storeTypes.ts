import type { CardsState } from "../../../../Entities/CommandCard";
import type { Status } from "../../../../Widgets/StatusWindow";

export interface RootState {
  cards: CardsState;
  status: Status;
}