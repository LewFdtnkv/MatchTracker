import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './CardList/CardList';
import statusReducer from './Status/status';
import type { CardsState } from './CardList/CardListTypes';
import type { Status} from './Status/StatusTypes';

export interface RootState {
  cards: CardsState;
  status: Status;
}

const store = configureStore({
  reducer: {
    cards: cardReducer,
    status: statusReducer
  },

});

export default store;

export type AppDispatch = typeof store.dispatch;