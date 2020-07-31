import React from 'react'
import { translate } from 'react-polyglot'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import { NavLink } from 'react-router-dom'

const top = {
  backgroundColor: '#6F6D6D',
}

const bottom = {
  backgroundColor: '#373636',
  height: 128,
  display: 'flex',
  justifyContent: 'center'
}

const footerLink = {
  color: '#fff',
  padding: 10,
  fontSize: '12px',
  height: 12,
};

const iconWrapper = {
  width: 220,
  margin: 'auto',
}

const icon = {
  color: '#fff',
  transition: 'opacity 170ms ease-in-out',
  padding: '1em',
  lineHeight: '1em',
  fontSize: 24,
  display: 'inline-block',
}

class Footer extends React.Component<any, any> {
  public render() {
    const { t } = this.props

    return (
      <footer>
        <div style={top}>
          <div style={iconWrapper}>
            <a
              style={icon}
              className="footer-icon"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/serbian-case-for-space/"
            >
              <LinkedInIcon/>
            </a>
            <a
              style={icon}
              className="footer-icon"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/serbiancaseforspace/"
            >
              <FacebookIcon/>
            </a>
            <a
              style={icon}
              className="footer-icon"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:info@serbiancaseforspace.com"
            >
              <MailOutlineIcon/>
            </a>
          </div>
        </div>
        <div style={bottom}>
          <NavLink style={footerLink} exact to="/terms-of-use">
            {t('Terms of Use')}
          </NavLink>
          <NavLink style={footerLink} exact to="/privacy-policy">
            {t('Privacy Policy')}
          </NavLink>
        </div>
      </footer>
    )
  }
}

export default translate()(Footer)
