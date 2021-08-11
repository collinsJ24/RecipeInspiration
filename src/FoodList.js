import React from 'react';

const FoodList = ({foodList=[]}) => {
  return (
    <>
    { foodList.map((data,index) => {
        if (data) {
          return (
            <button onClick={() => this.handleClick()} key={data.name}>
              <h1>{data.name}</h1>

	    </button>
    	   )
    	 }
    	 return null
    }) }
    </>
  );
}

 function handleClick() {
        console.log('in cardClick');
    }

export default FoodList