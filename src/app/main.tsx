import * as React from 'react'
import Navbar from './navbar/navbar'
import Contact from './contact/contact'
import About from './about/about'
import Projects from './projects/projects'
import Title from './title/title'
import Modal from './modal/modal'
import { animateScroll } from 'react-scroll'

import { ProjectTempateType } from './common/types'
import { instantScroll } from './common/constants'

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
    }

    handleSetActiveProject = (project: ProjectTempateType): void => {
        const currentScrollPosition: number = document.documentElement.scrollTop || document.body.scrollTop
        this.setState({ activeProject: project, savedScrollOffset: currentScrollPosition })
    }

    handleCloseActiveProject = (): void => {
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
