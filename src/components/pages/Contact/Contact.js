import React from "react";
import "./Contact.css";

const Contact = () => (
  <div>
    <div className="col-lg-8 col-md-12 col-sm-12">
      <div className="mainContainer">
        {" "}
        <h1>Contact</h1>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title" id="myName">
              Cody Switzer
            </h4>
            <h6 className="card-subtitle mb-2 text-muted">
              e-mail is set to private
            </h6>
            <h5 className="card-subtitle">Based out of Dallas, Texas</h5>
            <p className="card-text">
              Thank you for viewing my portfolio! Please feel free to reach out
              to me via the following links.
            </p>
            <a href="https://github.com/cswitzer85">GitHub</a>
            <a href="https://www.linkedin.com/in/cody-switzer-1429593a/">
              LinkedIn
            </a>
            <a href="https://docs.google.com/document/d/1qAGARoCOjh_8a_d3teaMyYCx6JeLeVV_4T7eKwMAqFI/edit?usp=sharing">
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
