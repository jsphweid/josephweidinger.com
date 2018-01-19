import * as React from 'react'

export interface ProjectProps {
    className?: string
}

export default class Project extends React.Component<ProjectProps> {

    constructor(props: ProjectProps) {
        super(props)
    }

    render() {
        return (
            <div className={`jlw-project ${this.props.className}`}>
                project
            </div>
        )
    }

} 
