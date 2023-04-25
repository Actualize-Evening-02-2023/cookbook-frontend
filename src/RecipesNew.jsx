export function RecipesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    props.onCreateRecipe(params);
    event.target.reset();
    window.location.href = "/";
  };
  return (
    <div id="recipes-new">
      <h1>New recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Chef: <input name="chef" type="text" />
        </div>
        <div>
          Ingredients: <input name="ingredients" type="text" />
        </div>
        <div>
          Directions: <input name="directions" type="text" />
        </div>
        <div>
          Prep Time: <input name="prep_time" type="number" />
        </div>
        <div>
          Image URL: <input name="image_url" type="text" />
        </div>
        <button type="submit">Create recipe</button>
      </form>
    </div>
  );
}
