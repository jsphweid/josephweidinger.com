import * as React from 'react'
import { Element } from 'react-scroll'
import Section from '../common/section/section'

export interface ChangeBlogProps {
  className?: string
}

export default class ChangeBlog extends React.Component<ChangeBlogProps> {
  constructor(props: ChangeBlogProps) {
    super(props)
  }

  render() {
    const linkTo52 = (
      <a href="https://josephweidinger.com/changeBlog/52-weeks-until-2020/">
        52
      </a>
    )
    return (
      <Section
        title={'change (b)log'}
        className={`jlw-changeBlog ${this.props.className || ''}`}
      >
        <div className="jlw-changeBlog-content">
          In Jan 2020 I turn 30. (It feels strange to even type that.) So in Jan
          2019, with {linkTo52} week until then, I made a resolution to make
          these final {linkTo52} special by working extra hard with goals on how
          to spend my time. You can see my goals and updates regarding them on
          my <a href="https://josephweidinger.com/changeBlog">blog.</a>
        </div>
      </Section>
    )
  }
}
