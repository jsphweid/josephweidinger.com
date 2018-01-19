import * as React from 'react'
import Section from '../common/section/section'

export interface MusicProps {
    className?: string
}

export default class Music extends React.Component<MusicProps> {

    constructor(props: MusicProps) {
        super(props)
    }

    render() {
        return (
            <Section className={`jlw-music ${this.props.className}`}
                title="Music"
            >
            </Section>
        )
    }

} 
