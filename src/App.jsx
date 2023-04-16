function App() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#recipes-index">All recipes</a> | <a href="#recipes-new">New recipe</a>
      </header>

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

      <div id="recipes-index">
        <h1>All recipes</h1>
        <div className="recipes">
          <h2>Raw Eggs</h2>
          <img src="https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg" alt="" />
          <p>Chef: Peter Jang</p>
          <button>More info</button>
        </div>
        <div className="recipes">
          <h2>Mud Pie</h2>
          <img src="https://static.onecms.io/wp-content/uploads/sites/9/2017/12/mud-pie-XL-RECIPE2016.jpg" alt="" />
          <p>Chef: Jay Wengrow</p>
          <button>More info</button>
        </div>
      </div>

      <footer>
        <p>Copyright 2023</p>
      </footer>
    </div>
  );
}

export default App;
