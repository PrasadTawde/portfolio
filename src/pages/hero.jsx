import React, { Component } from "react";
import { greeting } from "../components/portfolio";
import HeroBg from "../assets/images/undraw_feeling_proud.png";
class Hero extends React.Component {
  render() {
    return (
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">Hello ! I'am {greeting.title}</h1>
              <p className="greeting-text-description">
                {greeting.description}
              </p>
              {/* <SocialMedia /> */}
            </div>
          </div>
          <div className="greeting-image-div">
            <img alt="" src={HeroBg}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
