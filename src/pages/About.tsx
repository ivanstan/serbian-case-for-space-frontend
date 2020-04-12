import React from 'react'
import { title } from './Home'
import ScrollAnimation from 'react-animate-on-scroll'
import { translate } from 'react-polyglot'

const image = {
  backgroundImage: 'url(/images/earth-space.jpg)',
  backgroundSize: 'cover',
  height: '50vh',
  position: 'relative' as 'relative',
}

const item = {
  flexGrow: 1,
  flexBasis: 0,
}

const p = {
  ...item,
  padding: '2em',
}

class About extends React.Component<any, any> {
  public render() {
    return (
      <div className="mb-5">
        <div style={image} className="mb-5">
          <h2 style={title}>WHAT WE DO</h2>
        </div>

        <div className="container mb-5">
          <div className="row mb-5">
            <div className="col-12 col-lg-8 mx-auto">
              <h1 className="mb-4">OUR MISSION</h1>
              <p>
                Serbian Case for Space Foundation (SCS) provides decision-makers
                and private actors with up-to-date analysis of industrial
                capabilities in the region and offers informed view on mid- to
                long-term benefits of engaging in space activities. In this
                context, SCS acts as an independent platform for developing
                national space policies and strategies.
              </p>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-12 col-lg-8 mx-auto d-flex align-items-center">
              <div style={item}>
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  duration={1}
                  animateOnce={true}
                >
                  <img width="100%" src="/images/graph.jpg" alt=""/>
                </ScrollAnimation>
              </div>
              <p style={p}>
                Supporting the development of domestic private industry
                interested in expanding its services and products to the space
                domain.
              </p>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-12 col-lg-8 mx-auto d-flex align-items-center">
              <p style={p}>
                Building bridges between all the relevant stakeholders: private
                industry, academia, and decision makers.
              </p>
              <div style={item}>
                <ScrollAnimation
                  animateIn="fadeInRight"
                  duration={1}
                  animateOnce={true}
                >
                  <img width="100%" src="/images/ada.jpg" alt=""/>
                </ScrollAnimation>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-12 col-lg-8 mx-auto d-flex align-items-center">
              <div style={item}>
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  duration={1}
                  animateOnce={true}
                >
                  <img width="100%" src="/images/satelit.jpg" alt=""/>
                </ScrollAnimation>
              </div>
              <p style={p}>
                Raising awareness and facilitating the exchange of
                space-relevant information and experiences between international
                partners and local stakeholders.
              </p>
            </div>
          </div>

          <article className="row mb-5">
            <div className="col-12 col-lg-8 mx-auto">
              <h2 className="h4">
                What is Serbian Case for Space Foundation?
              </h2>
              <p>
                In order to answer this question, we will introduce the aims
                of our foundation bearing in mind that space related topics
                are neglected in Serbia in spite of their relevancy for
                economic development, security and quality of everyday life.
              </p>
              <p>
                In Serbia, space governance, space technology, space law and
                their significance tend to be linked to science fiction or
                perceived as an expensive and, more importantly, exclusive
                realm only a select few superpowers can take part in.
                Fortunately, the space club is not as exclusive nor as
                unreachable as one would think. Among else, Austria,
                Luxembourg, Belgium, Lebanon, Costa Rica, Indonesia, Ghana,
                Kenya and regional states like Slovenia, Romania, Hungary and
                Greece have expressed their interest in devising a national
                space policy program and joined relevant UN bodies (Committee
                on the Peaceful Uses of Outer Space, COPUOS). Serbia is not a
                spacefaring nation, it does not have a space programme nor
                does it participate in space activities. However, it does not
                have to start from the beginning since Yugoslavia signed in
                the late sixties four of the five existing space treaties.
                This means that Serbia has firm ground to develop its space
                strategy and join international institutions, especially those
                for which it already fulfills initial requirements for
                membership.
              </p>
              <em>Serbian Case for Space Foundation (SCS)</em> was established
              with a threefold aim:
              <br/>
              <br/>
              <ul>
                <li>
                  contributing to the development of space strategy by
                  providing comparative analyses of space policies and
                  conducting research on the national industrial capacities;
                </li>
                <li>
                  {' '}
                  making decision-makers aware of the potential economic
                  benefits deriving from space activities and systems. It is
                  worth noting that global revenue from space-related
                  activities in 2016 was 329 billion dollars and it has been
                  thriving at a compound annual growth rate of 9.52 per cent
                  in the past twenty years;
                </li>
                <li>
                  {' '}
                  inspiring and engaging private sector in the space domain.
                </li>
              </ul>
              <h3 className="h4 my-3">SCS and decision-makers</h3>
              Participation in international organizations that deal with
              space activities would give Serbia access to a new pool of
              funds, the possibility to take part in innovative projects and
              to utilize state of the art technology. Despite the fact that
              Serbia is a small, developing country, it can immediately begin
              to harvest these benefits, as the Article 1 of the Outer Space
              Treaty indicates: “The exploration and use of outer space […]
              shall be carried out for the benefit and in the interests of all
              countries, irrespective of their degree of economic or
              scientific development, and shall be the province of all
              mankind”.
              <h3 className="h4 my-3">SCS and private sector</h3>
              <p>
                Most people have some idea about the usage of satellite
                technology in navigation, communications and Earth
                observation. However, space exploration and satellite
                applications go beyond what a layman can cite, and pervade
                many fields crucial for the safety and quality of human lives,
                such as transportation, medicine, agriculture, environment and
                disaster management (e.g. telemedicine, pollution monitoring,
                drought and flood predictions). Scientific and technological
                innovations in the sphere of space have become a vehicle for
                economic and social growth as well as global
                interconnectedness. This has created opportunities for private
                sector to engage in space industry and benefit from commercial
                possibilities. SCS will strive to connect existing private
                companies, both locally and internationally, thereby helping
                them to expand their products and services to the space
                domain. In addition, SCS hopes that such cooperation would
                lead to the creation of national start-ups in this field as
                space systems will play an increasingly important role in
                modern societies.
              </p>
              <p>
                For all these reasons, SCS will urge decision-makers, by
                providing credible legal arguments and strategic information,
                to now formally include Serbia in the global space community
                and open the forgotten doors and windows to the advantages
                that derive from outer space activities.
              </p>
            </div>
          </article>
        </div>
      </div>
    )
  }
}

export default translate()(About)
