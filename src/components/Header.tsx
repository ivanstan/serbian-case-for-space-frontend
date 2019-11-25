import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import Language from './Language'
import { translate } from 'react-polyglot'

class Header extends React.Component<any, any> {
  public render() {
    const { t } = this.props

    return (
      <header>
        <Navbar expand="lg">
          <Link to="/">
            <img
              className="mr-2"
              src="/images/logo/logo.svg"
              width="50"
              alt="Serbian Case For Space Foundation"
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLink className="nav-link" exact to="/">
                {t('Home')}
              </NavLink>
              <NavLink className="nav-link" exact to="/about">
                {t('About')}
              </NavLink>
              <NavLink className="nav-link" exact to="/projects">
                {t('Projects')}
              </NavLink>
              <NavLink className="nav-link" exact to="/blog">
                {t('Blog')}
              </NavLink>
              <NavLink className="nav-link" exact to="/team">
                {t('Team')}
              </NavLink>
              <NavLink className="nav-link" exact to="/partners">
                {t('Partners')}
              </NavLink>
              <NavLink className="nav-link" exact to="/contact">
                {t('Contact')}
              </NavLink>
            </Nav>
            <Language />
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}

export default translate()(Header)
