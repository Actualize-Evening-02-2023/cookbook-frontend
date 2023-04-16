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
  let recipes = [
    {
      id: 1,
      title: "Raw Eggs",
      chef: "Peter Jang",
      image_url: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg",
    },
    {
      id: 2,
      title: "Mud Pie",
      chef: "Jay Wengrow",
      image_url: "https://static.onecms.io/wp-content/uploads/sites/9/2017/12/mud-pie-XL-RECIPE2016.jpg",
    },
    {
      id: 3,
      title: "Pizza",
      chef: "Jay Wengrow",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2021/06/15/mozzarella-pizza-margherita-FT-RECIPE0621.jpg",
    },
  ];

  let cats = ["Tiger", "Charlie", "Rosie"];
  return (
    <div>
      <RecipesNew />
      <RecipesIndex recipes={recipes} myCats={cats} />
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
