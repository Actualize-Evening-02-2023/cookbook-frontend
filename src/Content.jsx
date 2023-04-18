import axios from "axios";
import { useState, useEffect } from "react";
import { RecipesNew } from "./RecipesNew";
import { RecipesIndex } from "./RecipesIndex";

export function Content() {
  // ALLLLL JavaScript (NO HTML AT ALL)
  const [recipes, setRecipes] = useState([]);

  const handleIndexRecipes = () => {
    axios.get("http://localhost:3000/recipes.json").then(function (response) {
      console.log(response);
      setRecipes(response.data);
    });
  };

  useEffect(handleIndexRecipes, []);

  // HTML (CAN include some JavaScript too)
  return (
    <div>
      <RecipesNew />
      <RecipesIndex recipes={recipes} />
    </div>
  );
  // End HTML
}
