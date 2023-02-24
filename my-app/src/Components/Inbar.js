import { NavLink } from "react-router-dom";
import React from "react";

function Inbar() {
  return (
    <nav className="inbar">
      <NavLink to="/" exact="true">
        <h7>Explore Fashion</h7>
      </NavLink>
    </nav>
  );
}
export default Inbar;
