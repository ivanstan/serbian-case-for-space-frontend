import { Link } from 'react-router-dom'
import React from 'react'
import { translate } from 'react-polyglot'
import { ExternalLink } from '../components/ExternalLink'

class HackathonRegistration extends React.Component<any> {
  state = {
    hasTeam: false,
  }

  hasTeamChange = (checked: boolean) => {
    this.setState({ hasTeam: checked })
  }

  render(): any {
    const { t } = this.props

    return (
      <form
        action="https://formspree.io/scs@serbiancaseforspace.com"
        method="POST"
      >
        <div className="form-group">
          <label htmlFor="email">
            {t('Email')} <span className="text-danger">*</span>
          </label>
          <input
            className="form-control"
            id="email"
            name="email"
            required
            type="text"
          />
        </div>

        <div className="d-flex">
          <div className="form-group flex-grow-1 mr-3">
            <label htmlFor="firstName">
              {t('First name')} <span className="text-danger">*</span>
            </label>
            <input
              className="form-control"
              id="firstName"
              name="first-name"
              required
              type="text"
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
          <select className="form-control" name="country" required>
            <option value="Albania">Albania</option>
            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Croatia">Croatia</option>
            <option value="Montenegro">Montenegro</option>
            <option value="North Macedonia">North Macedonia</option>
            <option value="Romania">Romania</option>
            <option value="Serbia">Serbia</option>
            <option value="Slovenia">Slovenia</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="challenge">
            {t('Challenge')} <span className="text-danger">*</span>
          </label>
          <select className="form-control" name="challenge">
            <option value="Climate change">Climate change</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Smart Cities">Smart Cities</option>
          </select>
        </div>

        <div className="form-group">
          <label>
            Do you have a team? <span className="text-danger">*</span>
          </label>
          <div>
            <label className="radio-inline mr-4">
              <input
                checked={this.state.hasTeam}
                name="optradio"
                onChange={e => this.hasTeamChange(true)}
                type="radio"
              />
              &nbsp;Yes
            </label>
            <label className="radio-inline">
              <input
                checked={!this.state.hasTeam}
                name="optradio"
                onChange={e => this.hasTeamChange(false)}
                type="radio"
              />
              &nbsp;No
            </label>
          </div>
        </div>

        {this.state.hasTeam && (
          <div className="form-group">
            <label htmlFor="team">
              {t('Team name')} <span className="text-danger">*</span>
            </label>
            <input className="form-control" id="team" name="team" type="text"/>
            <small className="text-muted">
              Each member of the team should register with the same team name.
            </small>
          </div>
        )}

        <div className="form-check">
          <input
            className="form-check-input"
            id="terms"
            required
            type="checkbox"
          />
          <label className="form-check-label" htmlFor="terms">
            I accept
            <Link to="/terms-of-use">terms of use</Link>.
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            id="cod"
            required
            type="checkbox"
          />
          <label className="form-check-label" htmlFor="cod">
            I accept <ExternalLink href="https://developers.planet.com/codeofconduct/">Code of Conduct</ExternalLink>.
          </label>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <input
            className="btn btn-lg btn-primary"
            type="submit"
            value={t('Submit')}
          />
        </div>
      </form>
    )
  }
}

export default translate()(HackathonRegistration)
