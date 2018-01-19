import * as React from 'react'
import Section from '../common/section/section'

export interface AboutProps {
    className?: string
}

export default class About extends React.Component<AboutProps> {

    constructor(props: AboutProps) {
        super(props)
    }

    render() {
        return (
            <Section className={`jlw-about ${this.props.className}`}
                title="About"
            >
            </Section>
        )
    }

} 
