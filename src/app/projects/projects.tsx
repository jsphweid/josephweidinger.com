import * as React from 'react'
import Section from '../common/section/section'

export interface ProjectsProps {
    className?: string
}

export default class Projects extends React.Component<ProjectsProps> {

    constructor(props: ProjectsProps) {
        super(props)
    }

    render() {
        return (
            <Section className={`jlw-projects ${this.props.className}`}
                title={'Projects'}
            >

            </Section>
        )
    }

} 
