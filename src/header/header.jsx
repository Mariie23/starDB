import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header_wrapper">
          <div className="logo">
            <Link className="logo__link" to="/">
              StarDB
            </Link>
          </div>
          <nav className="nav">
            <ul className="nav_list">
              <li className="nav_item">
                <Link className="nav_item__link" to={"/people/"}>
                  People
                </Link>
              </li>
              <li className="nav_item">
                <Link className="nav_item__link" to={"/planets/"}>
                  Planets
                </Link>
              </li>
              <li className="nav_item">
                <Link className="nav_item__link" to={"/ships/"}>
                  Ships
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
