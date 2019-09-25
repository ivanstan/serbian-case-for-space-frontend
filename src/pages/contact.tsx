import React from 'react';
import {contactMail} from "../config";

export class Contact extends React.Component<any, any> {

  public render() {
    return <div className="mb-5">
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-12 col-lg-8 mx-auto">
            <h2>CONTACT US</h2>
            <form action={"https://formspree.io/" + contactMail} method="POST">

              <div className="form-group">
                <label htmlFor="email">Email <span className="text-danger">*</span></label>
                <input type="text" className="form-control" name="email" id="email" required />
              </div>

              <div className="d-flex">

                <div className="form-group flex-grow-1 mr-3">
                  <label htmlFor="firstName">First name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" name="first-name" id="firstName" />
                </div>

                <div className="form-group flex-grow-1">
                  <label htmlFor="lastName">Last name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" name="last-name" id="lastName" />
                </div>

              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject <span className="text-danger">*</span></label>
                <input type="text" className="form-control" name="subject" id="subject" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message <span className="text-danger">*</span></label>
                <textarea rows={10} className="form-control" name="message" id="message" required />
              </div>

              <input className="btn btn-lg btn-success" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  }
}
