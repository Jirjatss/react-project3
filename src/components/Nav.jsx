import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <Link class="navbar-brand" to="/">
          Home
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/Profil">
                Profil
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Gallery">
                Gallery
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/MusicFav">
                Music Fav
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/FilmFav">
                Film Fav
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
