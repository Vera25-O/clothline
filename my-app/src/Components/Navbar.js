import { NavLink } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <div className="nav">
        <NavLink to="/" exact="true">
        <h7>Home</h7>
      </NavLink>
      <NavLink to="/blogs" exact="true">
        <h7>Blogs</h7>
      </NavLink>
    </div>
  );
}
export default Navbar;
