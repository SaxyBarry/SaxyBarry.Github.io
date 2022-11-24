import React from "react";
import {
  Nav,
  NavLink,
} from "./navbarelements";

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/experience">Experience</NavLink>
    </Nav>
  );
};

export default Navbar;
