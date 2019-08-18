import React from 'react';
import {contactMail} from "../config";

export class Partners extends React.Component<any, any> {

  public render() {
    return <div className="mb-5">
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-12 col-lg-8 mx-auto">
            <h2>OUR PARTNERS SUPPORT OUR WORK AND ONLY TOGETHER CAN WE REACH OUR GOALS.</h2>

            <hr className="my-5" />

            <div className="d-flex align-items-center">
              <img height="2%" width="19%" alt="BFPE"src="/images/bfpe.jpg" />
              <img height="2%" width="20%" alt="Share" src="/images/share.jpg" />
              <img height="2%" width="12%" alt="Jedan Stepen" src="/images/1c.png" />
              <img height="2%" width="20%" alt="ECSL" src="/images/ecsl2.png" />
              <img height="2%" width="14%" alt="FEA" src="/images/fea.jpg" />
              <img height="2%" width="14%" alt="Space Job Fair" src="/images/spacejobfair.png" />
            </div>

            <hr className="my-5" />

            <h2>BECOME A PARTNER</h2>
            <p>If you would like to partner with us, fill out the form below and one of our staff
              members will get back to you.</p>

            <form action={"https://formspree.io/" + contactMail} method="POST">

              <div className="form-group">
                <label htmlFor="email">Email <span className="text-danger">*</span></label>
                <input type="text" className="form-control" name="email" id="email" required />
              </div>

              <div className="d-flex">

                <div className="form-group flex-grow-1 mr-3">
                  <label htmlFor="firstName">First name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" name="first-name" id="firstName" required/>
                </div>

                <div className="form-group flex-grow-1">
                  <label htmlFor="lastName">Last name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" name="last-name" id="lastName" required/>
                </div>

              </div>

              <div className="form-group">
                <label htmlFor="organization">Organization Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" name="organization" id="organization" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Comments</label>
                <textarea rows={10} className="form-control" name="subject" id="message" required />
              </div>

              <input className="btn btn-lg btn-success" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  }
}
