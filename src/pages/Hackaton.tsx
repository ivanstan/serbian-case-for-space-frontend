import React from 'react'
import { translate } from 'react-polyglot'
import HackathonRegistration from './HackathonRegistration'
import Popup from 'reactjs-popup'

const image = {
  backgroundImage: 'url(\'images/hackathon/belgrade.png\')',
  backgroundPosition: 'center 5%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}

const header = {
  height: 300,
  color: '#fff',
}

const sponsorRow = {
  height: 250
}

class Hackaton extends React.Component<any, any> {

  public render() {
    const { t } = this.props

    return (
      <div className="mb-5">
        <div style={image}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 col-lg-8 mx-auto pt-5" style={header}>
                <h1 style={{ fontSize: 44, fontWeight: 'bold' }}>{t('Planet Balkan Hackathon')}</h1>
                <small>organized by Serbian Case for Space Foundation</small>
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-5">
          <div className="row mb-5">
            <div className="col-12 col-lg-8 mx-auto">

              <section className="d-flex justify-content-around mb-5">
                <img src="images/logo/logo.svg" alt="SCS"/>
                <img src="images/hackathon/planet.jpg" alt="Planet" width="44%"/>
              </section>

              <section className={'mt-5 mb-5'}>
                <p>The Serbian Case for Space Foundation, together with Planet, a San Francisco based Earth imaging
                  company, is organizing the very first “Planet Balkan Hackathon”. This first-of-its-kind online event
                  will offer a unique opportunity to teams coming from Albania, Bosnia and Herzegovina, Bulgaria,
                  Croatia, Montenegro, North Macedonia, Romania, Serbia, and Slovenia to compete in one of three
                  thematic challenges using Planets satellite data - Climate Change, Agriculture or Smart Cities – and
                  win great prizes.</p>
                <p>Serbian Case for Space Foundation (SCS) is a think tank organization, established with the aim to
                  promote the importance and benefits of Serbia’s engagement in the space domain, by educating and
                  encouraging the development of space eco-system in Serbia from bottom-up. SCS's main initiatives and
                  activities are:</p>
                <ul>
                  <li>Raising the awareness of the general public in Serbia regarding numerous advantages
                    that space systems offer and diverse applications that they provide
                  </li>
                  <li>Establishing a network
                    between the private sector, academia and governmental agencies in Serbia, and connecting them to
                    international partners
                  </li>
                  <li>Organizing targeted lectures, workshops, webinars and hackathons</li>
                </ul>
              </section>

              <section className={'mb-5'}>
                <h2 className={'mb-2'}>Challenges</h2>
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

              <section className={'mb-5'}>
                <h2 className={'mb-2'}>Prizes</h2>
                Prizes will include following:

                <ul>
                  <li>Winning team</li>
                  <ul>
                    <li>Monetary award of 500 USD</li>
                    <li>3-month free account to utilise Planet’s API for the winning team (5 people) with access to
                      PlanetScope Archive
                    </li>
                    <li>AOI of 1000 sqm</li>
                    <li>Download quota of 20000sqm</li>
                  </ul>
                  <li>Runner up</li>
                  <ul>
                    <li>3-month free account to utilise Planet’s API for the winning team (5 people) with access to
                      PlanetScope Archive
                    </li>
                    <li>AOI of 1000 sqm</li>
                    <li>Download quota of 10000sqm</li>
                  </ul>
                  <li>3rd place</li>
                  <ul>
                    <li>1-month free account to utilise Planet’s API for the winning team (5 people) with access to
                      PlanetScope Archive
                    </li>
                    <li>AOI of 1000 sqm</li>
                    <li>Download quota of 5000sqm</li>
                  </ul>
                </ul>
              </section>

              <section className={'mb-5'}>
                <p className={'h5 text-center'}>Participants will be able to join various interesting workshops and they
                  will be mentored by experts
                  in the field</p>
              </section>

              <section className="d-flex justify-content-center">
                <Popup trigger={<button className="btn btn-lg btn-primary mb-5">Register</button>} position="center center"
                       modal>
                  <div style={{ background: '#fff', boxShadow: '0px 0px 10px 0px rgba(55,54,54,1)' }} className={'p-5'}>
                    <HackathonRegistration/>
                  </div>
                </Popup>
              </section>

              <section className={'mb-5'}>
                <h2 className={'mb-2'}>Sponsors</h2>
                <h3 className="h5 text-muted text-center">GOLD</h3>
                <div style={sponsorRow}/>
                <h3 className="h5 text-muted text-center">SILVER</h3>
                <div style={sponsorRow} className={'d-flex justify-content-center'}>
                  <img src={'images/hackathon/vekom.jpg'} alt={"Vekom"}/>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default translate()(Hackaton)
