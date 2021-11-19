import React from "react";
import SbEditable from "storyblok-react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Styles from "./Navbar.module.css";
import DynamicComponent from "../DynamicComponent";
import Button from "../Button/Button";

const Navigationbar = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <Navbar bg="white" expand="lg" className={Styles["navbar-container"]}>
        <Container>
          <Navbar.Brand className={Styles["logo"]}>
            <img
              src={blok.logo.filename}
              height={50}
              width={60}
              alt={blok.logo.alt}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={Styles["hamburger"]}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className={Styles["right-nav"]}>
              <Nav.Link href="#contact">
                {blok.button &&
                  blok.button.map((btn) => (
                    <div key={btn._uid}>
                      <DynamicComponent blok={btn} />
                    </div>
                  ))}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </SbEditable>
  );
};

export default Navigationbar;
