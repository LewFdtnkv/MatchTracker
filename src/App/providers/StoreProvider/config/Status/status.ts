import {createSlice} from '@reduxjs/toolkit';
import {Status} from './StatusTypes';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    status: Status.AllStatus
};

const statusSlice = createSlice({
    name: 'status', 
    initialState,
    reducers:{
        handleChangeStatus(state, action: PayloadAction<Status>) {
            state.status = action.payload;
        }
    }
});

export const {handleChangeStatus} = statusSlice.actions;
export default statusSlice.reducer;