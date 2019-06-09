import * as React from 'react'
import { SectionType } from '../common/types'
import { scroller, animateScroll } from 'react-scroll'
import { smoothScroll } from '../common/constants'
import Main from '../main'

export interface NavbarProps {
  className?: string
}

export default class Navbar extends React.Component<NavbarProps> {
  constructor(props: NavbarProps) {
    super(props)
  }

  public static scrollTo = (section: string): void => {
    scroller.scrollTo(section, smoothScroll)
  }

  public static handleNavbarItemClick = (section: string): void => {
    Navbar.scrollTo(section)
    Main.updateQueryString({ section })
  }

  render() {
    const sectionTitles: SectionType[] = [
      'change (b)log',
      'dev projects',
      'about',
      'contact'
    ]

    const sections: JSX.Element[] = sectionTitles.map(
      (section: string, index: number) => {
        return (
          <li onClick={() => Navbar.handleNavbarItemClick(section)} key={index}>
            {section}
          </li>
        )
      }
    )

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
