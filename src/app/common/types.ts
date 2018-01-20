export type SectionType = 'About' | 'Projects' | 'Other' | 'Contact'

export interface ProjectTempateType {
    projectName: string
    expandedName: string
    liveLink: string
    imgUrl: string
    modalContent: JSX.Element
    date: string
}

export interface ImageSizeType {
    width: number
    height: number
}
