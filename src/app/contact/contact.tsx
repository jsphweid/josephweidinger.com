import * as React from 'react'
import { Element } from 'react-scroll'

export interface ContactProps {
    className?: string
}

export default class Contact extends React.Component<ContactProps> {

    constructor(props: ContactProps) {
        super(props)
    }

    render() {
        return (
            <div className={`jlw-contact ${this.props.className}`}>
                <Element name={'Contact'} />
                contact
            </div>
        )
    }

} 
