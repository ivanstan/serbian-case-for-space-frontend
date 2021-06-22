import React from "react";
import Popup from "reactjs-popup";

const logo = {
  background: "#fff"
};

const join = {
  backgroundColor: "#3e435a",
  display: "inline-block",
  margin: -15,
  padding: "1rem",
  paddingLeft: "2rem"
};

const win = {
  fontFamily: "Courier"
};

const image = {
  backgroundImage: "url('images/rgz-hackathon/main.png')",
  backgroundPosition: "center 5%",
  // backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
};

const blue = {
  backgroundColor: "#78a2d1",
  color: "#fff",
  overflow: "hidden"
};

const header = {
  height: 580,
  color: "#fff",
  fontWeight: "bold" as "bold",
  marginTop: 70
};

const registrationEnd = 1621421999 // 19.05.2021 12:00 AM

export class RGZ2021Hackathon extends React.Component<any, any> {

  public registrationEnabled(): boolean {
    const ts = Math.round((new Date()).getTime() / 1000);

    return ts < registrationEnd
  }

  render() {
    return (
      <>
        <div style={image}>
          <div>

            <div className="container d-none d-lg-block">
              <div className="row mb-5">
                {/*<div className="col-4 col-lg-4 mx-auto pt-5" style={blue}>*/}
                  {/*<div style={join}>*/}
                  {/*  JOIN US FOR THE VERY FIRST*/}
                  {/*</div>*/}
                  {/*<h1 className={"pt-5 pl-4"}>SCS <br />HACKATHON</h1>*/}
                  {/*<div style={win} className={"pl-4 pt-2"}>*/}
                  {/*  WIN AWESOME PRIZES AND MEET <br />TEAMS ACROSS THE REGION.*/}
                  {/*</div>*/}
                {/*</div>*/}

                <div className="col-7 col-lg-7 mx-auto pt-5" style={header}>
                  {/*<h2 className={"text-center h1 text-bold"}>ONLINE EVENT<br />31 OCTOBER - 1 NOVEMBER, 2020</h2>*/}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-2">
          <div className="row">
            <div className={"col-lg-12"}>
              <section className="justify-content-around mb-5">
                <h1 style={{ fontSize: 44, fontWeight: "bold" }}>{"SCS Hakaton: Pogled iz orbite"}</h1>
                {/*<small style={{ position: "relative", top: -18 }}>organized by Serbian Case for Space Foundation</small>*/}
                {/*<h2 className={'h5 mb-0'}>31 October - 1 November, 2020</h2>*/}
                {/*<p>Online event</p>*/}
              </section>
            </div>
            {/*<div className={"col-lg-6"}>*/}
            {/*  <section className="d-flex flex-row-reverse mb-5 p-4">*/}
            {/*    <div className="d-flex flex-column" style={logo}>*/}
            {/*      <img src="images/logo/logo.svg" alt="SCS" width="70%" className="m-auto" />*/}
            {/*      <span className="text-center">Serbian Case For Space</span>*/}
            {/*    </div>*/}
            {/*    /!*<div style={{ width: 250 }}>*!/*/}
            {/*    /!*  <img src="images/hackathon/planet.jpg" alt="Planet" width="85%" className={'mt-2'}/>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*  </section>*/}
            {/*</div>*/}
          </div>
        </div>

        <div className="container">
          <div className="row mb-5">
            <div className="col-12">

              <p className={"mb-5"}>
                Fondacija Serbian Case for Space (SCS) uz podršku Vlade Republike Srbije, Programa Ujedinjenih nacija za
                razvoj (UNDP), kompanije Planet i Republičkog Geodetskog Zavoda, organizuje jedinstven događaj na kom će
                učesnici iz Srbije imati priliku da, uz pomoć otvorenih geoprostornih i drugih podataka i Planetovih
                satelitskih podataka, osmisle kreativna rešenja iz jedne od tri ključne oblasti za našu državu: zaštita
                životne sredine, prevencija prirodnih nepogoda i unapređenje ekonomskog razvoja. Pobednički tim
                očekuju vredne nagrade.
              </p>

              <section className="d-flex justify-content-center">
                <Popup trigger={<button disabled={!this.registrationEnabled()}
                                        className="btn btn-lg btn-primary mb-5">Prijava</button>}
                       position="center center"
                       modal>
                  <div style={{ background: '#fff', boxShadow: '0px 0px 10px 0px rgba(55,54,54,1)' }} className={'p-5'}>
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSeGD3vqMGU_4KK6R21AcgblQmnt5dliV0UzEhKoUnk1N2IkRA/viewform?embedded=true"
                      width="640" height="620" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…
                    </iframe>
                  </div>
                </Popup>
              </section>

              <div className="w-100 mb-4">
                <h2>Izazovi</h2>
              </div>

              <article>
                <h1 className="h4 text-center">Zaštita životne sredine</h1>
                <img src={"/images/rgz-hackathon/environment.svg"} alt={"Agriculture"}
                     className={"d-block mx-auto my-4"} style={{ maxWidth: 200 }} />
                <div>
                  <div className={"d-md-block"}>
                    <p>
                      Srbija se suočava sa negativnim posledicama klimatskih promena i nepažnjom
                      čoveka prema prirodi. Neki od problema na koje možemo da ukažemo su
                      deforestacija i stvaranje divljih deponija. Nelegalna seča šuma dovodi do ekonomskih
                      problema, ali iznad svega do ekoloških, jer zemljište koje ostane bez šume je sklono
                      eroziji, smanjuje se proizvodnja kiseonika i apsorpcija ugljen-dioksida iz vazduha. S
                      druge strane, deponije predstavljaju velike zagađivače jer su plodno tle za širenje
                      zaraze i požara, a neadekvatno deponovanje otpada dovodi do zagađivanja zemljišta
                      i podzemnih voda, flore i faune.
                    </p>
                    <p>
                      Iskoristi otvorene podatke za potrebe SCS hakatona i smisli
                      inovativno rešenje koje će doprineti detekciji divljih deponija, sprečavanju
                      deforestacije ili doprineti borbi za zaštitu životne sredine kroz rešavanje problema
                      koje si primetio u lokalnoj sredini.
                    </p>
                  </div>
                </div>
              </article>
              <article>
                <h1 className="h4 text-center">Prirodne nepogode</h1>
                <img src={"/images/rgz-hackathon/volcano.svg"} alt={"Agriculture"}
                     className={"d-block mx-auto my-4"} style={{ maxWidth: 200 }} />
                <div className={"d-md-block"}>
                  <div>
                    <p>
                      Prirodne katastrofe izazivaju gubitak života i uništavanje infrastrukture. U poplavama
                      koje su pogodile Srbiju 2014. godine poginulo je 33, a ugroženo više od milion ljudi
                      širom Srbije. U samo tri dana pala je prosečna tromesečna količina padavina, i takva
                      razarajuća sila je porušila 100 000 domova, 200 škola, 280 mostova, a ukupna šteta
                      je iznosila 1.7 milijardi evra. Ovakve nepogode doprinose i pojavljivanju drugih rizika.
                      Na teritoriji Srbije čak trećina zemljišta je pod rizikom od klizišta, a naročito veliki
                      broj se javlja oko Kopaonika, dok su poznati slučajevi prethodnih godina bili u okolini
                      Obrenovca, Lajkovca, Valjeva, Bajine Bašte.
                    </p>
                    <p>
                      Uz pomoć otvorenih i satelitskih podataka smisli praktično rešenje koje će pomoći u
                      prevenciji štete od poplava i klizišta, kao i drugih prirodnih nepogoda!
                    </p>
                  </div>
                </div>
              </article>
              <article>
                <h1 className="h4 text-center">Unapređenje ekonomskog razvoja</h1>
                <img src={"/images/rgz-hackathon/chart.svg"} alt={"Agriculture"}
                     className={"d-block mx-auto my-4"} style={{ maxWidth: 200 }} />
                <div className={"d-md-flex"}>
                  <div>
                    <p>
                      Ekonomski razvoj jedne zemlje danas zavisi najviše od razvoja tehnologije i
                      sopstvenih kapaciteta u visoko-tehnološkom sektoru, a neki ozbiljni i dugotrajni
                      problemi se mogu rešiti i primenom satelitskih sistema. Na primer, u Srbiji trenutno
                      ima više od dva miliona nezakonito izgrađenih objekata koji koštaju državni budžet
                      preko 200 miliona evra i takođe nose sa sobom visok rizik nepoštovanja standardna
                      izgradnje ili zaštite životne sredine. Sa druge strane, satelitsku tehnologiju možemo
                      primeniti u starim industrijskim granama, kao što je rudarstvo, kako bi se
                      modernizovale. Procenjuje se da na teritoriji Srbije postoje značajne količine cinka,
                      srebra, zlata i drugih metala raspoređenih u 200 eksploatacionih i 127 istražnih polja.
                    </p>
                    <p>
                      Iskombinuj podatke iz različitih izvora koji će ti biti ponuđeni na takmičenju i smisli
                      komercijalno rešenje koje će primenom novih tehnologija unaprediti razvitak
                      domaće ekonomije!
                    </p>
                  </div>
                </div>
              </article>

              <div className="w-100 mb-4">
                <h2>Nagrade</h2>
              </div>

              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Prvo mesto</h4>
                </div>
                <div className="card-body">
                  {/*<h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>*/}
                  <ul className="mt-3 mb-4 text-left">
                    <li>Novčana nagrada u iznosu od 500 EUR</li>
                    <li> Tromesečni besplatni nalog za korišćenje Planet-ovog API za pobednički tim (5
                      osoba) sa pristupom PlanetScope arhivi
                    </li>
                    <li>AOI od 1.000 m2</li>
                    <li>Kvota za preuzimanje od 20.000 m2</li>
                  </ul>
                </div>
              </div>

              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Drugo mesto</h4>
                </div>
                <div className="card-body">
                  {/*<h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>*/}
                  <ul className="mt-3 mb-4 text-left">
                    <li>Tromesečni besplatni nalog za korišćenje Planet-ovog API za pobednički tim (5
                      osoba) sa pristupom PlanetScope arhivi
                    </li>
                    <li>AOI od 1.000 m2</li>
                    <li>Kvota za preuzimanje od 10.000 m2</li>
                  </ul>
                </div>
              </div>

              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Treće mesto</h4>
                </div>
                <div className="card-body">
                  {/*<h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>*/}
                  <ul className="mt-3 mb-4 text-left">
                    <li>Tromesečni besplatni nalog za korišćenje Planet-ovog API za pobednički tim (5
                      osoba) sa pristupom PlanetScope arhivi
                    </li>
                    <li>AOI od 1.000 m2</li>
                    <li>Kvota za preuzimanje od 5.000 m2</li>
                  </ul>
                </div>
              </div>

              <p>Učesnici će moći da prisustvuju zanimljivim radionicama, a imaće i mentorsku
                podršku od strane stručnjaka iz ove oblasti.</p>

              <ul>
                <li>
                  Registracije su otvorene do 19. maja u 20:00.
                </li>
                <li>
                  Učesnici su pozvani da se registruju kao pojedinci ili u timu (maksimalan broj
                  učesnika po timu je 5). Ohrabrujemo vas da se registrujete u timu zbog obima
                  podataka kojim ćete imati pristup.
                </li>
                <li>
                  Podaci koji će biti dostupni na hakatonu će dolaziti iz različitih izvora, a na
                  našim mentorima će biti da vas upute ka onim najbitnijim za vaše rešenje.
                </li>
                <li>
                  SCS Hakaton: Pogled iz orbite je online događaj i sve što vam je potrebno
                  jeste laptop, internet konekcija i kreativno razmišljanje!
                </li>
              </ul>

              <div>
                <section className="d-flex mb-5 p-4 justify-content-center">
                  <div className="d-flex flex-column" style={logo}>
                    <img src="images/logo/logo.svg" alt="SCS" width="70%" className="m-auto"/>
                  </div>
                  <div style={{ width: 250 }}>
                    <img src="images/hackathon/planet.jpg" alt="Planet" width="85%" className={'mt-2'}/>
                  </div>
                </section>
                <section className="d-flex mb-5 p-4 justify-content-center">
                  <div style={{ width: 350 }}>
                    <img src="images/rgz-hackathon/rgz-logo.png" alt="RGZ" width="100%" className={'mt-2'}/>
                  </div>
                </section>
                <section className="d-flex mb-5 p-4 justify-content-center">
                  <div className="d-flex flex-column" style={logo}>
                    <img src="images/rgz-hackathon/undp.logo.jpg" alt="UNDP" width="70%" className="m-auto"/>
                  </div>
                </section>
              </div>

            </div>
          </div>
        </div>
      </>
    );
  }
}
