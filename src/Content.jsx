import axios from "axios";
import { useState, useEffect } from "react";
import { RecipesNew } from "./RecipesNew";
import { RecipesIndex } from "./RecipesIndex";
import { Modal } from "./Modal";

export function Content() {
  // ALLLLL JavaScript (NO HTML AT ALL)
  const [recipes, setRecipes] = useState([]);
  const [isRecipesShowVisible, setIsRecipesShowVisible] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState({});

  const handleIndexRecipes = () => {
    axios.get("http://localhost:3000/recipes.json").then(function (response) {
      console.log(response);
      setRecipes(response.data);
    });
  };

  const handleShowRecipe = (recipe) => {
    setIsRecipesShowVisible(true);
    setCurrentRecipe(recipe);
  };

  const handleClose = () => {
    setIsRecipesShowVisible(false);
  };

  useEffect(handleIndexRecipes, []);

  // HTML (CAN include some JavaScript too)
  return (
    <div>
      <RecipesNew />
      <RecipesIndex recipes={recipes} onShowRecipe={handleShowRecipe} />
      <Modal show={isRecipesShowVisible} onClose={handleClose}>
        <h2>{currentRecipe.title}</h2>
        <p>Chef: {currentRecipe.chef}</p>
        <p>Ingredients: {currentRecipe.ingredients}</p>
        <p>Directions: {currentRecipe.directions}</p>
      </Modal>
    </div>
  );
  // End HTML
}
