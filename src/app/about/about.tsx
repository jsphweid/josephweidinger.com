import * as React from 'react'
import Section from '../common/section/section'
import { skills } from '../common/constants'
const shakesArticleLink: string = `//www.columbiatribune.com/business/saturday_business/cheesy-memories-shakespeare-s-growth-from-a-small-operation-to/article_e1a3815e-e081-52f2-b03e-12575ebed8f1.html`

export interface AboutProps {
    className?: string
}

export default class About extends React.Component<AboutProps> {

    constructor(props: AboutProps) {
        super(props)
    }

    renderBriefBio = (): JSX.Element => {
        return (
            <div className="jlw-bio">
                <p>
                        Coder monkey at Carfax and independent software developer creatively
                        engineering solutions to my own problems using any exciting new or
                        old technology I can get my hands on and head wrapped around. Most
                        Valuable Player for the Minimum Viable Product in My Personal Ventures.&nbsp;
                        <a href={shakesArticleLink}>Former Pizza Maker Extraordinaire</a> at
                        Shakespeare's Downtown. Also: church organist / pianist; music engraver;
                        self-described efficiency fanatic; Joel Salatin wannabe; interviewer
                        of awesome people; host of jams, salons, new music readings,&nbsp;
                        <a href="http://josephweidinger.com/studioWoodshed">recording sessions</a>,
                        and other events where I overwhelm people with homemade pizza, smoothies,
                        soups, and sourdough bread; Gerry Fialka clone; wasted time but timed every
                        second of it; music composer and songwriter wannabe; backyard chicken
                        enthusiast; salutatorian; boring uncle; and class clown in the school
                        of hard knocks.
                </p>
            </div>
        )
    }

    renderSkills = (): JSX.Element => {
        const skillsDivs: JSX.Element[] = Object.keys(skills)
            .map((skill: string, index: number) => {
                const items: string[] = skills[skill]
                return (
                    <div key={`div-${index}`}>
                        <h3>{skill}</h3>
                        <ul>
                            {items.map((item: string, index: number) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                )
            })

        return (
            <div className="jlw-skills">
                <h2 className="jlw-skills-header">Skills</h2>
                <div className="jlw-skills-content">
                    {skillsDivs}
                </div>
            </div>
        )
    }

    render() {
        return (
            <Section className={`jlw-about ${this.props.className}`}
                title="About"
            >
                {this.renderBriefBio()}
                {this.renderSkills()}
            </Section>
        )
    }

} 
