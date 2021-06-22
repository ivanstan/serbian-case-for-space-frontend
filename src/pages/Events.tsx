import React from "react";
import { title } from "./News";
import { translate } from "react-polyglot";
import { events } from "../stores/EventService";
import Each from "react-each";
import { Link } from "react-router-dom";

const posts = [
  {
    url: "/rgz-hackathon-2021",
    title: [
      { value: "SCS Hakaton: Pogled iz orbite" }
    ],
    created: [
      {
        value: "2021-06-22T00:00:00+00:00"
      }
    ],
    body: [{
      summary: "Fondacija Serbian Case for Space (SCS) uz podršku Vlade Republike Srbije, Programa Ujedinjenih nacija za razvoj (UNDP), kompanije Planet i Republičkog Geodetskog Zavoda, organizuje jedinstven događaj na kom će učesnici iz Srbije imati priliku da, uz pomoć otvorenih geoprostornih i drugih podataka i Planetovih satelitskih podataka, osmisle kreativna rešenja iz jedne od tri ključne oblasti za našu državu: zaštita životne sredine, prevencija prirodnih nepogoda i unapređenje ekonomskog razvoja. Pobednički tim očekuju vredne nagrade."
    }],
    image: [
      { value: "images/rgz-hackathon/main.png" }
    ]
  },
  {
    url: "/planet-hackathon-2020",
    title: [
      { value: "Planet Balkan Hackathon" }
    ],
    created: [
      {
        value: "2020-10-31T00:00:00+00:00"
      }
    ],
    body: [{
      summary: "The Serbian Case for Space Foundation, together with Planet, a San Francisco based Earth imaging company, is organizing the very first “Planet Balkan Hackathon”. This first-of-its-kind online event will offer a unique opportunity to teams coming from Albania, Bosnia and Herzegovina, Bulgaria, Croatia, Montenegro, North Macedonia, Romania, Serbia, and Slovenia to compete in one of three thematic challenges using Planets satellite data - Climate Change, Agriculture or Smart Cities – and win great prizes."
    }],
    image: [
      { value: "images/hackathon/planet-balkan.png" }
    ]
  }
];

class Events extends React.Component<any, any> {

  public state = {
    events: []
  };

  componentDidMount(): void {
    events.getCollection().then((events: any) => {
      this.setState({ events: posts });
    });
  }

  public getDate(data: any) {
    const date = new Date(data.value)

    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
  }

  render() {
    const { t } = this.props;
    const { events } = this.state;

    return (
      <div className="mb-5">
        <div className="mb-5">
          <h2 style={title}>{t("EVENTS")}</h2>
        </div>
        <div className="container mb-5">
          <div className="row mb-5">
            <div className="col-12 col-lg-8 mx-auto overflow-hidden">
              <Each items={events} renderItem={(article: any, index: number) => (
                <article className="mb-5" key={index}>
                  {/*<span className="text-muted">{this.getDate(article.created[0])}</span>*/}
                  <Link to={article.url || ("news/" + article.nid[0].value)}>
                    <h2 className="h4">{article.title[0].value}</h2>
                  </Link>
                  <img className={'mb-3'} src={article.image[0].value} alt={article.title[0].value} width={730}/>
                  <p>
                    {article.body[0].summary}
                  </p>
                </article>
              )}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default translate()(Events);
