import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function NavMusic() {
  return (
    <>
      <form style={{ textAlign: "center" }}>
        <button>
          <Link to="/MusicFav/90s">90's</Link>
        </button>
        <button>
          <Link to="/MusicFav/20s">20's</Link>
        </button>
      </form>
    </>
  );
}

export default NavMusic;
