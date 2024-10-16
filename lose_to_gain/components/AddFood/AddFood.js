import React from 'react'
import './AddFood.css'

const AddFood = () => {
    return (
        <div className='AddFoodContainer'>
            <div className='AddFood'>
                <div className='image'></div>
                <div className='discription'><h2>Add Breakfast</h2><p></p></div>
                <div className='button'><h1>+</h1></div>
            </div>
            <div className='AddFood'>
                <div className='image'></div>
                <div className='discription'><h2>Add Lunch</h2><p></p></div>
                <div className='button'><h1>+</h1></div>
            </div>
            <div className='AddFood'>
                <div className='image'></div>
                <div className='discription'><h2>Add Dinner</h2><p></p></div>
                <div className='button'><h1>+</h1></div>
            </div>
            <div className='AddFood'>
                <div className='image'></div>
                <div className='discription'><h2>Add Snacks</h2><p></p></div>
                <div className='button'><h1>+</h1></div>
            </div>

        </div>
    )
}

export default AddFood