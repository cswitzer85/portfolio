import React from "react";
import "./Resume.css";

const Resume = () => (
  <div>
    <div className="col-lg-8 col-md-12 col-sm-12">
      <div className="mainContainer">
        {" "}
        <h1>Resume</h1>
        <p>
          <a href="https://docs.google.com/document/d/1qAGARoCOjh_8a_d3teaMyYCx6JeLeVV_4T7eKwMAqFI/edit?usp=sharing">
            <img
              src="https://raw.githubusercontent.com/cswitzer85/portfolio/master/assets/resumeScreenShot.png"
              id="resumePng"
              alt="Image of resume"
            />
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default Resume;
