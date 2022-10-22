import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-light">
<div className="container-fluid">
        <a className="navbar-brand" href="#">
          PetShop
        </a>
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
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Categoria 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Categoria 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Categoria 3
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <CartWidget></CartWidget>
      </div>
    </nav>
  );
};
export default NavBar;
