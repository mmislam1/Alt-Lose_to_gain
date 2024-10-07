import React from 'react'
import {GeneralListItem} from '../../List_Item/General_list_item/GeneralListItem.jsx'
import { useState, useEffect } from 'react';
import {SelectedListItem} from '../../List_Item/Selected_list_item/SelectedListItem.jsx';

const Foods = () => {
  const [items, setItems] = useState([]);      
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);

  
  const fetchItems = async () => {
    try {
      const response = await fetch('');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setItems(data);   
      setLoading(false); 
    } catch (err) {
      setError(err);     
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchItems(); 
  }, []); 

  
  return (
    <div>
      <h1>Food List</h1>
      
      <ul>
        {items.map((item) => {
          
              if(selected===item.id){
              return <li key={item.id}><SelectedListItem item={item} /></li>
            }
            else{
              return <li key={item.id}><GeneralListItem item={item} /></li>
            }
          
        })}
      </ul>
    </div>
  );
};

export default Foods;


