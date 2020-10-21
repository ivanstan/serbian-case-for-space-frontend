import React from 'react'
import { contactMail } from '../config'
import { translate } from 'react-polyglot'
import ContactForm from '../components/ContactForm'

class Contact extends React.Component<any, any> {
  public render() {
    const { t } = this.props

    return (
      <div className="mb-5">
        <div className="container mb-5">
          <div className="row mb-5">
            <div className="col-12 col-lg-8 mx-auto">
              <h2>{t('CONTACT US')}</h2>
              <ContactForm/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default translate()(Contact)
