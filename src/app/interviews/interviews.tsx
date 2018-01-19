import * as React from 'react'
import Section from '../common/section/section'

export interface InterviewsProps {
    className?: string
}

export default class Interviews extends React.Component<InterviewsProps> {

    constructor(props: InterviewsProps) {
        super(props)
    }

    render() {
        return (
            <Section className={`jlw-interviews ${this.props.className}`}
                title="Interviews"
            >
            
            </Section>
        )
    }

} 
