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
    const linkTo52 = (
      <a href="https://josephweidinger.com/changeBlog/52-weeks-until-2020/">
        52
      </a>
    )
    return (
      <Section
        title="change (b)log"
        titleUrl="https://josephweidinger.com/changeBlog"
        className={`jlw-changeBlog ${this.props.className || ''}`}
      >
        <div className="jlw-changeBlog-content">
          In Jan 2020 I turn 30. So in Jan 2019, with {linkTo52} weeks until
          then, I made a resolution to make these final {linkTo52} special by
          working extra hard on some challenging time and metric oriented goals.
          You can see my those and updates regarding them on my{' '}
          <a href="https://josephweidinger.com/changeBlog">blog.</a>
        </div>
      </Section>
    )
  }
}
