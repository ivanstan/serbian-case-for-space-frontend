import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export class Header extends React.Component<any, any> {

  public render() {
    return <header>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">Home</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>;
  }
}
