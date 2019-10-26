import React from 'react'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'
import { translate } from 'react-polyglot'

const image = {
  backgroundImage: 'url(/images/front-page.jpg)',
  backgroundSize: 'cover',
  height: '100vh',
  position: 'relative' as 'relative',
}

export const title = {
  fontSize: 84,
  color: '#fff',
  position: 'absolute' as 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  textAlign: 'center' as 'center',
  width: '100%',
}

const lead = {
  textAlign: 'center' as 'center',
}

class Home extends React.Component<any, any> {
  public render() {
    return (
      <div className="mb-5">
        <div style={image} className="mb-5">
          <h2 style={title}>MAKING A CASE FOR SPACE</h2>
        </div>
        <div className="container mb-5">
          <div className="row mb-5">
            <div className="col-12">
              <h3 style={lead} className="my-5">
                SERBIAN CASE FOR SPACE FOUNDATION IS A THINK TANK ORGANIZATION
                THAT SERVES AS AN INTERFACE BETWEEN GOVERNMENT AND THE PRIVATE
                SECTOR TO HELP ENGAGE SERBIA IN SPACE ACTIVITIES
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-5">
              <ScrollAnimation animateIn="fadeIn" duration={1}>
                <Link to={'/about'} className="zoom-container mb-4">
                  <img
                    width="100%"
                    className="mb-5"
                    src="/images/about.jpg"
                    alt="About"
                  />
                </Link>
                <h4 className="h5 text-center">ABOUT</h4>
                <p className="text-center">
                  Find out about our organization, mission, and our projects
                </p>
                <Link
                  className="d-block text-center mx-auto"
                  to={'/about'}
                  style={{ width: 85 }}
                >
                  Learn More
                </Link>
              </ScrollAnimation>
            </div>
            <div className="col-lg-6 mb-5">
              <ScrollAnimation animateIn="fadeIn" duration={1}>
                <Link to={'/blog'} className="zoom-container mb-4">
                  <img
                    width="100%"
                    className="mb-5"
                    src="/images/blog.jpg"
                    alt="Blog"
                  />
                </Link>
                <h4 className="h5 text-center">BLOG</h4>
                <p className="text-center">
                  Read the latest news concerning space community and industry
                </p>
                <Link
                  className="d-block text-center mx-auto"
                  to={'/blog'}
                  style={{ width: 205 }}
                >
                  Find Out Now
                </Link>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default translate()(Home)
