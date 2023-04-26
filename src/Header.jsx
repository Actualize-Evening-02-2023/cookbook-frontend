import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ color: "red" }}>
            Cookr
          </Link>
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
                <Link className="nav-link" to="/recipes">
                  Recipes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/recipes/new">
                  New Recipe
                </Link>
              </li>

              {localStorage.jwt === undefined ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <LogoutLink />
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
