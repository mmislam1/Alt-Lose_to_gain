import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const FoodList = () => {

  const foodItems = useSelector(state => state.foodItems)




  return (
    <div className='foodListContainer'>
      <div className='foodList'>
        {
          foodItems.map((item)=><div></div>)
        }
        
    </div>
</div>
  )
}

export default FoodList