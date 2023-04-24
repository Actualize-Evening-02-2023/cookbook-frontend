export function RecipesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateRecipe(params, props.recipe.id);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDeleteRecipe(props.recipe);
  };

  return (
    <div>
      <h2>{props.recipe.title}</h2>
      <img src={props.recipe.image_url} alt="" />
      <p>Chef: {props.recipe.chef}</p>
      <p>Prep Time:{props.recipe.friendly_prep_time}</p>

      <ul>
        {props.recipe?.ingredients_list ? (
          props.recipe.ingredients_list.map((ingredient) => <li key={ingredient}>{ingredient}</li>)
        ) : (
          <p>Ingredients: No ingredients for this recipe</p>
        )}
      </ul>
      <button onClick={handleClick} class="btn btn-danger">
        Delete Recipe
      </button>
      <h2>Edit recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.recipe.title} name="title" type="text" />
        </div>
        <div>
          Chef: <input defaultValue={props.recipe.chef} name="chef" type="text" />
        </div>
        <div>
          Ingredients: <input defaultValue={props.recipe.ingredients} name="ingredients" type="text" />
        </div>
        <div>
          Directions: <input defaultValue={props.recipe.directions} name="directions" type="text" />
        </div>
        <div>
          Prep Time: <input defaultValue={props.recipe.prep_time} name="prep_time" type="text" />
        </div>
        <div>
          Image URL: <input defaultValue={props.recipe.image_url} name="image_url" type="text" />
        </div>
        <button type="submit">Edit recipe</button>
      </form>
    </div>
  );
}
