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
      return await fetch('https://api.spoonacular.com/food/ingredients/search?apiKey=39ea81ddbf784ac6b67ef9ee105df6d4&query=' + input)
                       .then(response => response.json())
                       .then(data => {
                          setFoodList(data.results)
                          setFoodListDefault(data.results)
                          setInput(input)
                        });}

  useEffect( () => {fetchData()},[]);

  return (
    <>
      <h1>Food List</h1>
      <div className = "search">
      <SearchBar
       input={input}
       onChange={updateInput}
      />
      </div>
      <div className = "buttons">
      <FoodList foodList={foodList}/>
      </div>
    </>
   );
}

export default SearchPage