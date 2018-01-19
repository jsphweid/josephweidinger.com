import * as React from 'react'
import Section from '../common/section/section'


export interface TitleProps {
    className?: string
}

export default class Title extends React.Component<TitleProps> {

    constructor(props: TitleProps) {
        super(props)
    }

    render() {
        return (
            <Section className={`jlw-title ${this.props.className}`}
                title={'Joseph Weidinger'}
            >
                <div className="jlw-title-labels">
                    Full-Stack Developer - Engineer/Creator<br/>
                    Interviewer - Composer - Musician
                </div>
            </Section>
        )
    }

} 
