import React, { useState } from "react";
import axios from "axios";
import Profile from "../assets/images/undraw_profile.svg";
import Form_img from "../assets/images/undraw_Developer_activity.svg";
import "../assets/css/contact.css";
import { contact_details } from "../components/portfolio";
import Socials from "../components/socials";

export default function Contact() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/xwkyvnoq",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(true);
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <div>
      <div className="contact-main">
        <div className="basic-contact">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img src={Profile} alt="" />
            </div>
            <div className="contact-heading-text-div">
              <p className="contact-heading-text">{contact_details["title"]}</p>
              <p className="contact-header-description">
                {contact_details["description"]}
              </p>
              <Socials />
            </div>
          </div>

          <div className="contact-form-div">
            <div className="contact-heading-text-div">
              <h1 className="contact-heading-text">
                {contact_details["form_title"]}
              </h1>
              <form onSubmit={handleOnSubmit}>
                <div className="form-box">
                  <div className="mb-3 row">
                    <label for="name" className="col-sm-2 col-form-label">
                      Full Name
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control shadow-none"
                        id="name"
                        onChange={handleOnChange}
                        required
                        value={inputs.name}
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="email" className="col-sm-2 col-form-label">
                      Email
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="email"
                        className="form-control shadow-none"
                        id="email"
                        onChange={handleOnChange}
                        required
                        value={inputs.email}
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="phone" className="col-sm-2 col-form-label">
                      Phone no
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="number"
                        className="form-control shadow-none"
                        id="phone"
                        onChange={handleOnChange}
                        required
                        value={inputs.phone}
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="message" className="col-sm-2 col-form-label">
                      Message
                    </label>
                    <div className="col-sm-10">
                      <textarea
                        className="form-control shadow-none"
                        placeholder="Leave your message here"
                        id="message"
                        onChange={handleOnChange}
                        required
                        value={inputs.message}
                      ></textarea>
                    </div>
                  </div>
                  <div className="d-grid gap-2 col-6 mx-auto">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg shadow-none"
                      id="resume-btn"
                      disabled={status.submitting}
                    >
                      {!status.submitting
                        ? !status.submitted
                          ? "Submit"
                          : "Submitted"
                        : "Submitting..."}
                    </button>
                  </div>
                </div>
              </form>
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
