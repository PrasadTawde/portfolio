import React from "react";
import { social_media } from "../components/portfolio";
import "../assets/fontawesome/css/all.min.css";

class Socials extends React.Component {
  render() {
    return (
      <div className="social-media-div">
        {social_media.map((media) => {
          return (
            <a
              href={media.link}
              className={"icon-button"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={media.icon}></i>
            </a>
          );
        })}
      </div>
    );
  }
}

export default Socials;
