import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pieChartUpdate } from '../actions/inputActions/inputActions'
import './input.css'

const InputFields = () => {
  const input = useSelector(state => state.input)

  const [values, setValues] = useState(input)

  const dispatch = useDispatch()

  const handleChangeCarbohydrate = (e) => {
    const val = values
    val.carb = parseInt(e.target.value)
    setValues(val)
    dispatch(pieChartUpdate(val))
  }
  const handleChangeFat = (e) => {
    const val = values
    val.fat = parseInt(e.target.value)
    setValues(val)
    dispatch(pieChartUpdate(val))
  }
  const handleChangeProtein = (e) => {
    const val = values
    val.protein = parseInt(e.target.value)
    setValues(val)
    dispatch(pieChartUpdate(val))
  }
  const handleChangeBurnt = (e) => {
    const val = values
    val.burnt = parseInt(e.target.value)
    setValues(val)
    dispatch(pieChartUpdate(val))
  }
  const handleChangeTarget = (e) => {
    const val = values
    val.trget = parseInt(e.target.value)
    setValues(val)
    dispatch(pieChartUpdate(val))
  }

  return (
    <div className='inputContainer'>
      <h3> Calories</h3>
      <label><h4>Fat</h4><input value={values.fat} onChange={handleChangeFat} type="number"></input></label>
      <label><h4>Protein</h4><input value={values.protein} onChange={handleChangeProtein} type="number"></input></label>
      <label><h4>Carbohydrate</h4><input value={values.carb} onChange={handleChangeCarbohydrate} type="number"></input></label>
      <h3> Burnt</h3>
      <label><h4>Burnt</h4><input value={values.burnt} onChange={handleChangeBurnt} type="number"></input></label>
      <h3> Target</h3>
      <label><h4>Target</h4><input value={values.trget} onChange={handleChangeTarget} type="number"></input></label>


    </div>
  )
}

export default InputFields