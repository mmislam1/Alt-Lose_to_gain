import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    foods: [{id: 1, text: "Hello world"}]
}



export const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        addfood: (state, action) => {
            const food = {
                id: nanoid(), 
                text: action.payload
            }
            state.foods.push(food)
        },
        removefood: (state, action) => {
            state.foods = state.foods.filter((food) => food.id !== action.payload )
        },
    }
})

export const {addfood, removefood} = foodSlice.actions

export default foodSlice.reducer