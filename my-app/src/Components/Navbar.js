import { NavLink } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";

function Navbar() {
    const [navbar, setNavbar] = useState(false) 
   
   //navbar scroll changeBackground function
   const changeBackground = () => {
     console.log(window.scrollY)
     if (window.scrollY >= 66) {
       setNavbar(true)
     } else {
       setNavbar(false)
     }
    }

    

    useEffect(() => {
      changeBackground()
      // adding the event when scroll change background
      window.addEventListener("scroll", changeBackground)
    })
    
  return (
    
    
        <nav className={navbar ? "navbar active" : "navbar"}>
        <NavLink to="/" exact="true">
        <h7>Home</h7>
      </NavLink>
      <NavLink to="/blogs" exact="true">
        <h7>Blogs</h7>
      </NavLink>
      </nav>
    
  );
}
export default Navbar;
