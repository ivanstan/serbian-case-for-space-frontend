import React from 'react'
import { ErrorMessage, Field, Form, Formik, FormikErrors, FormikTouched, FormikValues } from 'formik'
import { translate } from 'react-polyglot'
import { If } from 'react-if'
import Recaptcha from 'react-recaptcha'

interface ContactFormModel {
  _replyTo: string;
  subject: string;
  message: string;
  firstName: string;
  lastName: string;
  recaptcha: string;
}

class ContactForm extends React.Component<any, any> {

  public endpoint: string = 'https://app2mail.ivanstanojevic.me/application/9123a61c-0e08-11eb-b0d1-2cfda1c64332'

  public state = {
    success: false,
  }

  public initialValues: ContactFormModel = {
    _replyTo: '',
    subject: '',
    message: '',
    firstName: '',
    lastName: '',
    recaptcha: '',
  }

  public requiredFields: string[] = [
    '_replyTo', 'subject', 'message', 'firstName', 'lastName',
  ]

  public isRequired(name: string): boolean {
    return this.requiredFields.indexOf(name) > -1
  }

  onSubmit = (values: any, setSubmitting: Function, resetForm: Function) => {
    let formData = new FormData()

    for (let i in values) {
      if (values.hasOwnProperty(i)) {
        formData.append(i, values[i])
      }
    }

    fetch(this.endpoint,
      {
        body: formData,
        method: 'post',
        redirect: 'follow',
        mode: 'no-cors',
      }).then(response => {

      this.setState({
        success: true,
      })

      resetForm();

      setSubmitting(false)
    }).catch(() => {
      setSubmitting(false)
    })
  }

  validate = (values: any) => {
    const { t } = this.props
    const errors: any = {}

    for (let i in this.requiredFields) {
      let field: string = this.requiredFields[i]

      if (!values[field]) {
        errors[field] = t('Required field')
      }
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values._replyTo)) {
      errors._replyTo = t('Invalid email address')
    }

    console.log(errors)

    return errors
  }

  getErrorStyle = (errors: FormikErrors<FormikValues>, field: string): object => {
    if (errors[field]) {
      return { border: '1px solid red' }
    }

    return {}
  }

  hasError(errors: FormikErrors<FormikValues>, touched: FormikTouched<FormikValues>, name: string) {
    return errors[name] && touched[name]
  }

  render() {
    const { t } = this.props

    return (
      <Formik
        enableReinitialize={true}
        initialValues={this.initialValues}
        validate={(values) => this.validate(values)}
        onSubmit={(values: ContactFormModel, { setSubmitting, resetForm }: any) => this.onSubmit(values, setSubmitting, resetForm)}
      >
        {({ isSubmitting, isValid, errors, touched, setFieldValue }) => (
          <Form translate="yes">
            <If condition={this.state.success}>
              <div className="alert alert-success" role="alert">
                <strong>Thank you!</strong> Your message has been sent.
              </div>
            </If>

            <div className="d-flex">
              <div className="form-group mb-0 flex-grow-1 mr-3">
                <label htmlFor="firstName">
                  {t('First Name')} {this.isRequired('firstName') && <span className="text-danger">*</span>}
                </label>
                <Field type="text" name="firstName" className={'form-control'}
                       style={this.getErrorStyle(errors, 'firstName')}/>
                <ErrorMessage name="firstName" component="small" className="form-text text-danger"/>
                {!this.hasError(errors, touched, 'firstName') && <small className="form-text">&nbsp;</small>}
              </div>

              <div className="form-group mb-0 flex-grow-1">
                <label htmlFor="lastName">
                  {t('First Name')} {this.isRequired('lastName') && <span className="text-danger">*</span>}
                </label>
                <Field type="text" name="lastName" className={'form-control'}
                       style={this.getErrorStyle(errors, 'lastName')}/>
                <ErrorMessage name="lastName" component="small" className="form-text text-danger"/>
                {!this.hasError(errors, touched, 'lastName') && <small className="form-text">&nbsp;</small>}
              </div>
            </div>

            <div className="form-group mb-0">
              <label htmlFor="_replyTo">
                {t('Email')} {this.isRequired('_replayTo') && <span className="text-danger">*</span>}
              </label>
              <Field type="email" name="_replyTo" className={'form-control'}
                     style={this.getErrorStyle(errors, '_replyTo')}/>
              <ErrorMessage name="_replyTo" component="small" className="form-text text-danger"/>
              {!this.hasError(errors, touched, '_replyTo') && <small className="form-text">&nbsp;</small>}
            </div>

            <div className="form-group mb-0">
              <label htmlFor="subject">
                {t('Subject')} {this.isRequired('subject') && <span className="text-danger">*</span>}
              </label>
              <Field type="text" name="subject" className={'form-control'}
                     style={this.getErrorStyle(errors, 'subject')}/>
              <ErrorMessage name="subject" component="small" className="form-text text-danger"/>
              {!this.hasError(errors, touched, 'subject') && <small className="form-text">&nbsp;</small>}
            </div>

            <div className="form-group mb-0">
              <label htmlFor="message">
                {t('Message')} {this.isRequired('message') && <span className="text-danger">*</span>}
              </label>
              <Field as="textarea" name="message" className={'form-control'} rows={10}
                     style={this.getErrorStyle(errors, 'message')}/>
              <ErrorMessage name="message" component="small" className="form-text text-danger"/>
              {!this.hasError(errors, touched, 'message') && <small className="form-text">&nbsp;</small>}
            </div>

            {/*<fieldset className="mb-4">*/}
            {/*  <Recaptcha*/}
            {/*    sitekey="6LeJyuEZAAAAAMbGVDQUL9vUY5qLhaLX_RkeZcdb"*/}
            {/*    verifyCallback={(response) => setFieldValue('recaptcha', response)}*/}
            {/*    expiredCallback={() => setFieldValue('recaptcha', '')}*/}
            {/*  />*/}
            {/*  {errors['recaptcha'] &&*/}
            {/*  <small className="form-text text-danger">{t('Recaptcha challenge is required.')}</small>}*/}
            {/*  {!this.hasError(errors, touched, 'recaptcha') && <small className="form-text">&nbsp;</small>}*/}
            {/*</fieldset>*/}

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-lg btn-primary" disabled={!isValid || isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    )
  }
}

export default translate()(ContactForm)
