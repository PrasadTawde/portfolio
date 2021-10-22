import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

class GithubIcon extends React.Component {
  render() {
    return (
      <IconContext.Provider
        value={{ className: "global-class-name", size: "3em", color: "3eb5e4" }}
      >
        <div>
          <FaGithub />
        </div>
      </IconContext.Provider>
    );
  }
}

export default GithubIcon;
