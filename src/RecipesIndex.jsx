import { Link } from "react-router-dom";
import { useState } from "react";
export function RecipesIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div id="recipes-index">
      <h1>All recipes</h1>
      <div>
        Search Recipes:{" "}
        <input
          list="titles"
          value={searchFilter}
          type="text"
          onChange={event => {
            setSearchFilter(event.target.value);
          }}
        />
        <datalist id="titles">
          {props.recipes.map(recipe => (
            <option key={recipe.title} value={recipe.title}></option>
          ))}
        </datalist>
      </div>
      <div className="row">
        {props.recipes
          .filter(recipe => recipe.title.toLowerCase().includes(searchFilter.toLowerCase()))
          .map(recipe => (
            <div key={recipe.id} className="recipes col mb-3">
              <div className="card">
                <img src={recipe?.image_url} className="card-img-top" />
                <div className="card-body">
                  <h2 className="card-title">{recipe?.title}</h2>
                  <p className="card-text">{recipe?.chef}</p>
                  <button className="btn btn-primary" onClick={() => props.onShowRecipe(recipe)}>
                    More Info!
                  </button>
                  <Link to={`/recipes/${recipe.id}`} className="btn btn-secondary">
                    View Recipe
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
