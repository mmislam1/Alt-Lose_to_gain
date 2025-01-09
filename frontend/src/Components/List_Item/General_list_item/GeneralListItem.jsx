import React from 'react'

const GeneralListItem = ({item}) => {
  return (
    <div  className='flex'>
      <div><h5>{item }</h5></div>
      <div className='flex-row'>
        <div className='flex-col'>
          <h6>{macro}</h6>
          <h6>{macro_amount}</h6>
        </div>
        <div className='flex-col'>
          <h6>{macro}</h6>
          <h6>{macro_amount}</h6>
        </div>
        <div className='flex-col'>
          <h6>{macro}</h6>
          <h6>{macro_amount}</h6>
        </div>
      </div>
      <div className='justify-center items-center bg-green-400 font-bold'>
        <button>+</button>
      </div>
    </div>
  )
}

export default GeneralListItem