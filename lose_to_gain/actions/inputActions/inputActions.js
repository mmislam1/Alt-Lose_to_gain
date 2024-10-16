import {useDispatch} from 'react-redux'


export const pieChartUpdate=(pieChart)=>(dispatch)=>{
    dispatch({type: 'UPDATE_PIECHART_VALUE', payload: pieChart})
}
