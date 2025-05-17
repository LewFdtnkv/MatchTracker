import type { CardsState } from "../../../../Entities/CommandCard/index";
import type { StatusEnum } from "../../../../Features/model/index";

export interface RootState {
  cards: CardsState;
  status:{
    status: StatusEnum;
  }
  
}