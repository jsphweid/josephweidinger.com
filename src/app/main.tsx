import * as React from 'react'
import Navbar from './navbar/navbar'
import Contact from './contact/contact'
import About from './about/about'
import Projects from './projects/projects'
import Other from './other/other'
import Title from './title/title'

import { SectionType } from './common/types'

export interface MainProps {}

export default class Main extends React.Component {

    constructor(props: MainProps) {
        super(props)
    }

    render() {
        return (
            <div className="jlw">
                <Navbar className="jlw-colorProfile1" />
                <Title className="jlw-colorProfile2" />
                <Projects className="jlw-colorProfile3" />
                <Other className="jlw-colorProfile2" />
                <About className="jlw-colorProfile3" />
                <Contact className="jlw-colorProfile1" />
            </div>
        )
    }

}
