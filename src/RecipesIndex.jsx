export function RecipesIndex(props) {
  return (
    <div id="recipes-index">
      <h1>All recipes</h1>
      {props.recipes.map((recipe) => (
        <div key={recipe.id} className="recipes">
          <h2>{recipe.title}</h2>
          <img src={recipe.image_url} />
          <p>{recipe.chef}</p>
          <button onClick={() => props.onShowRecipe(recipe)}>More Info!</button>
        </div>
      ))}
    </div>
  );
}
