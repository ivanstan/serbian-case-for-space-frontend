import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export class Header extends React.Component<any, any> {

  public render() {
    return <header>
      <Navbar expand="lg">
        <Link to="/">
          <img src="/images/logo.png" width="265" alt="Serbian Case For Space Foundation" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/projects">Projects</Link>
            <Link className="nav-link" to="/blog">Blog</Link>
            <Link className="nav-link" to="/team">Team</Link>
            <Link className="nav-link" to="/partners">Partners</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>;
  }
}
