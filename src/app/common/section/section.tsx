import * as React from 'react'

export interface SectionProps {
    className?: string
    title: string
    children: any
}

export default class Section extends React.Component<SectionProps> {

    constructor(props: SectionProps) {
        super(props)
    }

    render() {
        const { title, children } = this.props
        return (
            <div className={`jlw-section ${this.props.className}`}>
                <h1>{title.toUpperCase()}</h1>
                <hr/>
                {children}
            </div>
        )
    }

} 
