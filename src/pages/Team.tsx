import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { translate } from "react-polyglot";

const img = {
  maxWidth: 315,
  minWidth: 315,
  maxHeight: 484
};

const image = {
  backgroundImage: "url(/images/team.jpg)",
  backgroundSize: "cover",
  height: "50vh",
  position: "relative" as "relative",
  backgroundPosition: "center"
};

export const title = {
  fontSize: 74,
  color: '#fff',
  position: 'absolute' as 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  textAlign: 'center' as 'center',
  width: '100%',
}

class Team extends React.Component<any, any> {
  public render() {
    return (
      <div className="mb-5">
        <div style={image} className="mb-5">
          <h2 style={title}>TEAM</h2>
        </div>

        <div className="container mb-5">
          <div className="row mb-5">
            <div className="col-12 col-lg-8 mx-auto">
              <div className="mb-5">
                <div className="d-lg-flex mb-1">
                  <img
                    style={img}
                    width="100%"
                    src="/images/team/anja.jpg"
                    alt="Anja Nakarada Pecujlic"
                  />
                  <div className="px-lg-4 mt-4 mt-lg-0">
                    <h2 className="h4">Dr. ANJA NAKARADA PEČUJLIĆ</h2>
                    {/*<ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>*/}
                    <p>
                      Anja holds a doctorate degree in space law from University of Cologne and she is working for a
                      space start-up, Axelspace, as a Business Creator for Europe. Prior to that, from 2017 until 2020
                      she was the Project Manager for a European Space Agency (ESA)/Cologne University joint project:
                      “ESA Convention Commentary” and from 2014 to 2016, she was an External Consultant of the European
                      Space Policy Institute in Vienna, Austria. Furthermore, Anja published numerous articles and book
                      chapters, and she was one of the editors of the book "Promoting Productive Cooperation between
                      Space Lawyers and Engineers". Lastly, Anja is an SGAC's National Point of Contact for Serbia and
                      she serves as a judge for Manfred Lachs Moot Court competition
                    </p>
                    {/*</ScrollAnimation>*/}
                  </div>
                </div>
                <p>Co-founder and CEO</p>
              </div>

              <div className="mb-5">
                <div className="d-lg-flex mb-1">
                  <img
                    style={img}
                    width="100%"
                    src="/images/team/marko.jpg"
                    alt="Marko Pajovic"
                  />
                  <div className="px-lg-4 mt-4 mt-lg-0">
                    <h2 className="h4">MARKO PAJOVIĆ</h2>
                    {/*<ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>*/}
                    <p>
                      Marko is a lawyer with several years of experience in project management. He is one of the
                      creators and executive members of the project "Forest and Climate", which won several domestic and
                      international awards. Furthermore, he is the project lead for the "SpaceHub" activities, which
                      focuses on commercial utilisation of Earth Observation data satellite data. Prior to that, he
                      worked with a number of NGOs in Serbia on different projects regarding monitoring human rights
                      violations. Lastly, Marco is the second SGAC's National Point of Contact for Serbia.
                    </p>
                    {/*</ScrollAnimation>*/}
                  </div>
                </div>
                <p>Co-founder and COO</p>
              </div>

              <div className="mb-5">
                <div className="d-lg-flex mb-1">
                  <img
                    style={img}
                    width="100%"
                    src="/images/team/andrej.jpg"
                    alt="Andrej Djurmez"
                  />
                  <div className="px-lg-4 mt-4 mt-lg-0">
                    <h2 className="h4">ANDREJ ĐURMEZ</h2>
                    <ScrollAnimation
                      animateIn="fadeInUp"
                      duration={1}
                      animateOnce={true}
                    >
                      <p>
                        Andrej is a founder and senior partner at Mustur&Djurmez attorneys office. Prior to that, from
                        2014 to 2019 he worked as a junior partner in a regional attorneys office "Simic and company".
                        His main focus is corporate law, contract law and litigation. He holds a Master degree in
                        corporate law from the Faculty of Law, University of Belgrade, Serbia.
                      </p>
                    </ScrollAnimation>
                  </div>
                </div>
                <p>Co-founder and CCO</p>
              </div>

              <div className="mb-5">
                <div className="d-lg-flex mb-1">
                  <img
                    style={img}
                    width="100%"
                    src="/images/team/ivan.png"
                    alt="Ivan Stanojevic"
                  />
                  <div className="px-lg-4 mt-4 mt-lg-0">
                    <h2 className="h4">IVAN STANOJEVIĆ</h2>
                    <ScrollAnimation
                      animateIn="fadeInUp"
                      duration={1}
                      animateOnce={true}
                    >
                      <p>
                        Ivan is a software engineer working for
                        Byteout Software. There he has gathered a team of
                        enthusiasts in order to organize NASA Space Apps
                        Challenge in Serbia. He is also taking a role of the
                        Space Apps lead for Belgrade. He holds a degree in
                        software engineering from Singidunum University in
                        Belgrade.
                      </p>
                    </ScrollAnimation>
                  </div>
                </div>
                <p>CTO</p>
              </div>

              <div className="mb-5">
                <div className="d-lg-flex mb-1">
                  <img
                    style={img}
                    width="100%"
                    src="/images/team/dalibor.jpg"
                    alt="DALIBOR ĐURAN"
                  />
                  <div className="px-lg-4 mt-4 mt-lg-0">
                    <h2 className="h4">DALIBOR ĐURAN</h2>
                    <ScrollAnimation
                      animateIn="fadeInUp"
                      duration={1}
                      animateOnce={true}
                    >
                      <p>
                        Works at Planet as Director for Spacecraft Manufacturing and NPI. Prior to that, Dalibor was
                        Managing Vice President at Gartner and in addition, he is a Co-founder and COO of Drones-X Inc.
                      </p>
                    </ScrollAnimation>
                  </div>
                </div>
                <p>Advisor</p>
              </div>


              <div className="mb-5">
                <div className="d-lg-flex mb-1">
                  <img
                    style={img}
                    width="100%"
                    src="/images/team/dusan.png"
                    alt="DUSAN PAVLOVIĆ"
                  />
                  <div className="px-lg-4 mt-4 mt-lg-0">
                    <h2 className="h4">DUSAN PAVLOVIĆ</h2>
                    <ScrollAnimation
                      animateIn="fadeInUp"
                      duration={1}
                      animateOnce={true}
                    >
                      <p>
                        Dusan is a Mechanical (Aerospace) Engineer and a Commercial Pilot. During his work as a Design
                        Engineer, Dusan participated in various Aerospace projects gaining experience in Unmanned Aerial
                        Systems, Composite Structures and testing process.
                      </p>
                    </ScrollAnimation>
                  </div>
                </div>
                <p>Project Assistant</p>
              </div>


              <div className="mb-5">
                <div className="d-lg-flex mb-1">
                  <img
                    style={img}
                    width="100%"
                    src="/images/team/jelena.jpg"
                    alt="JELENA ALEKSIĆ"
                  />
                  <div className="px-lg-4 mt-4 mt-lg-0">
                    <h2 className="h4">JELENA ALEKSIĆ</h2>
                    <ScrollAnimation
                      animateIn="fadeInUp"
                      duration={1}
                      animateOnce={true}
                    >
                      <p>
                        Jelena is an engineer working in the aerospace industry and a participant in numerous projects,
                        mostly related to Unmanned Aerial Systems. Jelena is educated at University of Belgrade, where
                        she received her Master's degree in Air Transport and Traffic Engineering.
                      </p>
                    </ScrollAnimation>
                  </div>
                </div>
                <p>Project Assistant</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default translate()(Team)
