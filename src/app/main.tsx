import * as React from 'react'
import Navbar from './navbar/navbar'
import Contact from './contact/contact'
import About from './about/about'
import Projects from './projects/projects'
import Other from './other/other'
import Title from './title/title'
import Modal from './modal/modal'

import { SectionType, ProjectTempateType } from './common/types'

export interface MainProps {}

export interface MainState {
    activeProject: ProjectTempateType
}

export default class Main extends React.Component<MainProps, MainState> {

    constructor(props: MainProps) {
        super(props)
        this.state = {
            activeProject: null
        }
    }

    maybeRenderModal = (): JSX.Element => {
        return this.state.activeProject
            ? (
                <Modal
                    project={this.state.activeProject}
                    closeModal={() => this.setState({ activeProject: null })}
                />
            ) : null
    }

    render() {

        const modal: JSX.Element = (
            <div className="jlw">
                <Modal
                    project={this.state.activeProject}
                    closeModal={() => this.setState({ activeProject: null })}
                />
            </div>
        )

        const normalSite: JSX.Element = (
            <div className="jlw jlw-headerOffset">
                <Navbar className="jlw-colorProfile1" />
                <Title className="jlw-colorProfile2" />
                <Projects className="jlw-colorProfile3"
                    handleProjectOpen={(project: ProjectTempateType) => this.setState({ activeProject: project })}
                />
                <Other className="jlw-colorProfile2" />
                <About className="jlw-colorProfile3" />
                <Contact className="jlw-colorProfile1" />
            </div>
        )

        return this.state.activeProject ? modal : normalSite
    }

}
