import { createStore, configureStore, compose, applyMiddleware, combineReducers } from 'redux'
import { inputReducer } from './reducers/inputReducers/inputReducer'


import thunk from 'redux-thunk'

const initialState = {
    input: {
        fat: 10,
        protein: 20,
        carb: 30,
        trget: 500,
        burnt: 200,
    },


}


const reducer = combineReducers({
    input: inputReducer,
    foodItems: foodItemsReducer,
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))


export default store;