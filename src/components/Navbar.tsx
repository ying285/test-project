import React from "react";
import "../style/Navbar.scss";

const navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-style">
        <li>
          <a href="/#">home</a>
        </li>
        <li>
          <a href="/#">main</a>
        </li>
        <li>
          <a href="/#">contact</a>
        </li>
      </ul>
    </div>
  );
};

export default navbar;
