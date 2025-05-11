import { createAsyncThunk } from '@reduxjs/toolkit';
import {generateRandomCard} from './Sample'
export const FetchData = createAsyncThunk(
    'data/fetchData',
    async ()=>{
        const response = generateRandomCard();
        return response
    }
)
    


