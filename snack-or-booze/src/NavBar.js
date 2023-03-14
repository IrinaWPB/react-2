import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar({snacks, booze}) {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/snacks">Snacks <sup>{snacks.length}</sup></NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/booze">Drinks <sup>{booze.length}</sup></NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/addItem">Add Item</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
