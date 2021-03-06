import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { greeting } from "../components/portfolio";
import HeroBg from "../assets/images/undraw_feeling_proud.svg";
import Socials from "../components/socials";

class Hero extends React.Component {
  render() {
    return (
      <div>
        <div className="hero" id="greeting">
          <div className="hero-main">
            <div className="hero-text-div">
              <div>
                <h1 className="hero-text">Hello ! I'am {greeting.title}</h1>
                <p className="hero-text-description">{greeting.description}</p>
                <div class="contact-btn-div">
                  <NavLink
                    className="btn btn-outline-primary shadow-none"
                    type="button"
                    role="button"
                    to="/contact"
                    id="contact-btn"
                  >
                    Contact
                  </NavLink>
                </div>
                <p className="btn-contact"></p>
                <Socials />
              </div>
            </div>
            <div className="hero-image-div">
              <img alt="" src={HeroBg}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
