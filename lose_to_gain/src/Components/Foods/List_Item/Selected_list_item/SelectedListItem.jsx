import React from 'react'

const SelectedListItem = () => {
  return (
    <div>
      <div><h3>{item}</h3></div>
      <div>
        <div>
          <h6></h6>
          <h6></h6>
        </div>
        <div>
          <h6></h6>
          <h6></h6>
        </div>
        <div>
          <h6></h6>
          <h6></h6>
        </div>
      </div>
      <div>
        <input type='number'></input>
        <div>
          <h6>unit</h6>
        </div>
        <div>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </div>
  )
}

export default SelectedListItem