import { pieChartUpdate } from "../../actions/inputActions/inputActions";


export const inputReducer = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_PIECHART_VALUE':
            return { fat: action.payload.fat, protein: action.payload.protein, carb: action.payload.carb, trget: action.payload.trget, burnt: action.payload.burnt }
        default:
            return state
    }
}