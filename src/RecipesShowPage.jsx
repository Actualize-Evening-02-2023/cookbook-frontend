import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function RecipesShowPage() {
  const [recipe, setRecipe] = useState({});
  const params = useParams();

  const handleShowRecipe = () => {
    axios.get(`/recipes/${params.id}.json`).then(response => {
      setRecipe(response.data);
    });
  };

  useEffect(handleShowRecipe, []);

  return (
    <div id="recipes-show">
      <h2>{recipe.title}</h2>
      <img src={recipe.image_url} alt="" />
      <p>Chef: {recipe.chef}</p>
      <p>Prep Time:{recipe.friendly_prep_time}</p>

      <ul>
        {recipe?.ingredients_list ? (
          recipe.ingredients_list.map(ingredient => <li key={ingredient}>{ingredient}</li>)
        ) : (
          <p>Ingredients: No ingredients for this recipe</p>
        )}
      </ul>
    </div>
  );
}
