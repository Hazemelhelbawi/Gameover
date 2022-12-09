import React from "react";
import { Link, NavLink } from "react-router-dom";
import HomeImage from "../../assests/Images/logo.png";
import "./Navbar.css";

export default function Navbar({ userData,logout }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-transperant navbar-dark border-2 border-bottom border-dark">
        <div className="container">
          <Link className="navbar-brand" to="">
            <img
              src={HomeImage}
              alt=""
              width="50"
              height="40"
              className="d-inline-block align-text-top"
            />
            Game Over
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse me-auto" id="navbarNav">
            
            {userData?(
            
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to=" ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="all">
                  All
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Platforms
                </Link>
                <ul
                  className="dropdown-menu bg-dark text-white"
                  aria-labelledby="navbarDropdown"
                >
                  <li className="dropdown-item bg-transparent text-white">
                    <NavLink className="nav-link" to={`platform/pc`}>
                      pc
                    </NavLink>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <NavLink className="nav-link" to={`platform/browser`}>
                      browser
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  sort-by
                </Link>
                <ul
                  className="dropdown-menu bg-dark text-white"
                  aria-labelledby="navbarDropdown"
                >
                  <li className="dropdown-item bg-transparent text-white">
                    <NavLink className="nav-link" to={`sortby/release-date`}>
                      release-data
                    </NavLink>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <NavLink className="nav-link" to={`sortby/popularity`}>
                      popularity
                    </NavLink>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <NavLink className="nav-link" to={`sortby/alphabetical`}>
                      alphabetical
                    </NavLink>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <NavLink className="nav-link" to={`sortby/relevance`}>
                      relevance
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <ul
                  className="dropdown-menu bg-dark text-white"
                  aria-labelledby="navbarDropdown"
                >
                  <li className="dropdown-item bg-transparent text-white">
                    <NavLink className="nav-link" to={`categories/racing`}>
                      racing
                    </NavLink>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <NavLink className="nav-link" to={`categories/sports`}>
                      sports
                    </NavLink>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <NavLink className="nav-link" to={`categories/social`}>
                      social
                    </NavLink>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <NavLink className="nav-link" to={`categories/shooter`}>
                      shooter
                    </NavLink>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <NavLink className="nav-link" to={`categories/open-world`}>
                      open-world
                    </NavLink>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <NavLink className="nav-link" to={`categories/zombie`}>
                      zombie
                    </NavLink>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <NavLink className="nav-link" to={`categories/fantasy`}>
                      fantasy
                    </NavLink>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <NavLink className="nav-link" to={`categories/action-rpg`}>
                      action-rpg
                    </NavLink>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <NavLink className="nav-link" to={`categories/flight`}>
                      flight
                    </NavLink>
                  </li>
                  <li className="dropdown-item bg-transparent text-white">
                    <NavLink className="nav-link" to={`categories/battle-royale`}>
                      battle-royale
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>

            ) :('')}
           
           
           
            <ul className="navbar-nav ms-auto mx-1">

                {userData ?  <li className="nav-item px-1">
                <NavLink
                  className="nav-link btn btn-outline-primary  "
                  to="login" onClick={logout}
                >
                  Logout
                </NavLink>
              </li>:<>
              <li className="nav-item px-1">
                <NavLink
                  className="nav-link btn btn-outline-primary  "
                  to="login"
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item px-1">
                <NavLink
                  className="nav-link btn btn-outline-primary  "
                  to="register"
                >
                  Register
                </NavLink>
              </li>
              </>
                }


            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
