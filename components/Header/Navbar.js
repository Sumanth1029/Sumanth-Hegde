import React from "react";
import SbEditable from "storyblok-react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Styles from "./Navbar.module.scss";
import DynamicComponent from "../DynamicComponent";

const Navigationbar = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <Navbar bg="white" expand="lg" className={Styles["navbar-container"]}>
        <Container>
          <Navbar.Brand className={Styles["logo"]}>
            <img
              src={blok.logo.filename}
              height={70}
              width={70}
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
              <Nav.Link href="#contact" className={Styles["btn"]}>
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
