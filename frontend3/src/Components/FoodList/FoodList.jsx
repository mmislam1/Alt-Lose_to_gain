import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GeneralListItem from '../List_Item/General_list_item/GeneralListItem'
import SelectedListItem from '../List_Item/Selected_list_item/SelectedListItem'
import Total_of_list from '../List_Item/Total_of_list/Total_of_list'

const FoodList = () => {

  const foodItems = useSelector(state => state.foodItems)
  const [selectedItem, setSelectedItem] = useState(null);

  let flag = 0
  
  const handleSelect = (id) => {
    setSelectedId(id);
  };

  const handleDeselect = () => {
    setSelectedId(null);
  };


  return (
    
      <div className='flex flex-row border-1 border-green-500 rounded-md'>
      {
        
        foodItems.map((item) => {
          if (flag === 0) {
            flag = 1
          }
          else {
            return <div class="w-full h-[1px] bg-black-400"></div>
          }
          if (item.id===selectedItem) {
            return <SelectedListItem key={item.id} item={item} onDeselect={handleDeselect} />
          }
          else {
            return <GeneralListItem key={item.id} item={item} onSelect={handleSelect} />
          }
          
        })
      }
      <Total_of_list/>
        
    </div>

  )
}

export default FoodList