import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const img = {
  maxWidth: 315
};

export class Team extends React.Component<any, any> {

  public render() {
    return <div className="mb-5">
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-12 col-lg-8 mx-auto">

            <div className="mb-5">
              <div className="d-lg-flex mb-1">
                <img style={img} width="100%" src="/images/anja.jpg" alt="Anja Nakarada Pecujlic"/>
                <div className="px-lg-4 mt-4 mt-lg-0">
                  <h2 className="h4">ANJA NAKARADA PEČUJLIĆ</h2>
                  {/*<ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>*/}
                  <p>Anja Nakarada Pecujlic is a PhD candidate and assistant researcher at
                    the
                    University of Cologne where she is writing her thesis on space law. Prior to
                    that, she was an External Consultant to the European Space Policy Institute in
                    Vienna on space law and policy topics. She graduated in 2014 from the Law
                    Faculty of the University of Vienna specializing in international law.</p>
                  {/*</ScrollAnimation>*/}
                </div>
              </div>
              <p>Co-founder and CEO</p>
            </div>

            <div className="mb-5">
              <div className="d-lg-flex mb-1">
                <img style={img} width="100%" src="/images/marko.jpg" alt="Marko Pajovic"/>
                <div className="px-lg-4 mt-4 mt-lg-0">
                  <h2 className="h4">MARKO PAJOVIĆ</h2>
                  {/*<ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>*/}
                  <p>Marko Pajovic is a freelance researcher with a focus on international relations, EU, and space
                    policies. In 2017 he founded Serbian Case for Space Foundation which acts as an independent platform
                    for developing national space policies and strategies. In 2018 he attended an International
                    Astronautical Congress in Bremen, where he presented a paper on the issue of legal use of satellite
                    data: Case of Republic of Serbia. He is also one of the executive members on project "Forest and
                    Climate" which won several awards both domestic and international. In 2019, together with a group of
                    colleagues, he initiated the "SpaceHub" project in Belgrade, which specializes in space-related
                    activities. Also, he has an experience in human rights watch since he coordinated with NGOs in
                    Serbia on different projects regarding this issue.</p>
                  {/*</ScrollAnimation>*/}
                </div>
              </div>
              <p>Co-founder and COO</p>
            </div>

            <div className="mb-5">
              <div className="d-lg-flex mb-1">
                <img style={img} width="100%" src="/images/andrej.jpg" alt="Andrej Djurmez"/>
                <div className="px-lg-4 mt-4 mt-lg-0">
                  <h2 className="h4">ANDREJ ĐURMEZ</h2>
                  <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>
                    <p>Andrej Djurmez is an attorney at law, working as a junior partner in a regional
                      attorneys office "Simic and company" since 2014. His main focus is corporate
                      law, labor law and litigation. He holds a Master degree in corporate law from
                      the Faculty of Law, University of Belgrade.</p>
                  </ScrollAnimation>
                </div>
              </div>
              <p>Co-founder and COO</p>
            </div>

            <div className="mb-5">
              <div className="d-lg-flex mb-1">
                <img style={img} width="100%" src="/images/bosko.jpg" alt="Bosko Vojkic"/>
                <div className="px-lg-4 mt-4 mt-lg-0">
                  <h2 className="h4">BOŠKO VOJKIĆ</h2>
                  <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>
                    <p>Bosko Vojkic is Space Law and Telecommunications professional with previous
                      experience as University lecturer in Space Law and Policy, ICT Legal Associate
                      and Telco Business Associate. He holds a Master 2 Degree in Space Law Activities
                      and Telecommunications from Paris Saclay / Paris-Sud University and Institute
                      for Space Law and Telecommunications from Paris, France (Master thesis:
                      Mega-constellations).</p>
                  </ScrollAnimation>
                </div>
              </div>
              <p>Communication Specialist</p>
            </div>

            <div className="mb-5">
              <div className="d-lg-flex mb-1">
                <img style={img} width="100%" src="/images/ivan.png" alt="Ivan Stanojevic"/>
                <div className="px-lg-4 mt-4 mt-lg-0">
                  <h2 className="h4">IVAN STANOJEVIĆ</h2>
                  <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>
                    <p>Ivan Stanojevic is a software engineer working for Byteout Software. There he
                      has gathered a team of enthusiasts in order to organize NASA Space Apps
                      Challenge in Serbia. He is also taking a role of the Space Apps lead for
                      Belgrade. He holds a degree in software engineering from Singidunum University
                      in Belgrade. </p>
                  </ScrollAnimation>
                </div>
              </div>
              <p>Technology Specialist</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  }
}
