import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../../../../Entities/model/CardList/slice/CardList';
import statusReducer from '../../../../Features/model/slice/status';
import type { CardsState } from '../../../../Entities/CommandCard/index';
import type { StatusEnum} from '../../../../Features/model/index';

export interface RootState {
  cards: CardsState;
  status: StatusEnum;
}

const store = configureStore({
  reducer: {
    cards: cardReducer,
    status: statusReducer
  },

});

export default store;

export type AppDispatch = typeof store.dispatch;