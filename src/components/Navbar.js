// import React, { useState } from "react";

// // import { Link, Outlet } from "react-router-dom";

// import { Navbar, Nav, Container } from "react-bootstrap";

// export default function NavBar() {
//   return (
//     <Navbar className="header">

//       <nav>
//         <ul className="nav-links">
//           <li className="nav-item">
//             <a href="#about"> About Me</a>
//           </li>
//           <li className="nav-item">
//             <a href="#portfolio">Portfolio</a>
//           </li>
//           <li className="nav-item">
//             <a href="#contact">Contact Me</a>
//           </li>
//           <li className="nav-item">
//             <a href="#resume">Resume</a>
//           </li>
//         </ul>
//       </nav>
//     </Navbar>
//   );
// }

import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

// import logo from "../assets/img/logo.png;
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          {/* <img src={addlogohere} alt="Logo" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#resume"
              className={
                activeLink === "resume" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("resume")}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
