import * as React from 'react'
import Navbar from './navbar/navbar'
import Contact from './contact/contact'
import About from './about/about'
import Projects from './projects/projects'
import Title from './title/title'
import Modal from './modal/modal'
import { animateScroll } from 'react-scroll'
import * as queryString from 'query-string'

import { ProjectTempateType } from './common/types'
import { instantScroll, projects } from './common/constants'
import { isEmptyObj } from './common/helpers'

export interface MainProps {}

export interface MainState {
    activeProject: ProjectTempateType
    savedScrollOffset: number
}

export default class Main extends React.Component<MainProps, MainState> {

    constructor(props: MainProps) {
        super(props)
        this.state = {
            activeProject: null,
            savedScrollOffset: -1
        }
    }

    componentDidMount() {
        document.title = 'Joseph Weidinger'
        this.parseInitialQueryString()
    }

    parseInitialQueryString = (): void => {
        const parsedQueryString = queryString.parse(location.search)
        if (isEmptyObj(parsedQueryString)) return

        if (parsedQueryString.project) {
            const project: ProjectTempateType = projects.filter((project: ProjectTempateType) => project.projectName === parsedQueryString.project)[0]
            if (project) {
                return this.handleSetActiveProject(project)
            }
        }

        if (parsedQueryString.section) {
            Navbar.scrollTo(parsedQueryString.section)
        }
    }

    static updateQueryString = (paramsToAppend?: Object): void => {
        const queryParams: string = paramsToAppend ? `?${queryString.stringify(paramsToAppend)}` : '/'
        history.pushState({}, null, queryParams)
    }

    handleSetActiveProject = (project: ProjectTempateType): void => {
        Main.updateQueryString({ project: project.projectName })
        const currentScrollPosition: number = document.documentElement.scrollTop || document.body.scrollTop
        this.setState({ activeProject: project, savedScrollOffset: currentScrollPosition })
    }

    handleCloseActiveProject = (): void => {
        Main.updateQueryString({ section: 'projects' })        
        const offset: number = this.state.savedScrollOffset
        animateScroll.scrollTo(offset, instantScroll)
        this.setState({ activeProject: null, savedScrollOffset: -1 })
    }

    render() {

        const modal: JSX.Element = (
            <div className="jlw">
                <Modal
                    project={this.state.activeProject}
                    closeModal={this.handleCloseActiveProject}
                />
            </div>
        )

        const normalSite: JSX.Element = (
            <div className="jlw jlw-headerOffset">
                <Navbar className="jlw-colorProfile1" />
                <Title className="jlw-colorProfile2" />
                <Projects className="jlw-colorProfile3" handleProjectOpen={this.handleSetActiveProject} />
                {/* <Other className="jlw-colorProfile2" /> */}
                <About className="jlw-colorProfile2" />
                <Contact className="jlw-colorProfile1" />
            </div>
        )

        return this.state.activeProject ? modal : normalSite
    }

}
