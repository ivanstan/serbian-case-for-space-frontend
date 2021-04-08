import React from "react";

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
  backgroundImage: "url('images/hackathon/belgrade.png')",
  backgroundPosition: "center 5%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
};

const blue = {
  backgroundColor: "#78a2d1",
  color: "#fff",
  overflow: "hidden"
};

const header = {
  height: 350,
  color: "#fff",
  fontWeight: "bold" as "bold",
  marginTop: 70
};

export class RGZ2021Hackathon extends React.Component<any, any> {
  render() {
    return (
      <>
        <div style={image}>
          <div style={{ background: "rgba(120, 162, 209, 0.5)" }}>

            <div className="container d-none d-lg-block">
              <div className="row mb-5">
                <div className="col-4 col-lg-4 mx-auto pt-5" style={blue}>
                  <div style={join}>
                    JOIN US FOR THE VERY FIRST
                  </div>
                  <h1 className={"pt-5 pl-4"}>SCS <br />HACKATHON</h1>
                  <div style={win} className={"pl-4 pt-2"}>
                    WIN AWESOME PRIZES AND MEET <br />TEAMS ACROSS THE REGION.
                  </div>
                </div>

                <div className="col-7 col-lg-7 mx-auto pt-5" style={header}>
                  {/*<h2 className={"text-center h1 text-bold"}>ONLINE EVENT<br />31 OCTOBER - 1 NOVEMBER, 2020</h2>*/}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-2">
          <div className="row">
            <div className={"col-lg-6"}>
              <section className="justify-content-around mb-5">
                <h1 style={{ fontSize: 44, fontWeight: "bold" }}>{"SCS Hakaton: Pogled iz orbite"}</h1>
                <small style={{ position: "relative", top: -18 }}>organized by Serbian Case for Space Foundation</small>
                {/*<h2 className={'h5 mb-0'}>31 October - 1 November, 2020</h2>*/}
                {/*<p>Online event</p>*/}
              </section>
            </div>
            <div className={"col-lg-6"}>
              <section className="d-flex flex-row-reverse mb-5 p-4">
                <div className="d-flex flex-column" style={logo}>
                  <img src="images/logo/logo.svg" alt="SCS" width="70%" className="m-auto" />
                  <span className="text-center">Serbian Case For Space</span>
                </div>
                {/*<div style={{ width: 250 }}>*/}
                {/*  <img src="images/hackathon/planet.jpg" alt="Planet" width="85%" className={'mt-2'}/>*/}
                {/*</div>*/}
              </section>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row mb-5">
            <div className="col-12">

              <p>
                Republički Geodetski Zavod (RGZ) i fondacija Serbian Case for Space (SCS), uz
                podršku UNDP Serbia i američke kompanije Planet, organizuje jedinstven događaj na
                kojem će učesnici iz Srbije imati priliku da uz pomoć podataka RGZ-a koji će biti
                specijalno otvoreni za potrebe takmičenja i Planetovih satelitskih podataka, osmisle
                kreativna rešenja iz jedne od tri ključnih oblasti za našu državu: zaštita životne
                sredine, prirodne nepogode i unapređenje ekonomskog razvoja. Pobednički tim
                očekuju vredne nagrade.
              </p>

              <div className="w-100 mb-4">
                <h2>Izazovi</h2>
              </div>

              <article>
                <h1 className="h4">Zaštita životne sredine</h1>
                <div className={"d-md-flex"}>
                  <img src={"/images/rgz-hackathon/environment.svg"} alt={"Agriculture"}
                       className={"d-block mx-auto my-4 mr-md-4"} style={{ maxWidth: 200 }} />
                  <div>
                    <p>
                      Iskoristi podatke koji će biti posebno otvoreni za potrebe SCS hakatona i smisli novo
                      tehnološko rešenje koje će doprineti detekciji divljih deponija i sprečavanju
                      nelegalne seče šuma. Zaštiti životnu sredinu oko sebe!
                    </p>
                    <p>
                      Nelegalna seča šuma dovodi do ekonomskih problema, ali iznad svega do ekoloških,
                      jer zemljište koje ostane bez šume je sklono eroziji, smanjuje se proizvodnja
                      kiseonika i apsorpcija ugljen-dioksida iz vazduha, a takođe vremenom preti i
                      nestanak podzemnih voda koje služe kao izvor vode za piće. U Srbiji u poslednjih 15
                      godina krivično delo šumske krađe ubedljivo stoji na prvom mestu u odnosu na sva
                      ostala dela protiv životne sredine.
                    </p>
                    <p>
                      Divlje deponije predstavljaju velike zagađivače jer su plodno tle za širenje zaraze i
                      požara. Neadekvatno deponovanje otpada na divljim deponijama dovodi do
                      zagađivanja zemljišta i podzemnih voda, a posredno i do ugrožavanja flore i faune.
                      Na divljim deponijama završi, prema procenama, petina komunalnog smeća Srbije.
                    </p>
                  </div>
                </div>
              </article>
              <article>
                <h1 className="h4">Prirodne nepogode</h1>

                <div className={"d-md-flex"}>
                  <img src={"/images/rgz-hackathon/volcano.svg"} alt={"Agriculture"}
                       className={"d-block mx-auto my-4 mr-md-4"} style={{ maxWidth: 200 }} />
                  <div>
                    <p>
                      Uz pomoć otvorenih i satelitskih podataka smisli praktično rešenje koje će pomoći u
                      prevenciji štete od poplava i klizišta, odnosno umanjivanju negativnih posledica od
                      ovakvih i sličnih prirodnih nepogoda!
                    </p>
                    <p>
                      U poplavama koje su pogodile Srbiju 2014. godine poginulo je 33, a ugroženo više od
                      milion ljudi širom Srbije. U samo tri dana pala je prosečna tromesečna količina
                      padavina, i takva razarajuća sila je porušila 100 000 domova, 200 škola, 280 mostova,
                      a ukupna šteta je iznosila 1.7 milijardi evra.
                    </p>
                    <p>
                      Na teritoriji Srbije čak trećina zemljišta je pod rizikom od klizišta. Ona se javljaju
                      naročito početkom proleća posle obilnih padavina i ugrožavaju puteve, stambene i
                      infrastrukturne objekte. Naročito veliki broj klizišta se javlja oko Kopaonika, a poznati
                      slučajevi iz prethodnih godina bili su u Obrenovcu, Lajkovcu, Bajinoj Bašti, Valjevu.
                    </p>
                  </div>
                </div>
              </article>
              <article>
                <h1 className="h4">Unapređenje ekonomskog razvoja</h1>
                <div className={"d-md-flex"}>
                  <img src={"/images/rgz-hackathon/chart.svg"} alt={"Agriculture"}
                       className={"d-block mx-auto my-4 mr-md-4"} style={{ maxWidth: 200 }} />
                  <div>
                    <p>
                      Kombinuj podatke iz različitih izvora koji će ti biti ponuđeni na takmičenju i smisli
                      inovativno rešenje koje će primenom tehnologije osmatranja zemlje omogućiti
                      razotkrivanje nelegalne gradnje, ili otkrivanje novih rudnih polja i time unaprediti
                      razvitak domaće ekonomije!
                    </p>
                    <p>
                      U Srbiji trenutno ima više od dva miliona nezakonito izgrađenih objekata, od kojih su
                      gotovo polovina stambeni objekti. Nelegalno izgrađeni objekti koštaju državni budžet
                      preko 200 miliona evra i takođe nose sa sobom visok rizik nepoštovanja standardna
                      izgradnje, nanošenja štete životnoj sredini i povećanju rizika od klizišta zbog
                      neovlašćenog menjanja strukture zemljišta.
                    </p>
                    <p>
                      U Srbiji traje ekspanzija rudarskih aktivnosti, a trenutno postoji oko 200
                      eksploatacionih i 127 istražnih polja. Procenjuje se da na teritoriji Srbije postoje
                      značajne količine različitih metala, a trenutno je najzastupljenija eksploatacija bakra,
                      olova, cinka, srebra i zlata. Oko 2% BDP-a Srbije pripada rudarskom sektoru.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </>
    );
  }
}
