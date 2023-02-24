import { NavLink } from "react-router-dom";
import React from "react";

function Inbar() {
  return (
    <nav className="inbar">
      <NavLink to="/fashion" exact="true">
        <h7>Explore Fashion<i class="arrow right"></i></h7>
      </NavLink>
    </nav>
  );
}
export default Inbar;
