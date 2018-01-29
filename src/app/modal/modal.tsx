import * as React from 'react'
import { ProjectTempateType } from '../common/types'
import { projectLargePicSize } from '../common/constants'
import { animateScroll } from 'react-scroll'
import { instantScroll } from './../common/constants'

export interface ModalProps {
    className?: string
    project: ProjectTempateType
    closeModal: () => void
}

export default class Modal extends React.Component<ModalProps> {

    constructor(props: ModalProps) {
        super(props)
        animateScroll.scrollToTop(instantScroll)
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleEscapePushed)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleEscapePushed)
    }

    handleEscapePushed = (keyEvent: KeyboardEvent): void => {
        if (keyEvent.code === 'Escape') {
            keyEvent.preventDefault()
            this.props.closeModal()
        }
    }

    renderCloseButton = (): JSX.Element => {
        return <div onClick={this.props.closeModal} className="jlw-modal-closeButton"><div><div></div></div></div>
    }

    render() {
        const { expandedName, imgUrl, date, liveLink } = this.props.project
        const { width, height } = projectLargePicSize
        const cloudinaryStylePortion: string = `c_fill,g_custom:face,h_${height},w_${width},y_0`
        const imgSrc: string = imgUrl.replace('---cloudinaryStyleString---', cloudinaryStylePortion)

        return (
            <div className={`jlw-modal ${this.props.className || ''}`}>
                {this.renderCloseButton()}
                <h2>{expandedName}</h2>
                <hr/>
                <img src={imgSrc} onClick={() => window.location.href = liveLink} alt={expandedName} />
                <div className="jlw-modal-content">{this.props.project.getModalContent()}</div>
                <div className="jlw-modal-date">Date: <strong>{date}</strong></div>
                <button className="jlw-modal-button" onClick={this.props.closeModal}>Close</button>
            </div>
        )
    }

} 
