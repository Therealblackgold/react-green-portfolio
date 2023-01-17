import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import resume from "../../assets/gauta ncholo-resume.pdf";
import { LinkContainer } from "react-router-bootstrap";
import "./NavBar.css";

const Navigation = () => {
  // active link state
  const [activeLink, setActiveLink] = useState("home");

  // user scrolled state
  const [scrolled, setScrolled] = useState(false);

  // user scrolled useEffect that set changes on scroll
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    // remove eventLister when component gets removed from the dom
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" style={{ width: "50px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
            </LinkContainer>
            <Nav.Link
              href="#about"
              className={
                activeLink === "#about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "#skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "#projects"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={
                activeLink === "#contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact
            </Nav.Link>

            <LinkContainer to="/blogs">
              <Nav.Link
                className={
                  activeLink === "blogs" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("blogs")}
              >
                Blogs
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/gauta-ncholo/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin" style={{ fontSize: 20 }}></i>
              </a>
              <a
                href="https://github.com/Therealblackgold"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github" style={{ fontSize: 20 }}></i>
              </a>
              <a
                href="mailto:gauta.ncholo@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-envelope-fill" style={{ fontSize: 20 }}></i>
              </a>
            </div>
            <a href={resume} download={resume}>
              <button className="vvd">
                <span>DOWNLOAD CV</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
