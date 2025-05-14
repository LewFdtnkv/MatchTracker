import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CardsState } from '../../../index';
import{ results } from '../../../../../Shared/ResultWindow/index';
import {FetchData} from '../../../../../App/providers/StoreProvider/index';

const initialState: CardsState = {
  cards: [
    {
      status: results.Live,
      score: '2 : 3',
      active: false,
      teams: [
        {
          name: 'Command 1',
          players: ['User1', 'User2', 'User3'],
          kills: [4, 5, 6],
          points: 50,
          place: 7,
          totalKills: 15
        },
        {
          name: 'Command 2',
          players: ['User1', 'User2', 'User3'],
          kills: [4, 6, 6],
          points: 55,
          place: 6,
          totalKills: 16
        }
      ]
    },
    {
      status: results.Finished,
      score: '2 : 4',
      active: false,
      teams: [
        {
          name: 'Command 3',
          players: ['User1', 'User2', 'User3'],
          kills: [4, 5, 6],
          points: 50,
          place: 7,
          totalKills: 15
        },
        {
          name: 'Command 4',
          players: ['User1', 'User2', 'User3'],
          kills: [4, 10, 6],
          points: 60,
          place: 4,
          totalKills: 20
        }
      ] 
    },
    {
      status: results.MatchPreparing,
      score: '0 : 0',
      active: false,
      teams: [
        {
          name: 'Command 3',
          players: ['User1', 'User2', 'User3'],
          kills: [0, 0, 0],
          points: 0,
          place: 0,
          totalKills: 0
        },
        {
          name: 'Command 4',
          players: ['User1', 'User2', 'User3'],
          kills: [0, 0, 0],
          points: 0,
          place: 0,
          totalKills: 0
        }
      ] 
    }
  ]
};

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    handleChangeActive(state, action: PayloadAction<{ cardIndex: number}>) {
      const { cardIndex} = action.payload;
      state.cards[cardIndex].active = !state.cards[cardIndex].active
       
    }
  },
  extraReducers: (builder)=>{
    builder
    // .addCase(FetchData.pending, (state)=>{})
    .addCase(FetchData.fulfilled, (state, action)=>{
      state.cards.push(action.payload);
    })
    .addCase(FetchData.rejected, (_state, action)=>{
      console.error('Нет данных для добавления', action.error.message)
    })
  }
});

export const { handleChangeActive} = cardSlice.actions;
export default cardSlice.reducer;