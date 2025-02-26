import React from 'react'

const Total_of_list = () => {
  const totalCarb = useSelector((state) => state.totalCarb)
  const totalProtein = useSelector((state) => state.totalProtein)
  const totalFat = useSelector((state) => state.totalFat)
  
  return (
      
    <div className='flex flex-row justify-center items-center '>
        
        <div className='flex justify-center items-center'>
          <h6 className='font-bold text-red-500'>{totalFat}</h6>
        </div>
        <div className='flex justify-center items-center'>
          <h6 className='font-bold text-blue-500'>{totalCarb}</h6>
        </div>
        <div className='flex justify-center items-center'>
          <h6 className='font-bold text-green-500'>{totalProtein}</h6>
        </div>
        <div className='flex justify-center items-center'>
          <h6 className='font-bold text-black-800'>{totalProtein+totalCarb+totalFat}</h6>
        </div>
      </div>
    
  )
}

export default Total_of_list