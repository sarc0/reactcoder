import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-light p-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">
          AnimeLand
        </Link>
        <button
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
        <div
          className="collapse navbar-collapse d-flex justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/category/1" className="nav-link" aria-current="page" href="#">
                Cuadros
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/5" className="nav-link" href="#">
                Manga
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/9" className="nav-link" href="#">
                Remeras
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <CartWidget />
      </div>
    </nav>
  );
};
export default NavBar;
