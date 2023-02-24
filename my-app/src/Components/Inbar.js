import { NavLink } from "react-router-dom";
import React from "react";

function Inbar() {
  return (
    <nav className="inbar">
      <NavLink to="/fashion" exact="true">
        <h5>Explore Fashion<i class="arrow right"></i></h5>
      </NavLink>
    </nav>
  );
}
export default Inbar;
