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
              <h1 className={'mb-4'}>{t('HACKATHON')}</h1>

              <section>
                <h2 className={'mb-4'}>Challenges</h2>
                <article>
                  <h1 className={'h4'}>Climate change</h1>
                  <div className={'d-md-flex'}>
                    <img src={'/images/hackathon/thermometer.svg'} alt={'Climate change'}
                         className={'d-block mx-auto my-4 mr-md-4'} style={{ maxWidth: 200 }}/>
                    <p>
                      Changes in the global climate pose a threat to our societies, economies and way of living
                      affecting
                      our
                      capacity to produce food, store clean water and keep the population safe. Earth Observation data
                      can
                      be
                      useful for understanding, forecasting, monitoring, reacting and recovering from these changes.
                      Using
                      Planet data, your challenge is to provide novel solutions that can be used to help local
                      communities
                      respond to climate events either proactive or reactively. Planet’s imaging products are
                      particularly
                      useful for measuring water levels and due to the near daily cadence, reacting fast to natural
                      hazards.
                    </p>
                  </div>
                </article>
                <article>
                  <h1 className={'h4'}>Agriculture</h1>
                  <div className={'d-md-flex'}>
                    <img src={'/images/hackathon/plant.svg'} alt={'Agriculture'}
                         className={'d-block mx-auto my-4 mr-md-4'} style={{ maxWidth: 200 }}/>
                    <p>
                      Farmers around the world have been using Earth Observation and other remote sensing data, such as
                      Sentinel, to plan, monitor and analyze their fields, crops and yield. Planet data brings along a
                      higher
                      cadence and resolution that allows to see more detailed change at a near daily frequency. In the
                      Balkans,
                      different challenges have risen due to the COVID-19 global pandemic: stay-at-home policies have
                      affected
                      yield, disruptions in the supply chain made it difficult to keep crops healthy, among others. Your
                      challenge is to use Planet data together with other ancillary regional data to help regional
                      farmers
                      and
                      governments to understand the effects of the pandemic on the local agricultural industries
                      providing
                      creative solutions for field monitoring.
                    </p>
                  </div>
                </article>
                <article>
                  <h1 className={'h4'}>Smart Cities</h1>
                  <div className={'d-md-flex'}>
                    <img src={'/images/hackathon/city.svg'} alt={'Agriculture'}
                         className={'d-block mx-auto my-4 mr-md-4'} style={{ maxWidth: 200 }}/>
                    <p>
                      According to the European Commission, to live in a Smart City is to live in a city where modern
                      technologies are used to improve the quality of life of its inhabitants. Managing city resources,
                      sustainable urban development, smart urban mobility, policy and regulation monitoring, open data
                      governance, integrated planning and management, among others, are some of the aspects of urban
                      life
                      that can be tackled using modern day tools, data and services. Using Planet’s imagery, you’ll have
                      access to near-daily monitoring capabilities to design integrated smart city solutions that can
                      help
                      solve current limitations on the aforementioned topics.
                    </p>
                  </div>
                </article>
              </section>

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
                    <option value="Climate change">Climate change</option>
                    <option value="Agriculture">Agriculture</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Do you have a team? <span className="text-danger">*</span></label>
                  <div>
                    <label className="radio-inline mr-4"><input type="radio" name="optradio"
                                                                onChange={e => this.hasTeamChange(true)}
                                                                checked={this.state.hasTeam}/> Yes</label>
                    <label className="radio-inline"><input type="radio" name="optradio"
                                                           onChange={e => this.hasTeamChange(false)}
                                                           checked={!this.state.hasTeam}/> No</label>
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