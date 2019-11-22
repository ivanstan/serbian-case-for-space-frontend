import React from 'react'
import { title } from './Home'
import { translate } from 'react-polyglot'
import Project from '../components/Project'

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
            <div className="col-12 col-lg-6 mx-auto">
              <Project
                title={'REPORT NO. 1: “ŠUME I KLIMA” PROJECT DONE IN ASSOCIATION WITH “JEDAN STEPEN” AND “CRNOG”.'}
                image={'/images/sume-i-klima.jpg'}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://jedanstepen.org/wp-content/uploads/2019/01/Sume-i-klima-Brosura.pdf"
                >
                  http://jedanstepen.org/wp-content/uploads/2019/01/Sume-i-klima-Brosura.pdf
                </a>
              </Project>
            </div>

            <div className="col-12 col-lg-6 mx-auto">
              <Project
                title={'REPORT NO.2: FIRST SPACEHUB IN SERBIA. (ONGOING)'}
                image={'/images/spacehub.jpg'}
              >
                <p>Focus of the research:</p>
                <ul>
                  <li>Industrial space capabilities and space applications</li>
                  <li>Use of down-stream and up-stream space technology</li>
                  <li>Spin-offs and Spin-ins possibilities</li>
                  <li>Near-term, mid-term and long-term recommendations</li>
                </ul>
              </Project>
            </div>

          </div>
            <div className="row mb-5">

            <div className="col-12 col-lg-6 mx-auto">
              <Project
                title={'REPORT NO. 3: SPACE CAPABILITIES IN THE BALKAN REGION (FORTHCOMING).'}
                image={'/images/region.jpg'}
              >
                <p>Focus of the research:</p>
                <ul>
                  <li>Industrial space capabilities and space applications</li>
                  <li>Use of down-stream and up-stream space technology</li>
                  <li>Spin-offs and Spin-ins possibilities</li>
                  <li>Near-term, mid-term and long-term recommendations</li>
                </ul>
              </Project>
            </div>
            <div className="col-12 col-lg-6 mx-auto">
              <Project
                title={'REPORT NO. 4: PROMOTING PRODUCTIVE COOPERATION BETWEEN SPACE LAWYERS AND ENGINEERS.'}
                image={'/images/igi.jpg'}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.igi-global.com/book/promoting-productive-cooperation-between-space/205236"
                >
                  https://www.igi-global.com/book/promoting-productive-cooperation-between-space/205236
                </a>
              </Project>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default translate()(Projects)
