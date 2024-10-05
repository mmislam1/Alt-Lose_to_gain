import React from 'react'
import GeneralListItem from "././List_Item/General_list_item/GeneralListItem.jsx"
import SelectedListItem from "././List_Item/Selected_list_item/SelectedListItem.jsx"
import { useState, useEffect } from 'react';

const Foods = () => {
  const [items, setItems] = useState([]);      
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);     

  
  const fetchItems = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
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
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Foods;


