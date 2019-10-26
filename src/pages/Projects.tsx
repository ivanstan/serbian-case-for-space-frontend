import React from 'react'
import { title } from './Home'
import { translate } from 'react-polyglot'

const image = {
  backgroundImage: 'url(/images/projects.jpg)',
  backgroundSize: 'cover',
  height: '100vh',
  position: 'relative' as 'relative',
}

class Projects extends React.Component<any, any> {
  public render() {
    return (
      <div className="mb-5">
        <div style={image} className="mb-5">
          <h2 style={title}>PROJECTS</h2>
        </div>

        <div className="container mb-5">
          <div className="row mb-5">
            <div className="col-12 col-lg-8 mx-auto">
              <div className="mb-5">
                <h2 className="h4 mb-3">
                  REPORT NO. 1: “ŠUME I KLIMA” PROJECT DONE IN ASSOCIATION WITH
                  “JEDAN STEPEN” AND “CRNOG”.
                </h2>
                <img
                  className="mb-3"
                  src="/images/sume-i-klima.jpg"
                  width="100%"
                  alt="Sume i klima"
                />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://jedanstepen.org/wp-content/uploads/2019/01/Sume-i-klima-Brosura.pdf"
                >
                  http://jedanstepen.org/wp-content/uploads/2019/01/Sume-i-klima-Brosura.pdf
                </a>
              </div>

              <div className="mb-5">
                <h2 className="h4 mb-3">
                  REPORT NO.2: FIRST SPACEHUB IN SERBIA. (ONGOING)
                </h2>
                <img
                  className="mb-3"
                  src="/images/spacehub.jpg"
                  width="100%"
                  alt="SpaceHub"
                />
              </div>

              <div className="mb-5">
                <h2 className="h4 mb-3">
                  REPORT NO. 3: SPACE CAPABILITIES IN THE BALKAN REGION
                  (FORTHCOMING).
                </h2>
                <img
                  className="mb-3"
                  src="/images/region.jpg"
                  width="100%"
                  alt="Region"
                />
                <p>Focus of the research:</p>
                <ul>
                  <li>Industrial space capabilities and space applications</li>
                  <li>Use of down-stream and up-stream space technology</li>
                  <li>Spin-offs and Spin-ins possibilities</li>
                  <li>Near-term, mid-term and long-term recommendations</li>
                </ul>
              </div>

              <div className="mb-5">
                <h2 className="h4 mb-3">
                  REPORT NO. 4: PROMOTING PRODUCTIVE COOPERATION BETWEEN SPACE
                  LAWYERS AND ENGINEERS.
                </h2>
                <img
                  className="mb-3"
                  src="/images/igi.jpg"
                  width="100%"
                  alt=""
                />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.igi-global.com/book/promoting-productive-cooperation-between-space/205236"
                >
                  https://www.igi-global.com/book/promoting-productive-cooperation-between-space/205236
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default translate()(Projects)
