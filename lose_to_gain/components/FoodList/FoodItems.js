import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default FoodList = ({ items }) => {

    return (
        
        <div key={item.key} className='listItem'>
            <div className='itemName'>
                {item.name}
            </div>
            <div className='calorieDist'>

            </div>
            <div className='selectButton'>

            </div>
        </div>
    )

}