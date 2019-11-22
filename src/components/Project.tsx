import * as React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { translate } from 'react-polyglot'

class Project extends React.Component<any, any> {
  render() {
    const { title, image, children, t } = this.props

    return (
      <Card className="project-card">
        <CardActionArea>
          <CardMedia className="media" image={image} title={title} />
          <CardContent>
            <Typography component="h2" gutterBottom variant="h5">
              {title}
            </Typography>
            <Typography color="textSecondary" component="div" variant="body2">
              {children}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

export default translate()(Project)
