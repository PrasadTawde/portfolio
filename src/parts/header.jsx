import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { greeting } from "../components/portfolio";
import SeoHeader from "./seoHeader";

class Header extends React.Component {
  render() {
    return (
      <div>
        <SeoHeader />
        <div className="container-fluid">
          <div className="row" id="row-div">
            <nav
              className="navbar navbar-expand-lg navbar-light"
              aria-label="Fifth navbar example"
            >
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  <span className="navbar-brand-brackets"> &lt;</span>
                  {greeting.logo}
                  <span className="navbar-brand-brackets"> /&gt;</span>
                </NavLink>
                <button
                  className="navbar-toggler collapsed shadow-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarsExample05"
                  aria-controls="navbarsExample05"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbarsExample05">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        aria-current="page"
                        to="/project"
                      >
                        Projects
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link "
                        aria-current="page"
                        to="/resume"
                      >
                        Resume
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        aria-current="page"
                        to="/contact"
                      >
                        contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
