import React from 'react'
import { translate } from 'react-polyglot'
import { If } from 'react-if'
import { news } from '../stores/NewsService'

class NewsDetail extends React.Component<any, any> {

  public state = {
    news: null,
  }

  componentDidMount(): void {
    const nid = this.props.match.params.id

    news.getPost(nid).then((news: any) => {
      this.setState({
        news: news,
      })
    })
  }

  render() {
    let news: any = this.state.news

    if (news === null) {
      return <></>
    }

    return <If condition={news !== null}>
      <div className="container mb-5">
        <div className={'row'}>
          <div className={'col-10 mx-auto'}>
            <h2>{news.title[0].value}</h2>
            {/*<img src={news.field_image[0].url} width={'100%'} className={'my-3 mb-5'}/>*/}
            <div dangerouslySetInnerHTML={{ __html: news.body[0].value }}/>
          </div>
        </div>
      </div>
    </If>
  }
}

export default translate()(NewsDetail)
