import React from 'react'

const SelectedListItem = () => {
  return (
    <div key='' className='flex'>
      <div><h3>{item}</h3></div>
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
      <div>
        <input type='number'></input>
        <div>
          <h6>unit</h6>
        </div>
        <div>
          <div className=''><button>-</button></div>
          <div className=''><button>+</button></div>
        </div>
      </div>
    </div>
  )
}

export default SelectedListItem