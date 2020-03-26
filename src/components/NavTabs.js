import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#github"
          onClick={() => props.handlePageChange("github")}
          className={props.currentPage === "github" ? "nav-link active" : "nav-link"}
        >
          github
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#linkedin"
          onClick={() => props.handlePageChange("linkedin")}
          className={props.currentPage === "linkedin" ? "nav-link active" : "nav-link"}
        >
          linkedin
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
