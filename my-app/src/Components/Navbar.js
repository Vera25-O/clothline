import { NavLink } from "react-router-dom";
import React from "react";
import logo from "./photos/logo.png";
import { useEffect, useState } from "react";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <NavLink to="/" exact="true">
        <h7>Home</h7>
      </NavLink>
      <NavLink to="/blogs" exact="true">
        <h7>Blogs</h7>
      </NavLink>
      <NavLink to="/fashion" exact="true">
        <h7>Sales</h7>
      </NavLink>
    </nav>
  );
}
export default Navbar;
