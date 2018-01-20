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

export interface IconType {
    class: string
    unicode: any
}

export interface IconObjType {
    facebook: IconType
    github: IconType
    youtube: IconType
    soundcloud: IconType
}
