import React from "react";
import { title } from "./News";
import { translate } from "react-polyglot";
import { events } from "../stores/EventService";
import Each from "react-each";
import { Link } from "react-router-dom";

class Events extends React.Component<any, any> {

  public state = {
    events: []
  };

  componentDidMount(): void {
    events.getCollection().then((events: any) => {
      this.setState({ events: events });
    });
  }

  public getDate(data: any) {
    const date = new Date(data.value)

    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
  }

  render() {
    const { t } = this.props;
    const {events} = this.state;

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
                  <span className="text-muted">{this.getDate(article.created[0])}</span>
                  <Link to={'news/' + article.nid[0].value}>
                    <h2 className="h4">{article.title[0].value}</h2>
                  </Link>
                  {article.body[0].summary}
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
