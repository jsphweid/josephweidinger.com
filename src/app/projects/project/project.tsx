import * as React from 'react'
import { ProjectTempateType } from '../../common/types'
import { projectSmallPicSize } from '../../common/constants'

const zoomIn = require('./zoom-in.svg')

export interface ProjectProps {
    className?: string
    template: ProjectTempateType
}

export default class Project extends React.Component<ProjectProps> {

    constructor(props: ProjectProps) {
        super(props)
    }

    render() {

        const { className, template } = this.props
        const { width, height } = projectSmallPicSize
        const cloudinaryStylePortion: string = `c_fill,g_custom:face,h_${height},w_${width},y_0`
        const imgSrc: string = template.imgUrl.replace('---cloudinaryStyleString---', cloudinaryStylePortion)
        const heightWidthStyle = { width: `${width}px`, height: `${height}px` }

        return (
            <div className={`jlw-project ${className}`} style={heightWidthStyle}>
                <img src={imgSrc} alt={template.projectName} />
                <div className="jlw-project-overlay" style={heightWidthStyle}>
                    <div>{template.projectName}</div>
                    <div><img src={zoomIn} alt="Zoom In"/></div>
                </div>
            </div>
        )
    }

} 
