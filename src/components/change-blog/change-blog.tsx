import * as React from 'react'
import Section from '../common/section/section'

export interface ChangeBlogProps {
  className?: string
}

export default class ChangeBlog extends React.Component<ChangeBlogProps> {
  constructor(props: ChangeBlogProps) {
    super(props)
  }

  render() {
    return (
      <Section
        title="change (b)log"
        titleUrl="https://josephweidinger.com/changeBlog"
        className={`jlw-changeBlog ${this.props.className || ''}`}
      >
        <div className="jlw-changeBlog-content">
          When I turned 29 in 2019, I made a bunch of year-long goals and{' '}
          <a href="https://josephweidinger.com/changeBlog">blogged about</a> it
          along the way. Even though that year is over, I plan on posting more
          stuff there sporadically.
        </div>
      </Section>
    )
  }
}
