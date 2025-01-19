import {createSlice, nanoid , createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    
}



export const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        getfood: (state) => {
            const { food } = {
                // get request for foodlist


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