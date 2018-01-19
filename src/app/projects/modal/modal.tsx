import * as React from 'react'

export interface ModalProps {
    className?: string
}

export default class Modal extends React.Component<ModalProps> {

    constructor(props: ModalProps) {
        super(props)
    }

    render() {
        return (
            <div className={`jlw-modal ${this.props.className}`}>
                modal
            </div>
        )
    }

} 
