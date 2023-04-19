export function RecipesShow(props) {
  console.log("props for recipes show", props.recipe);
  return (
    <div>
      <h2>{props.recipe.title}</h2>
      <p>Chef: {props.recipe.chef}</p>
      <p>Prep Time:{props.recipe.friendly_prep_time}</p>

      <ul>
        {props.recipe?.ingredients_list ? (
          props.recipe.ingredients_list.map((ingredient) => <li key={ingredient}>{ingredient}</li>)
        ) : (
          <p>Ingredients: No ingredients for this recipe</p>
        )}
      </ul>
    </div>
  );
}
