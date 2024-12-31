import { createSlice } from '@reduxjs/toolkit';

const foodSlice = createSlice({
    name: 'food',
    initialState: { value: 0 },
    reducers: {
        
    },
});

export const { increment, decrement, incrementByAmount } = foodSlice.actions;

export default foodSlice.reducer;
