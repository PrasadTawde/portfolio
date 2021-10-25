import React, { Component } from "react";
import Profile from "../assets/images/profile.png";
import "../assets/contact.css";
import { contact_details } from "../components/portfolio";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className="contact-main">
          <div className="basic-contact">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img src={Profile} alt="" />
              </div>
              <div className="contact-heading-text-div">
                <h1 className="contact-heading-text">
                  {contact_details["title"]}
                </h1>
                <p className="contact-header-description">
                  {contact_details["description"]}
                </p>
                {/* <SocialMedia theme={theme} /> */}
              </div>
            </div>
            {/* form */}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
