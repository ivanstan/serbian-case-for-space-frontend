import React from 'react'
import { translate } from 'react-polyglot'
import { Link } from 'react-router-dom'

class Hackaton extends React.Component<any, any> {

  state = {
    hasTeam: false,
  }

  hasTeamChange = (checked: boolean) => {
    this.setState({ hasTeam: checked })
  }

  public render() {
    const { t } = this.props

    return (
      <div className="mb-5">
        <div className="container mb-5">
          <div className="row mb-5">
            <div className="col-12 col-lg-8 mx-auto">
              <h2>{t('HACKATHON')}</h2>
              <form
                action={'https://formspree.io/scs@serbiancaseforspace.com'}
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
                      required
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
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    {t('Country')} <span className="text-danger">*</span>
                  </label>
                  <select name="country" className="form-control" required>
                    <option value="Serbia">Serbia</option>
                    <option value="Croatia">Croatia</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="challenge">
                    {t('Challenge')} <span className="text-danger">*</span>
                  </label>
                  <select name="challenge" className="form-control">
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Do you have a team? <span className="text-danger">*</span></label>
                  <div>
                    <label className="radio-inline mr-4"><input type="radio" name="optradio"
                                                                onChange={e => this.hasTeamChange(true)} checked={this.state.hasTeam}/> Yes</label>
                    <label className="radio-inline"><input type="radio" name="optradio"
                                                           onChange={e => this.hasTeamChange(false)} checked={!this.state.hasTeam}/> No</label>
                  </div>
                </div>

                {this.state.hasTeam && <div className="form-group">
                  <label htmlFor="team">
                    {t('Team name')} <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="team"
                    id="team"
                  />
                  <small className="text-muted">Each member of the team should register with the same team name.</small>
                </div>}

                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="terms" required/>
                  <label className="form-check-label" htmlFor="terms">I accept <Link to={'/terms-of-use'}>terms of
                    use</Link>.</label>
                </div>

                <div className="d-flex justify-content-center">
                  <input
                    className="btn btn-lg btn-primary"
                    type="submit"
                    value={t('Submit')}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default translate()(Hackaton)
