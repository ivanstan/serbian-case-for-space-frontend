import React from 'react'

export class ExternalLink extends React.Component<any, any> {
  render(): React.ReactElement {
    return (
      <a
        href={this.props.href}
        rel="noopener noreferrer"
        style={this.props.style}
        target="_blank"
      >
        {this.props.children}
      </a>
    )
  }
}
