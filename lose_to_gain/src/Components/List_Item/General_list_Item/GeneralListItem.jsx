import React from 'react'

const GeneralListItem = () => {
  return (
    <div key='' className='flex'>
      <div><h5>{item }</h5></div>
      <div className='flex'>
        <div>
          <h6>{macro}</h6>
          <h6>{macro_amount}</h6>
        </div>
        <div>
          <h6>{macro}</h6>
          <h6>{macro_amount}</h6>
        </div>
        <div>
          <h6>{macro}</h6>
          <h6>{macro_amount}</h6>
        </div>
      </div>
      <div>
        <button>+</button>
      </div>
    </div>
  )
}

export default GeneralListItem