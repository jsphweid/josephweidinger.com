import * as React from 'react'
import Section from '../common/section/section'
import Project from './project/project'
import { projects } from '../common/constants'
import { ProjectTempateType } from '../common/types'

export interface ProjectsProps {
    className?: string
    handleProjectOpen: (project: ProjectTempateType) => void
}

export default class Projects extends React.Component<ProjectsProps> {

    constructor(props: ProjectsProps) {
        super(props)
    }

    renderProjects = (): JSX.Element[] => {
        return projects.map((project: ProjectTempateType, index: number) => {
            return (
                <Project
                    key={index}
                    template={project}
                    handleProjectOpen={this.props.handleProjectOpen}
                />
            )
        })
    }

    render() {
        return (
            <Section className={`jlw-projects ${this.props.className || ''}`}
                title={'Projects'}
            >
                <div className="jlw-projects-content">
                    {this.renderProjects()}
                </div>
            </Section>
        )
    }

} 
