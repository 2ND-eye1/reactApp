export const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-primary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          AniWatch
        </a>
        <button
          className="navbar-toggler btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navBarContent"
          aria-controls="navBarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navBarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Homepage
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Favourites
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Recommendation
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="#"
              >
                More
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Webtoon
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Mangas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Animations
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search your anime"
              aria-label="Search"
            />
            <button className="btn btn-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
