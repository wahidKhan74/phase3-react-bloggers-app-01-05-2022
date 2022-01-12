import React from "react";
import {NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Bolgger App
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link"  exact to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/posts" >
              Posts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/users" >
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/login" >
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/register" >
              Register
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to="/features"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Features
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink className="dropdown-item" to="/products">
                Products
              </NavLink>
              <NavLink className="dropdown-item" to="/courses">
                Cources
              </NavLink>
              <NavLink className="dropdown-item" to="/blogs">
                Blogs
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
