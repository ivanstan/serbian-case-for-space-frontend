import * as React from 'react'

export class Project extends React.Component<any, any> {
  render() {
    const {title, image, children} = this.props;

    return <div className="mb-5">
      <h2 className="h4 mb-3">
        {title}
      </h2>
      <img
        className="mb-3"
        src={image}
        width="100%"
        alt=""
      />
      {children}
    </div>
  }
}
