import { NavLink, Outlet } from "react-router";
import React from "react";
import './Css/NavBar.css';


function Navbar({id}) {

  return (
  <>
  <nav className="navbar navbar-expand-lg navbar-dark px-4">
    <NavLink className="navbar-brand" to="/">Shoping Club</NavLink>

  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ms-auto">
       <li className="nav-item">
          <NavLink className="nav" to="/shoping">Shoping</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav" to="/category">Categorys</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav" to="/orders">Orders</NavLink>
        </li>   
        {
          id ? 
             <li className="nav-item">
                <NavLink className="nav" to="/logout">Logout</NavLink>
            </li>
          :
              <li className="nav-item">
                <NavLink className="nav" to="/login">Login </NavLink>
             </li>
        }
     
            <li className="nav-item">
          <NavLink className="nav "  to="/contact">Contact Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav" to="/about">About Us</NavLink>
        </li>
          </ul>
  </div>


        {
          id ? 
                <div className="nav-item ">
          <NavLink style={{color:" #4A4A4B"}}  className="nav join" to="/profile">
             <span>Profile </span>
             <img  style={{height:" 28px", width: "28px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s" alt="" />
          </NavLink>
          </div> :
        ""
        }
</nav>

    <Outlet />
  </>

  );
}

export default Navbar;