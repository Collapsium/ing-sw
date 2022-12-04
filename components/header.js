import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Header({ simple, hideAuth }) {
  let title = process.env.APP_NAME;
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-darkblue border-bottom">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              {/* <FontAwesomeIcon
                icon={["fas", "shopping-basket"]}
                className="d-inline-block"
              /> */}
              <span className="ms-2 mb-0 h4 fw-bold">
                Up-Grade
              </span>
            </a>
          </Link>
          <div className="collapse navbar-collapse">
            <form className="d-flex">
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                  size="32"
                />
                <button type="button" className="btn btn-primary">
                  <FontAwesomeIcon icon={["fas", "search"]} />
                </button>
              </div>
            </form>
          </div>
          <div className="d-flex">
            {hideAuth ? (
              <>
                <Link href="/auth/login">
                  <a className="btn btn-outline-primary d-none d-md-block">
                    Iniciar Sesión
                  </a>
                </Link>
                <Link href="/auth/sign-up">
                  <a className="btn btn-primary d-none d-md-block ms-2">
                    Registrarse
                  </a>
                </Link>
              </>
            ) : (
                <Link href="/account/profile">
                  <a className="btn btn-light border position-relative ms-3 fw-normal">
                    <FontAwesomeIcon icon={["fas", "user"]} />
                  </a>
                </Link>
            )}
            <Link href="/shopping-cart">
              <a className="btn btn-light border position-relative ms-3 fw-normal">
                <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger my-auto">
                  3
                </span>
              </a>
            </Link>
          </div>
        </div>
      </nav>
      {!simple && (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
          <div className="container">
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/explore">
                    <a className="nav-link">Todos los Productos</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/explore">
                    <a className="nav-link">Accesorios</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
