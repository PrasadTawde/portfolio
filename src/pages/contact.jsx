import React from "react";
import Profile from "../assets/images/undraw_profile.svg";
import Form_img from "../assets/images/undraw_Developer_activity.svg";
import "../assets/contact.css";
import { contact_details } from "../components/portfolio";
import Socials from "../components/socials";

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
                <p className="contact-heading-text">
                  {contact_details["title"]}
                </p>
                <p className="contact-header-description">
                  {contact_details["description"]}
                </p>
                <Socials />
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg shadow-none"
                    id="resume-btn"
                  >
                    My Resume
                  </button>
                </div>
              </div>
            </div>

            <div className="contact-form-div">
              <div className="contact-heading-text-div">
                <h1 className="contact-heading-text">
                  {contact_details["form_title"]}
                </h1>
                <div className="form-box">
                  <div className="mb-3 row">
                    <label for="full-name" className="col-sm-2 col-form-label">
                      Full Name
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control shadow-none"
                        id="full-name"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="email" className="col-sm-2 col-form-label">
                      Email
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control shadow-none"
                        id="email"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="phone-no" className="col-sm-2 col-form-label">
                      Phone no
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control shadow-none"
                        id="phone-no"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="full-name" className="col-sm-2 col-form-label">
                      Message
                    </label>
                    <div className="col-sm-10">
                      <textarea
                        className="form-control shadow-none"
                        placeholder="Leave your message here"
                        id="floatingTextarea"
                      ></textarea>
                    </div>
                  </div>
                  <div className="d-grid gap-2 col-6 mx-auto">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg shadow-none"
                      id="resume-btn"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div className="contact-form-img-div">
                <img src={Form_img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
