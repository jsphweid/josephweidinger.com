import * as React from 'react'
import Section from '../common/section/section'
import { skills } from '../common/constants'

const shakes: string = `http://www.columbiatribune.com/business/saturday_business/cheesy-memories-shakespeare-s-growth-from-a-small-operation-to/article_e1a3815e-e081-52f2-b03e-12575ebed8f1.html`
const organ: string = `https://soundcloud.com/joseph_weidinger/sets/one-paged-preludes-and`
const interviews: string = `https://soundcloud.com/joseph_weidinger/sets/interviews`
const songs: string = `https://soundcloud.com/joseph_weidinger/sets/songs`
const instrumental: string = `https://soundcloud.com/joseph_weidinger/sets/instrumental`
const woodshed: string = `http://josephweidinger.com/studioWoodshed`

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
                    Valuable Player for the Minimum Viable Product in My Personal
                    Ventures. Guy with an ear for sonic information and a nose for technical
                    insight. Smart creative producer. Dreamer and a Doer.
                    Also, <a href={shakes}>Former Pizza Maker Extraordinaire</a> at
                    Shakespeare's Downtown. Also: <a href={organ}>church organist</a> /
                    pianist; music engraver; self-described efficiency fanatic; Joel
                    Salatin wannabe; <a href={interviews}>interviewer
                    of awesome people;</a> host of jams, salons, new music
                    readings, <a href={woodshed}>recording sessions,</a> and other events
                    where I overwhelm people with homemade pizza, smoothies, soups, and
                    sourdough bread; Gerry Fialka clone; <a href={instrumental}>music composer</a> and <a href={songs}>songwriter
                    wannabe;</a> backyard chicken enthusiast; salutatorian; boring
                    uncle; and class clown in the school of hard knocks.
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
                <h2 className="jlw-skills-header">Skills / <a href="/joseph-weidinger-resume_2017-11-03.pdf">Résumé</a></h2>
                <div className="jlw-skills-content">
                    {skillsDivs}
                </div>
            </div>
        )
    }

    render() {
        return (
            <Section className={`jlw-about ${this.props.className || ''}`}
                title="About"
            >
                {this.renderBriefBio()}
                {this.renderSkills()}
            </Section>
        )
    }

} 
