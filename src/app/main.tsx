import * as React from 'react'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import About from './about/about'
import Projects from './projects/projects'
import Interviews from './interviews/interviews'
import Music from './music/music'
import Title from './title/title'

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
                <Interviews className="jlw-colorProfile2" />
                <Music className="jlw-colorProfile3" />
                <About className="jlw-colorProfile2" />
                <Footer className="jlw-colorProfile1" />
            </div>
        )
    }

}
