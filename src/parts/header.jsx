import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import { greeting } from "../components/portfolio";
import SeoHeader from "./seoHeader";

class Header extends React.Component {
  render() {
    const link = "/";
    return (
      <React.Fragment>
        <SeoHeader />
        <Router>
          <div>
            <header className="header">
              <NavLink to={link} tag={Link} className="logo">
                <span> &lt;</span>
                <span className="logo-name">{greeting.logo}</span>
                <span>/&gt;</span>
              </NavLink>
              <input className="menu-btn" type="checkbox" id="menu-btn" />
              <label className="menu-icon" htmlFor="menu-btn">
                <span className="navicon"></span>
              </label>
              <ul className="menu">
                <li>
                  <NavLink to="/home" tag={Link}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/education" tag={Link}>
                    Education
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects" tag={Link}>
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" tag={Link}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </header>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default Header;
