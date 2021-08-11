import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import FoodList from './FoodList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [foodListDefault, setFoodListDefault] = useState();
  const [foodList, setFoodList] = useState();

  const fetchData = async () => {
    return await fetch('https://api.spoonacular.com/food/ingredients/search?apiKey=39ea81ddbf784ac6b67ef9ee105df6d4&query=apple')
      .then(response => response.json())
      .then(data => {
         setFoodList(data.results)
         setFoodListDefault(data.results)
       });}

  const updateInput = async (input) => {
     const filtered = foodListDefault.filter(country => {
      return country.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setFoodList(filtered);
  }

  useEffect( () => {fetchData()},[]);

  return (
    <>
      <h1>Food List</h1>
      <SearchBar
       input={input}
       onChange={updateInput}
      />
      <FoodList foodList={foodList}/>
    </>
   );
}

export default SearchPage