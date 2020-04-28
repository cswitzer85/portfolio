import React from "react";
import "./NavTabs.css";

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
          href="https://docs.google.com/document/d/1qAGARoCOjh_8a_d3teaMyYCx6JeLeVV_4T7eKwMAqFI/edit">
          Resume
        </a>
      </li>
      <li className="nav-item">
          <a href="https://www.linkedin.com/in/cody-switzer-1429593a/"
            ><i class="fab fa-linkedin"></i></a>
      </li>
      <li className="nav-item">
          <a href="https://github.com/cswitzer85"
            ><i class="fab fa-github-square"></i></a>
      </li>
    </ul>
  );
}

export default NavTabs;
