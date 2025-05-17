import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { StatusEnum } from '../types/StatusTypes';

const initialState = {
    status: StatusEnum.AllStatus
};

export const statusSlice = createSlice({
    name: 'status', 
    initialState,
    reducers:{
        handleChangeStatus(state, action: PayloadAction<StatusEnum>) {
            state.status = action.payload;
        }
    }
});

export const {handleChangeStatus} = statusSlice.actions;
export default statusSlice.reducer;