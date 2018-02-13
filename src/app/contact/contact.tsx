import * as React from 'react'
import { Element } from 'react-scroll'
import { icons } from '../common/constants'
import { IconType } from '../common/types'

export interface ContactProps {
    className?: string
}

export default class Contact extends React.Component<ContactProps> {

    constructor(props: ContactProps) {
        super(props)
    }

    renderIcon = (icon: IconType, url: string): JSX.Element => {
        return (
            <a href={url}>
                <div className="jlw-contact-icon">
                    <i
                        className={`jlw-icons icon-${icon.class}`}
                        dangerouslySetInnerHTML={{ __html: icon.unicode }}
                    ></i>
                </div>
            </a>
        )
    }

    render() {
        return (
            <div className={`jlw-contact ${this.props.className || ''}`}>
                <Element name={'contact'} />
                <div className="jlw-contact-content">
                    <div>
                        <h3>Contact</h3>
                        <p>
                            Email me at: <br />
                            <a href="mailto:jsphweid@gmail.com">jsphweid@gmail.com</a>
                        </p>
                    </div>
                    <div>
                        <h3>Other Sites</h3>
                        <ul>
                            <li>
                                {this.renderIcon(icons.github, 'https://www.github.com/jsphweid')}
                            </li>
                            <li>
                                {this.renderIcon(icons.soundcloud, 'https://www.soundcloud.com/joseph_weidinger')}
                            </li>
                            <li>
                                {this.renderIcon(icons.facebook, 'https://www.facebook.com/jsphweid')}
                            </li>
                            <li>
                                {this.renderIcon(icons.youtube, 'https://www.youtube.com/user/JojoeMusic')}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Home Base</h3>
                        <p>
                            Columbia, MO<br/>
                            United States
                        </p>
                    </div>
                </div>
                <div className="jlw-contact-copyright">
                    <div>Copyright © 2018</div>
                </div>
            </div>
        )
    }

} 
