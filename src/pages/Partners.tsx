import React from 'react'
import { contactMail } from '../config'
import { translate } from 'react-polyglot'
import { ExternalLink } from '../components/ExternalLink'

class Partners extends React.Component<any, any> {
  public render() {
    return (
      <div className="mb-5">
        <div className="container mb-5">
          <div className="row mb-5">
            <div className="col-12 col-lg-8 mx-auto">
              <h2>
                OUR PARTNERS SUPPORT OUR WORK AND ONLY TOGETHER CAN WE REACH OUR
                GOALS.
              </h2>

              <hr className="my-5"/>

              <div className="d-flex align-items-center">
                <ExternalLink href="https://en.bfpe.org/">
                  <img
                    width="100%"
                    alt="BFPE"
                    src="/images/bfpe.jpg"
                  />
                </ExternalLink>
                <ExternalLink href="https://www.sharefoundation.info/sr/">
                  <img
                    width="100%"
                    alt="Share"
                    src="/images/share.jpg"
                  />
                </ExternalLink>
                <ExternalLink href="http://jedanstepen.org/sr/" style={{display: 'flex'}}>
                  <img
                    width="70%"
                    alt="Jedan Stepen"
                    src="/images/1c.png"
                  />
                </ExternalLink>
                <ExternalLink href="https://www.esa.int/About_Us/ECSL_European_Centre_for_Space_Law">
                  <img
                    width="100%"
                    alt="ECSL"
                    src="/images/ecsl2.png"
                  />
                </ExternalLink>
              </div>
              <div className="d-flex align-items-center">
                <ExternalLink href="https://www.fondazioneamaldi.it/en/" style={{display: 'flex'}}>
                  <img width="65%" alt="FEA" src="/images/fea.jpg"/>
                </ExternalLink>
                <ExternalLink href="https://spacejobfair.com/" style={{display: 'flex', justifyContent: 'end'}}>
                  <img
                    width="65%"
                    alt="Space Job Fair"
                    src="/images/spacejobfair.png"
                  />
                </ExternalLink>
                <ExternalLink href="https://www.vda.pt/en/">
                  <div style={{ backgroundColor: '#000', padding: 10, maxWidth: 200, margin: 10 }}>
                    <img
                      width="100%"
                      alt=""
                      src="/images/aaa.png"
                    />
                  </div>
                </ExternalLink>
                <ExternalLink href="https://a3space.org/" style={{marginLeft: 40, marginRight: 20}}>
                  <img
                    width="100px"
                    height="200px"
                    alt=""
                    src="/images/vda.svg"
                  />
                </ExternalLink>
              </div>

              <div className="d-flex align-items-center">
                <ExternalLink href="http://www.spaceport.academy/?fbclid=IwAR1SJNvgxBbd05YayYZYeJYmWb-sq7AgiUshpJ2bvcFvp1GSgMLsw5gIFqE" style={{marginLeft: 'auto', marginRight: 'auto'}}>
                  <img
                    width="110px"
                    height="100px"
                    alt=""
                    src="/images/spacechallanges.jpg"
                  />
                </ExternalLink>
              </div>

              <hr className="my-5"/>

              <h2>BECOME A PARTNER</h2>
              <p>
                If you would like to partner with us, fill out the form below
                and one of our staff members will get back to you.
              </p>

              <form
                action={'https://formspree.io/' + contactMail}
                method="POST"
              >
                <div className="form-group">
                  <label htmlFor="email">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    id="email"
                    required
                  />
                </div>

                <div className="d-flex">
                  <div className="form-group flex-grow-1 mr-3">
                    <label htmlFor="firstName">
                      First name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="first-name"
                      id="firstName"
                      required
                    />
                  </div>

                  <div className="form-group flex-grow-1">
                    <label htmlFor="lastName">
                      Last name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="last-name"
                      id="lastName"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="organization">
                    Organization Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="organization"
                    id="organization"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Comments</label>
                  <textarea
                    rows={10}
                    className="form-control"
                    name="subject"
                    id="message"
                    required
                  />
                </div>

                <input
                  className="btn btn-lg btn-primary"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default translate()(Partners)
