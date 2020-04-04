import React from 'react'
import { translate } from 'react-polyglot'
import { If } from 'react-if'
import { projects } from '../stores/ProjectService'

class ProjectDetail extends React.Component<any, any> {

  public state = {
    project: null,
  }

  componentDidMount(): void {
    const nid = this.props.match.params.id

    projects.getProject(nid).then(project => {
      this.setState({
        project: project,
      })
    })
  }

  render() {
    let project: any = this.state.project

    if (project === null) {
      return <></>
    }

    return <If condition={project !== null}>
      <div className="container mb-5">
        <div className={'row'}>
          <div className={'col-10 mx-auto'}>
            <h2>{project.title[0].value}</h2>
            <img src={project.field_image[0].url} width={'100%'} className={'my-3 mb-5'}/>
            <div dangerouslySetInnerHTML={{ __html: project.body[0].value }}/>
          </div>
        </div>
      </div>
    </If>
  }
}

export default translate()(ProjectDetail)
