import axios from "axios";
import { useState, useEffect } from "react";
import { RecipesNew } from "./RecipesNew";
import { RecipesIndex } from "./RecipesIndex";
import { Modal } from "./Modal";
import { RecipesShow } from "./RecipesShow";
import { Signup } from "./Signup";
import { Login } from "./Login";

export function Content() {
  // ALLLLL JavaScript (NO HTML)

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

  const handleCreateRecipe = (params) => {
    axios.post("http://localhost:3000/recipes.json", params).then((response) => {
      console.log(response);

      // adds new recipe to array!
      setRecipes([...recipes, response.data]);
    });
  };

  const handleUpdateRecipe = (params, id) => {
    axios.patch(`http://localhost:3000/recipes/${id}.json`, params).then((response) => {
      console.log(response.data);
      setCurrentRecipe(response.data);

      // replaces OLD recipe with edited/updated version!
      setRecipes(
        recipes.map((recipe) => {
          if (recipe.id === response.data.id) {
            return response.data;
          } else {
            return recipe;
          }
        })
      );
    });
  };

  useEffect(handleIndexRecipes, []);

  // HTML (CAN include some JavaScript too)
  return (
    <div className="container">
      <Signup />
      <Login />
      <RecipesNew onCreateRecipe={handleCreateRecipe} />
      <RecipesIndex recipes={recipes} onShowRecipe={handleShowRecipe} />
      <Modal show={isRecipesShowVisible} onClose={handleClose}>
        <RecipesShow recipe={currentRecipe} onUpdateRecipe={handleUpdateRecipe} />
      </Modal>
    </div>
  );
  // End HTML
}
