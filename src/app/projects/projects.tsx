import * as React from 'react'
import Section from '../common/section/section'
import Project from './project/project'
import { projects } from '../common/constants'
import { ProjectTempateType, ProjectDisplayPriorities } from '../common/types'

export interface ProjectsProps {
    className?: string
    handleProjectOpen: (project: ProjectTempateType) => void
}

export interface ProjectsState {
    currentPriority: ProjectDisplayPriorities
}

export default class Projects extends React.Component<ProjectsProps, ProjectsState> {

    constructor(props: ProjectsProps) {
        super(props)
        this.state = {
            currentPriority: ProjectDisplayPriorities.Music
        }
    }

    reorderProjectsDependingOnPriority = (): ProjectTempateType[] => {
        switch (this.state.currentPriority) {
            case 'Music / Audio':
                const isMusicAudio = (tags: string[]) => tags.includes('music') || tags.includes('audio') 
                const relevant = projects.filter((project: ProjectTempateType) => isMusicAudio(project.tags))
                const notRelevant = projects.filter((project: ProjectTempateType) => !isMusicAudio(project.tags))
                return [...relevant, ...notRelevant]
            case 'Latest':
                return projects
        }
        return projects
    }

    renderProjects = (): JSX.Element[] => {
        const reorderedProjects: ProjectTempateType[] = this.reorderProjectsDependingOnPriority()
        return reorderedProjects.map((project: ProjectTempateType, index: number) => {
            return (
                <Project
                    key={index}
                    template={project}
                    handleProjectOpen={this.props.handleProjectOpen}
                />
            )
        })
    }

    renderPriorityReorderingItems = (): JSX.Element[] => {
        const priorities = Object.keys(ProjectDisplayPriorities)
        return priorities.map((priority: any, index: number) => {
            const priorityText = ProjectDisplayPriorities[priority] as ProjectDisplayPriorities
            const isSelected: boolean = priorityText === this.state.currentPriority
            return (
                <li
                    key={index}
                    onClick={() => this.setState({ currentPriority: priorityText })}
                    className={isSelected ? 'jlw-projects-content-priority-item--active' : ''}
                >
                    {priorityText}
                </li>
            )
        })
    }

    render() {
        return (
            <Section className={`jlw-projects ${this.props.className || ''}`}
                title={'projects'}
            >
                <div className="jlw-projects-content">
                    <div className="jlw-projects-content-priority">
                        <h2>Priority</h2>
                        <ul>{this.renderPriorityReorderingItems()}</ul>
                    </div>
                    <div className="jlw-projects-content-projects">
                        {this.renderProjects()}
                    </div>
                </div>
            </Section>
        )
    }

} 
