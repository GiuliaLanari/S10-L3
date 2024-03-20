import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavBar = function (props) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" style={{ backgroundColor: "#221f1f" }}>
      <div className="container-fluid">
        <img src={"logo.png"} alt="Netflix logo" style={{ width: "100px", height: "55px" }} />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/">
                <div className="nav-link fw-bold">Home</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tv-shows">
                <div className="nav-link fw-bold">TV Shows</div>
              </Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="#" className="nav-link fw-bold">
                Movies
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="#" className="nav-link fw-bold">
                Recently Added
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="#" className="nav-link fw-bold">
                My List
              </Nav.Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <i className="bi bi-search icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </i>

            <div id="kids" className="fw-bold">
              KIDS
            </div>
            <i className="bi bi-bell-fill icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
              </svg>
            </i>
            <i className="bi bi-person-circle icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
            </i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
