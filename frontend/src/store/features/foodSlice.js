import { createSlice } from '@reduxjs/toolkit';

const foodSlice = createSlice({
    name: 'food',
    initialState: { value: 0 },
    reducers: {
        
    },
});

export const { load } = foodSlice.actions;

export default foodSlice.reducer;
