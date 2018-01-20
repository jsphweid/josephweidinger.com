import * as React from 'react'
import { SectionType } from '../common/types'
import { scroller, animateScroll } from 'react-scroll'
import { smoothScroll } from '../common/constants'

export interface NavbarProps {
    className?: string
}

export default class Navbar extends React.Component<NavbarProps> {

    constructor(props: NavbarProps) {
        super(props)
    }


    render() {

        const sectionTitles: SectionType[] = ['Projects', 'Other', 'About', 'Contact']

        const sections: JSX.Element[] = sectionTitles
            .map((section: string, index: number) => {
                return (
                    <li
                        onClick={() => scroller.scrollTo(section, smoothScroll)}
                        key={index}
                    >
                        {section}
                    </li>
                )
            })

        return (
            <div className={`jlw-navbar ${this.props.className || ''}`}>
                <div className="jlw-navbar-content">
                    <div onClick={() => animateScroll.scrollToTop(smoothScroll)}>
                        Joseph Weidinger
                    </div>
                    <div>
                        <ul>{sections}</ul>
                    </div>
                </div>
            </div>
        )
    }

} 
