import * as React from 'react'

export interface NavbarProps {
    className?: string
}

export default class Navbar extends React.Component<NavbarProps> {

    constructor(props: NavbarProps) {
        super(props)
    }

    render() {

        const sections: JSX.Element[] = ['projects', 'interviews', 'music', 'about', 'contact']
            .map((section: string, index: number) => {
                return <li key={index}>{section}</li>
            })

        return (
            <div className={`jlw-navbar ${this.props.className}`}>
                <div className="jlw-navbar-content">
                    <div>Joseph Weidinger</div>
                    <div>
                        <ul>{sections}</ul>
                    </div>
                </div>
            </div>
        )
    }

} 
