import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    
}



export const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        getfood: (state, action) => {
            const { food } = {
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

export const {getfood, removefood} = foodSlice.actions

export default foodSlice.reducer