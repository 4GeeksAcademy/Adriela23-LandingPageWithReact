import React from 'react'

const NavBar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid ms-5 mb-3">
          <a className="navbar-brand text-warning">FoodLovers</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse me-5 d-flex justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active text-warning" aria-current="page" href="#">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Booking</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Top Favourites</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar
