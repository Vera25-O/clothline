import { NavLink } from "react-router-dom";
import React from "react";
import icon3 from "./photos/icon3.png";
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
        <h7 className="logo">ThriFThUB.co</h7>
      </NavLink>
      <NavLink to="/blogs" exact="true">
        <h7>Blogs</h7>
      </NavLink>
      <NavLink to="/trendy" exact="true">
        <h7>Trending Wear</h7>
      </NavLink>
      <NavLink to="/fashion" exact="true">
        <h7>Sales</h7>
        </NavLink>
      
      <img src={icon3} alt="whatsapp" className="icon3" />
      <p className="no">+254748438571</p>
    </nav>
    
  );
}
export default Navbar;
