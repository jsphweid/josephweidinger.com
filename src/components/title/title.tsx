import * as React from 'react'
import Section from '../common/section/section'
import Navbar from '../navbar/navbar'

export interface TitleProps {
  className?: string
}

export default class Title extends React.Component<TitleProps> {
  constructor(props: TitleProps) {
    super(props)
  }

  render() {
    return (
      <Section
        className={`jlw-title ${this.props.className || ''}`}
        title={'joseph weidinger'}
      >
        <div className="jlw-title-labels">
          <a
            href="#"
            onClick={() => Navbar.handleNavbarItemClick('dev projects')}
          >
            Full-Stack Developer / Engineer / Creator
          </a>
          <br />
          <a href="https://papio.io">Interviewer</a>
          {' - '}
          <a href="https://open.spotify.com/artist/0GCM7laM4pfNd69XyswDqW">
            Composer / Musician
          </a>
        </div>
      </Section>
    )
  }
}
