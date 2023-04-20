import axios from "axios";
import { useState, useEffect } from "react";
import { RecipesNew } from "./RecipesNew";
import { RecipesIndex } from "./RecipesIndex";
import { Modal } from "./Modal";
import { RecipesShow } from "./RecipesShow";
import { Signup } from "./Signup";
import { Login } from "./Login";

export function Content() {
  // ALLLLL JavaScript (NO HTML AT ALL)

  // variable, function to change, useState -> sets initial value for variable
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
    <div className="container">
      <Signup />
      <Login />
      <RecipesNew />
      <RecipesIndex recipes={recipes} onShowRecipe={handleShowRecipe} />
      <Modal show={isRecipesShowVisible} onClose={handleClose}>
        <RecipesShow recipe={currentRecipe} />
      </Modal>
    </div>
  );
  // End HTML
}
