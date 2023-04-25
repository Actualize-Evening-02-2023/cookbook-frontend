import { Link } from "react-router-dom";
export function RecipesIndex(props) {
  return (
    <div id="recipes-index">
      <h1>All recipes</h1>
      <div className="row">
        {props.recipes.map((recipe) => (
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
