import React from 'react'
import { translate } from 'react-polyglot'
import { news } from '../stores/NewsService'
import Each from 'react-each'
import { Link } from 'react-router-dom'

const image = {
  backgroundImage: 'url(/images/blog-big.jpg)',
  backgroundSize: 'cover',
  height: '50vh',
  position: 'relative' as 'relative',
}

export const title = {
  fontSize: 74,
  color: '#fff',
  position: 'absolute' as 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  textAlign: 'center' as 'center',
  width: '100%',
}

class News extends React.Component<any, any> {

  public state = {
    news: [],
  }

  componentDidMount(): void {
    news.getCollection().then((news: any) => {
      this.setState({ news: news })
    })
  }

  public getDate(data: any) {
    const date = new Date(data.value)

    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
  }

  public render() {
    const { news } = this.state

    return (
      <div className="mb-5">
        <div style={image} className="mb-5">
          <h2 style={title}>NEWS</h2>
        </div>
        <div className="container mb-5">
          <div className="row mb-5">
            <div className="col-12 col-lg-8 mx-auto overflow-hidden">
              <Each items={news} renderItem={(article: any, index: number) => (
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
    )
  }
}

export default translate()(News)
