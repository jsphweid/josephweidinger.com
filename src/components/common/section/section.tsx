import * as React from 'react'
import { Element } from 'react-scroll'

export interface SectionProps {
  className?: string
  title: string
  titleUrl?: string
  children: any
}

export default class Section extends React.Component<SectionProps> {
  constructor(props: SectionProps) {
    super(props)
  }

  render() {
    const { title, children, titleUrl } = this.props
    const titleText = title.toUpperCase()

    return (
      <div className={`jlw-section ${this.props.className || ''}`}>
        <Element name={title} />
        <h1>{titleUrl ? <a href={titleUrl}>{titleText}</a> : titleText}</h1>
        {titleUrl ? (
          <div>
            <br /> <br />
          </div>
        ) : (
          <hr />
        )}
        {children}
      </div>
    )
  }
}
