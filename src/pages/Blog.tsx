import React from 'react'
import { translate } from 'react-polyglot'

const image = {
  backgroundImage: 'url(/images/blog-big.jpg)',
  backgroundSize: 'cover',
  height: '50vh',
  position: 'relative' as 'relative',
}

export const title = {
  fontSize: 84,
  color: '#fff',
  position: 'absolute' as 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  textAlign: 'center' as 'center',
  width: '100%',
}

class Blog extends React.Component<any, any> {
  public render() {
    return (
      <div className="mb-5">
        <div style={image} className="mb-5">
          <h2 style={title}>BLOG</h2>
        </div>
        <div className="container mb-5">
          <div className="row mb-5">
            <div className="col-12 col-lg-8 mx-auto overflow-hidden">
              <article className="mb-5">
                <span className="text-muted">16 April 2019</span>
                <h2 className="h4">
                  Početak projekta Spacehub, fondacije "SCS" / Start of the
                  project Spacehub by SCS
                </h2>
                <p>
                  Sa ponosom želimo da objavimo da je projekat Spacehub,
                  fondacije “SCS” zvanično otvorio vrata svim posetiocima.
                  Spacehub-ovi širom sveta predstavljaju mesto okupljanja
                  stručnjaka iz oblasti kosmičkih nauka, a naša fondacija želi
                  da takvu praksu iz sveta prenese u Srbiju. Reportaža:{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://bit.ly/2XgcG7Y"
                  >
                    http://bit.ly/2XgcG7Y
                  </a>
                  .
                </p>
                <p>
                  We are proud to announce that Spacehub by SCS oficially opened
                  its doors for public. Spacehubs specialize in space-related
                  activities and our aim is to bring that practice to Serbia.
                  Report:{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://bit.ly/2XgcG7Y"
                  >
                    http://bit.ly/2XgcG7Y
                  </a>
                  .
                </p>
              </article>

              <article className="mb-5">
                <span className="text-muted">15 February 2019</span>
                <h2 className="h4">
                  Portal Tango Six je intervjuisao članove naše Fondacije /
                  Portal Tango Six interviewed members of our Foundation
                </h2>
                <p>
                  Vodeći aviacioni portal u Srbiji Tango Six je objavio
                  ekskluzivnu reportažu o našoj Fondaciji i potencijalima za
                  razvoj svemirske industrije u Srbiji.
                </p>
                <p>/</p>
                <p>
                  Leading aerospace news portal in Serbia Tango Six has pubished
                  an in-depth column about our Foundation and the possibilities
                  for development of space industry in Serbia.
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://tangosix.rs/2019/15/02/intervju-fondacija-serbian-case-for-space-srbija-nije-mala-za-svemir-mi-zelimo-da-budemo-prvi-korak/
"
                >
                  https://tangosix.rs/2019/15/02/intervju-fondacija-serbian-case-for-space-srbija-nije-mala-za-svemir-mi-zelimo-da-budemo-prvi-korak/
                </a>
              </article>

              <article className="mb-5">
                <span className="text-muted">21 November 2018</span>
                <h2 className="h4">
                  Objava partnerstva sa Evropskim centrom za svemirsko
                  pravo/ECSL Partnership announcement
                </h2>
                <p>
                  Sa ogromnim zadovoljstvom vas obaveštavamo da je Evropski
                  centar za svemirsko pravo (ECSL) po prvi put u istoriji
                  otvorio kategoriju „Prijatelji ECSL-a“. Ova kategorija je
                  otvorena za države koje nisu ni član niti pridruženi član
                  centra i SCS je imao veliku čast da bude proglašen prvim
                  Prijateljem! ECSL podržava aktivnosti SCS-a u širenju značaja
                  svemirskog prava u Srbiji, podizanju svesti i ohrabrivanju
                  mladih da se uključe u svemirski domen. Sa druge strane, SCS
                  će biti info point u Srbiji za sve novosti i aktivnosti
                  ECSL-a.
                </p>

                <p>
                  We are enormously honored to inform you that{' '}
                  <a
                    href="https://www.facebook.com/esa.ecsl/?fref=mentions&__xts__%5B0%5D=68.ARCRHLfin1sXSyfXnEgPqottz8fWMl31akscy09YoEUsUv2FuGjN0Aj_c_T4DNVE7bpvgKdd-fazg-A47Dw4MvCeJBDWF_7fS3Lw8VopaWfk4XVp7YhcZOatobI44c80ZaxMBU4kIYH25sB94Pw5SOHYCQq9MrAhosjoer1NQErOcNsAgZwxE0pyzOm9xMzvc-FFZhDUVwvcMWcSDzEno1v03UUFC4UkxPrkEFr52idBX0dZf0DHP6dbwJ54IHC_ETcIOPWs5ghyiGNCN3ikMDjbk3-Wj26AQ2S9a__0cvFlOnjcQXnP7RuqscxxK8tB8RGo7LFRCHXwkOsaf1lj1Qg&__tn__=K-R"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    European Centre for Space Law
                  </a>{' '}
                  (ECSL) has opened for the first time „Friends of ECSL“
                  category for non-Member States and non-Associated States and
                  made SCS its first friend! ECSL supports SCS activities in
                  spreading space law in Serbia, raising awareness and
                  encouraging young people to join space domain. On the other
                  side, SCS will serve as point of information in Serbia
                  regarding ECSL news and activities.
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.esa.int/About_Us/ECSL_European_Centre_for_Space_Law/Serbian_Case_for_Space_Foundation"
                >
                  http://www.esa.int/About_Us/ECSL_European_Centre_for_Space_Law/Serbian_Case_for_Space_Foundation
                </a>
              </article>

              <article className="mb-5">
                <span className="text-muted">9 October 2018</span>
                <h2 className="h4">
                  Serbian Case for Space Foundation participating in conferences
                  in Moscow and Bremen
                </h2>
                <p>
                  Serbian Case for Space Foundation attended the First UN
                  Conference on Space Law and Policy, organized by the UNOOSA,
                  ROSCOSMOS and Russian Ministry of Foreign Affairs, in Moscow
                  from the 11th to the 14th of September. At this occasion, Anja
                  Nakarada Pečuljič participated in a panel alongside Professors
                  from Keio and La Sapienza University and legal advisors from
                  UAE space agency and ESA, and she discussed legal aspects of
                  space debris mitigation and remediation.
                </p>

                <p>
                  Two weeks later, at the International Astronautical Congress
                  2018, held from the 1st to the 5th of October, Marko Pajović
                  and Anja Nakarada Pečujlić presented a paper titled "Legal
                  Rights and Possibilities to Access Satellite Data for a
                  Non-Member State of Space Community: Case of Republic of
                  Serbia". This paper emphasized how important is Serbia’s
                  participation in the space domain nowadays, how beneficial
                  would be the involvement in international space organizations,
                  and concluded that international space community should not
                  leave behind countries that are still in economic transition.
                </p>
              </article>

              <article className="mb-5">
                <span className="text-muted">8 February 2018</span>
                <h2 className="h4">
                  Serbian Case for Space i Jedan Stepen Srbija sklopili
                  partnerstvo
                </h2>
                <p>
                  Na osnovu zajedničkih težnji i ciljeva dve organizacije, sa
                  ponosom objavljujemo da smo sklopili partnerstvo sa
                  organizacijom “Jedan Stepen”. Ekološka svest i želja za
                  napretkom u sferi novih tehnologija moraju da idu jedno uz
                  drugo, u suprotnom rizikujemo da sve naše delovanje bude
                  uzaludno zbog nepopravljive štete koju nanosimo okruženju.
                  Saradnja će se ogledati kako u daljem širenju mreže partnera
                  zainteresovanih da preuzmu aktivnu ulogu u rešavanju problema
                  zagađenja okoline, tako i u održavanju tribina i ostalih
                  zajedničkih događaja koji će za temu imati upoznavanje sa
                  materijom kosmičke industrije i njenih različitih primena na
                  zaštitu životne sredine.
                </p>

                <p>
                  <em>
                    “Imajući u vidu da se do velikog broja podataka koji se
                    koriste u izučavanju klime i klimatskih promena, kao i onih
                    za izučavanje uzroka klimatskih promena dolazi upravo
                    prikupljanjem u svemiru saradnja sa Serbian Case for Space
                    je sjajna prilika da upotpunimo naša znanja iz ove oblasti.
                    Takođe, obe organizacije snažno promovišu nauku i zagovaraju
                    se za upotrebu naučnih činjenica prilikom donošenja odluka.
                    Naša saradnja će se u početnom periodu ogledati u razmeni
                    informacija i proširenju mreže partnera, a kasnije planiramo
                    i održavanje zajedničkih događaja koji će za teme imati
                    kosmička istraživanja i nauku o klimatskim promenama i vezu
                    između njih. Podržavamo težnje Fondacije Serbian Case for
                    Space za unapređenje aktivnosti povezanih sa kosmosom, kao i
                    uspostavljanje kosmičkog programa u Srbiji, i nadamo se da
                    ćemo moći da doprinesemo njihovim aktivnostima”
                  </em>{' '}
                  - rekao je Đorđe Samardžija, član jedan stepen Srbija.
                </p>

                <p>
                  Program i aktivnosti organizacije Jedan Stepen Srbija možete
                  pogledati na{' '}
                  <a
                    href="http://jedanstepen.org/sr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://jedanstepen.org/sr/
                  </a>
                </p>
              </article>

              <article className="mb-5">
                <span className="text-muted">7 December 2017</span>
                <h2 className="h4">
                  Зашто Србија треба да оснује своју космичку агенцију?
                </h2>
                <p>
                  <a
                    href="http://galaksijanova.rs/srbija-u-kosmosu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://galaksijanova.rs/srbija-u-kosmosu/
                  </a>
                </p>
              </article>

              <article className="mb-5">
                <span className="text-muted">7 November 2017</span>
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
                <br />
                <br />
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
              </article>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default translate()(Blog)
