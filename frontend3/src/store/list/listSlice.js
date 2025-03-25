import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
    name: 'list',
    initialState: [],
    reducers: {
        addFood: (state, action) => {
            state.push(action.payload);
        },
        removeFood: (state, action) => {
            return state.filter((food) => food.id !== action.payload);
        },
        updateFood: (state, action) => {
            const index = state.findIndex((food) => food.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },
});

export const { load } = listSlice.actions;

export default listSlice.reducer;
