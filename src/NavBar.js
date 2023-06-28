

import React,{useContext} from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import CurrentUserContext from "./CurrentUserContext";

function NavBar() {
  const {curUser,logout}=useContext(CurrentUserContext)
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>

        <Nav className="ml-auto" navbar>
       
          {/* <NavItem>
            
            <NavLink to="/signup">Signup</NavLink>
          </NavItem> */}
          <NavItem>
            
            <NavLink to="/companies">Companies</NavLink>
          </NavItem>
          <NavItem>
            
            <NavLink to="/jobs">Jobs</NavLink>
          </NavItem>
          <NavItem>
            
            <NavLink to="/profile">Profile</NavLink>
          </NavItem>
          <NavItem>
          {curUser
          ?
          <NavLink to="/" onClick={logout}>logout {curUser}</NavLink>
          :
          <NavLink to="/login">Login</NavLink>}
            
            
          </NavItem>
        </Nav>
       
      </Navbar>
    </div>
  );
}

export default NavBar;
