import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../../../../Entities/CommandCard/model/CardList/slice/CardList';
import statusReducer from '../../../../Widgets/StatusWindow/model/slice/status';
import type { CardsState } from '../../../../Entities/CommandCard/index';
import type { Status} from '../../../../Widgets/StatusWindow/index';

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