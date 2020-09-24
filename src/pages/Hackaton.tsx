import React from 'react'
import { translate } from 'react-polyglot'
import HackathonRegistration from './HackathonRegistration'
import Popup from 'reactjs-popup'
import { ExternalLink } from '../components/ExternalLink'

const image = {
  backgroundImage: 'url(\'images/hackathon/belgrade.png\')',
  backgroundPosition: 'center 5%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}

const header = {
  height: 300,
}

const sponsorRow = {
  height: 250,
}

const blue = {
  width: '35%',
  height: 300,
  background: '#4E81B9',
  float: 'left' as 'left',
}

const blueContainer = {

};

class Hackaton extends React.Component<any, any> {

  public render() {
    const { t } = this.props

    return (
      <div className="mb-5">
        <div style={image}>
          {/*<div style={blue}>*/}
          {/*  <div style={blueContainer}>*/}
          {/*    <h1>Planet Balkan Hackathon</h1>*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className="container">
            <div className="row mb-5">
              <div className="col-7 col-lg-7 mx-auto pt-5" style={header}>
                <section className="d-flex justify-content-around mb-5 p-4" style={{ background: '#fff' }}>
                  <div className="d-flex flex-column">
                    <img src="images/logo/logo.svg" alt="SCS" width="70%" className="m-auto"/>
                    <span className="text-center">Serbian Case For Space</span>
                  </div>
                  <img src="images/hackathon/planet.jpg" alt="Planet" width="44%"/>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-5">
          <div className="row mb-5">
            <div className="col-12 col-lg-12 mx-auto">

              <section className="justify-content-around mb-5">
                <h1 style={{ fontSize: 44, fontWeight: 'bold' }}>{t('Planet Balkan Hackathon')}</h1>
                <small style={{ position: 'relative', top: -18 }}>organized by Serbian Case for Space Foundation</small>
                <h2 className={'h5 mb-0'}>31. October - 1. November</h2>
                <p>Online event</p>
              </section>

              <section>
                <p className="mb-5">The Serbian Case for Space Foundation, together with Planet, a San Francisco based Earth imaging
                  company, is organizing the very first “Planet Balkan Hackathon”. This first-of-its-kind online event
                  will offer a unique opportunity to teams coming from Albania, Bosnia and Herzegovina, Bulgaria,
                  Croatia, Montenegro, North Macedonia, Romania, Serbia, and Slovenia to compete in one of three
                  thematic challenges using Planets satellite data - Climate Change, Agriculture or Smart Cities – and
                  win great prizes.</p>
              </section>

              <section className="d-flex justify-content-center">
                <Popup trigger={<button className="btn btn-lg btn-primary mb-5">Register</button>}
                       position="center center"
                       modal>
                  <div style={{ background: '#fff', boxShadow: '0px 0px 10px 0px rgba(55,54,54,1)' }} className={'p-5'}>
                    <HackathonRegistration/>
                  </div>
                </Popup>
              </section>

              <section className={'mb-5'}>
                <h2 className={'mb-2 text-center'}>Challenges</h2>
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
                <h2 className={'mb-5 text-center'}>Prizes</h2>
                <div className="card-deck mb-3 text-center">
                  <div className="card mb-4 box-shadow">
                    <div className="card-header">
                      <h4 className="my-0 font-weight-normal">Winning team</h4>
                    </div>
                    <div className="card-body">
                      {/*<h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>*/}
                      <ul className="mt-3 mb-4 text-left">
                        <li>Monetary award of 500 USD</li>
                        <li>3-month free account to utilise Planet’s API for the winning team (5 people) with access to
                          PlanetScope Archive
                        </li>
                        <li>AOI of 1000 sqm</li>
                        <li>Download quota of 20000sqm</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card mb-4 box-shadow">
                    <div className="card-header">
                      <h4 className="my-0 font-weight-normal">Runner up</h4>
                    </div>
                    <div className="card-body">
                      {/*<h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>*/}
                      <ul className="text-left mt-3 mb-4">
                        <li>3-month free account to utilise Planet’s API for the winning team (5 people) with access to
                          PlanetScope Archive
                        </li>
                        <li>AOI of 1000 sqm</li>
                        <li>Download quota of 10000sqm</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card mb-4 box-shadow">
                    <div className="card-header">
                      <h4 className="my-0 font-weight-normal">3rd place</h4>
                    </div>
                    <div className="card-body">
                      {/*<h1 className="card-title pricing-card-title">$29 <small className="text-muted">/ mo</small></h1>*/}
                      <ul className="text-left mt-3 mb-4">
                        <li>1-month free account to utilise Planet’s API for the winning team (5 people) with access to
                          PlanetScope Archive
                        </li>
                        <li>AOI of 1000 sqm</li>
                        <li>Download quota of 5000sqm</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className={'mb-5'}>
                <p className={'h5 text-center'}>Participants will be able to join various interesting workshops and they
                  will be mentored by experts
                  in the field</p>
              </section>

              <section className="d-flex justify-content-center">
                <Popup trigger={<button className="btn btn-lg btn-primary mb-5">Register</button>}
                       position="center center"
                       modal>
                  <div style={{ background: '#fff', boxShadow: '0px 0px 10px 0px rgba(55,54,54,1)' }} className={'p-5'}>
                    <HackathonRegistration/>
                  </div>
                </Popup>
              </section>

              <section className={'mt-2 mb-5'}>
                <h2 className={'mb-5 text-center'}>Organizers</h2>
                <img src="images/logo/logo.svg" alt="SCS" width="8%" style={{float: 'left'}} className={'mr-3 ml-3'}/>
                <p className={"mt-3"}>Serbian Case for Space Foundation (SCS) is a think tank organization, established with the aim to
                  promote the importance and benefits of Serbia’s engagement in the space domain, by educating and
                  encouraging the development of space eco-system in Serbia from bottom-up.</p>

                <img src="images/hackathon/planet.jpg" alt="Planet" width="13%" style={{float: 'left'}} className={'mt-3 mr-3 ml-3'}/>
                <p>Planet is the leading provider of global, near-daily satellite imagery data and insights. Planet is
                  driven by a mission to image all of Earth’s landmass every day, and make global change visible,
                  accessible and actionable. Founded in 2010 by three NASA scientists, Planet designs, builds, and
                  operates the largest earth observation fleet of satellites, and provides the online software, tools
                  and analytics needed to deliver data to users. Decision makers in business, government, and within
                  organizations can use Planet's data and machine learning-powered analytics to develop new
                  technologies, drive revenue, power research, and make informed, timely decisions to solve our world's
                  toughest challenges. To learn more visit <ExternalLink>www.planet.com</ExternalLink> and follow us on Twitter at @planetlabs.</p>
              </section>

              <section className={'mb-5'}>
                <h2 className={'mb-5 text-center'}>Sponsors</h2>
                <h3 className="h5 text-muted text-center">GOLD</h3>
                <div style={sponsorRow} className={'d-flex justify-content-center'}>
                  <img src={'images/hackathon/tg.svg'} alt={'TeleGroup'}/>
                </div>
                <h3 className="h5 text-muted text-center">SILVER</h3>
                <div style={sponsorRow} className={'d-flex justify-content-center'}>
                  <img src={'images/hackathon/vekom.jpg'} alt={'Vekom'}/>
                  <img src={'images/hackathon/tehnomarket.png'} alt={'Tehnomarket'} width="40%"/>
                  <img src={'images/hackathon/10.png'} alt={'Konelek'} width="70%"/>
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
