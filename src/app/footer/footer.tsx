import * as React from 'react'

export interface FooterProps {
    className?: string
}

export default class Footer extends React.Component<FooterProps> {

    constructor(props: FooterProps) {
        super(props)
    }

    render() {
        return (
            <div className={`jlw-footer ${this.props.className}`}>
                footer
            </div>
        )
    }

} 
