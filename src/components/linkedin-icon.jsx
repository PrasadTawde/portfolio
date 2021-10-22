import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa";

class LinkedIcon extends React.Component {
  render() {
    return (
      <IconContext.Provider
        value={{ className: "global-class-name", size: "3em", color: "3eb5e4" }}
      >
        <div>
          <FaLinkedin />
        </div>
      </IconContext.Provider>
    );
  }
}

export default LinkedIcon;
