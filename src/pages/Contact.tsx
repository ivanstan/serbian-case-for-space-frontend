import React from 'react'
import { contactMail } from '../config'
import { translate } from 'react-polyglot'

class Contact extends React.Component<any, any> {
  public render() {
    const { t } = this.props;

    return (
      <div className="mb-5">
        <div className="container mb-5">
          <div className="row mb-5">
            <div className="col-12 col-lg-8 mx-auto">
              <h2>{t('CONTACT US')}</h2>
              <form
                action={'https://formspree.io/' + contactMail}
                method="POST"
              >
                <div className="form-group">
                  <label htmlFor="email">
                    {t('Email')} <span className="text-danger">*</span>
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
                      {t('First name')} <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="first-name"
                      id="firstName"
                    />
                  </div>

                  <div className="form-group flex-grow-1">
                    <label htmlFor="lastName">
                      {t('Last name')} <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="last-name"
                      id="lastName"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    {t('Subject')} <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    {t('Message')} <span className="text-danger">*</span>
                  </label>
                  <textarea
                    rows={10}
                    className="form-control"
                    name="message"
                    id="message"
                    required
                  />
                </div>

                <input
                  className="btn btn-lg btn-primary"
                  type="submit"
                  value={t('Submit')}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default translate()(Contact)
