import React, { useState, useEffect } from 'react';
import WidgetList from './WidgetList';

const FoodList = ({foodList=[]}) => {
const [widgetList, setWidgetList] = useState([]);
  return (
    <>
    { foodList.map((data,index) => {
        if (data) {
          return (
            <button onClick={() => handleClick(data.name, widgetList, setWidgetList)} key={data.name}>
              <h1>{data.name}</h1>
	    </button>
    	   )
    	 }
    	 return null
    }) }
    </>
  );

}

const handleClick = (foodItem,widgetList, setWidgetList) => {
        console.log(foodItem);
        setWidgetList([...widgetList, foodItem]);
        console.log(widgetList);

    };



export default FoodList