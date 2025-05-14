import { createAsyncThunk } from '@reduxjs/toolkit';
import {generateRandomCard} from '../../index'
export const FetchData = createAsyncThunk(
    'data/fetchData',
    async ()=>{
        const response = generateRandomCard();
        return response
    }
)
    


