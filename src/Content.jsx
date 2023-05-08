import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { RecipesNew } from "./RecipesNew";
import { RecipesIndex } from "./RecipesIndex";
import { Modal } from "./Modal";
import { RecipesShow } from "./RecipesShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { RecipesShowPage } from "./RecipesShowPage";

export function Content() {
  // ALLLLL JavaScript (NO HTML)

  // variable, function to change, useState -> sets initial value for variable
  const [recipes, setRecipes] = useState([]);
  const [isRecipesShowVisible, setIsRecipesShowVisible] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState({});

  const handleIndexRecipes = () => {
    axios.get("http://localhost:3000/recipes.json").then(function(response) {
      console.log(response);
      setRecipes(response.data);
    });
  };

  const handleShowRecipe = recipe => {
    setIsRecipesShowVisible(true);
    setCurrentRecipe(recipe);
  };

  const handleClose = () => {
    setIsRecipesShowVisible(false);
  };

  const handleUpdateRecipe = (params, id) => {
    axios.patch(`http://localhost:3000/recipes/${id}.json`, params).then(response => {
      console.log(response.data);
      setCurrentRecipe(response.data);

      // replaces OLD recipe with edited/updated version!
      setRecipes(
        recipes.map(recipe => {
          if (recipe.id === response.data.id) {
            return response.data;
          } else {
            return recipe;
          }
        })
      );
    });
  };

  const handleDestroyRecipe = recipe => {
    axios.delete(`http://localhost:3000/recipes/${recipe.id}.json`).then(response => {
      setRecipes(recipes.filter(r => r.id !== recipe.id));
      handleClose();
    });
  };

  useEffect(handleIndexRecipes, []);

  // HTML (CAN include some JavaScript too)
  return (
    <div className="container">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recipes/new" element={<RecipesNew />} />
        <Route path="/recipes" element={<RecipesIndex recipes={recipes} onShowRecipe={handleShowRecipe} />} />
        <Route path="/" element={<RecipesIndex recipes={recipes} onShowRecipe={handleShowRecipe} />} />
        <Route path="/recipes/:id" element={<RecipesShowPage />} />
      </Routes>

      <Modal show={isRecipesShowVisible} onClose={handleClose}>
        <RecipesShow recipe={currentRecipe} onUpdateRecipe={handleUpdateRecipe} onDeleteRecipe={handleDestroyRecipe} />
      </Modal>
    </div>
  );
  // End HTML
}
