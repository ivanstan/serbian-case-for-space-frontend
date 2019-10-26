import React from 'react'
import { translate } from 'react-polyglot'

const top = {
  backgroundColor: '#363636',
}

const bottom = {
  backgroundColor: '#1f1f1f',
  height: 128,
}

const iconWrapper = {
  width: 210,
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
              <i className="fab fa-linkedin" />
            </a>
            <a
              style={icon}
              className="footer-icon"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/serbiancaseforspace/"
            >
              <i className="fab fa-facebook" />
            </a>
            <a
              style={icon}
              className="footer-icon"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:info@serbiancaseforspace.com"
            >
              <i className="far fa-envelope" />
            </a>
          </div>
        </div>
        <div style={bottom} />
      </footer>
    )
  }
}

export default translate()(Footer)
