import React from 'react'

const GeneralListItem = ({item}) => {
  return (
    <div key={item.id} className='flex'>
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
      <div className='justify-center items-center'>
        <button>+</button>
      </div>
    </div>
  )
}

export default GeneralListItem