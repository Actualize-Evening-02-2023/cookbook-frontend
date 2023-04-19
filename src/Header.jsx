export function Header() {
  return (
    <header>
      <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "red" }}>
            Cookr
          </a>
          <button
            style={{ backgroundColor: "red" }}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#recipes-index">
                  All Recipes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#recipes-new">
                  New Recipe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
