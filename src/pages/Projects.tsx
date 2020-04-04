import React from 'react'
import { title } from './Home'
import { translate } from 'react-polyglot'
import Project from '../components/Project'
import { projects } from '../stores/ProjectService'
import Each from 'react-each'

const image = {
  backgroundImage: 'url(/images/projects.jpg)',
  backgroundSize: 'cover',
  height: '50vh',
  position: 'relative' as 'relative',
}

class Projects extends React.Component<any, any> {

  public state = {
    projects: [],
  }

  componentDidMount(): void {
    projects.getCollection().then(projects => {
      this.setState({ projects: projects })
    })
  }

  public render() {
    const { projects } = this.state
    const { t } = this.props

    return (
      <div className="mb-5">
        <div style={image} className="mb-5">
          <h2 style={title}>{t('PROJECTS')}</h2>
        </div>

        <div className="container mb-5">
          <div className="row">
            <Each items={projects} renderItem={(project: any, index: number) => (
              <div key={index} className="col-12 col-lg-6 mx-auto mb-5">
                <Project
                  url={'/project/' + project.nid[0].value}
                  title={project.title[0].value}
                  image={project.field_image[0].url}
                >
                  {project.body[0].summary}
                </Project>
              </div>
            )}/>
          </div>
        </div>
      </div>
    )
  }
}

export default translate()(Projects)
