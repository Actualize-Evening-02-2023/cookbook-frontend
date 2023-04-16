import axios from "axios";

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#recipes-index">All recipes</a> | <a href="#recipes-new">New recipe</a>
    </header>
  );
}

function RecipesNew() {
  return (
    <div id="recipes-new">
      <h1>New recipe</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Chef: <input type="text" />
        </div>
        <button type="submit">Create recipe</button>
      </form>
    </div>
  );
}

function RecipesIndex(props) {
  console.log(props);
  return (
    <div id="recipes-index">
      <h1>All recipes</h1>
      {props.recipes.map((recipe) => (
        <div key={recipe.id} className="recipes">
          <h2>{recipe.title}</h2>
          <img src={recipe.image_url} />
          <p>{recipe.chef}</p>
          <button>More Info!</button>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2023</p>
    </footer>
  );
}

function Content() {
  let recipes = [];

  const handleIndexRecipes = () => {
    axios.get("http://localhost:3000/recipes.json").then(function (response) {
      console.log(response);
      recipes = response.data;
    });
  };

  return (
    <div>
      <RecipesNew />
      <button onClick={handleIndexRecipes}>Load Recipes</button>
      <RecipesIndex recipes={recipes} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
