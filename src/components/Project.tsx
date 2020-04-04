import * as React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { translate } from 'react-polyglot'
import { CardActions } from '@material-ui/core'
import { Link } from 'react-router-dom'

class Project extends React.Component<any, any> {
  render() {
    const { title, image, children, t, url } = this.props

    return (
      <Card className="project-card d-flex flex-column justify-content-between">
        <CardMedia className="media" image={image} title={title}/>
        <CardContent>
          <Typography component="h2" gutterBottom variant="h5">
            <Link to={url}>
              {title}
            </Link>
          </Typography>
          <Typography color="textSecondary" component="div" variant="body2">
            {children}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={url}>
            {t('Read more')}
          </Link>
        </CardActions>
      </Card>
    )
  }
}

export default translate()(Project)
