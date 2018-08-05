import * as React from 'react'
import SoundCloud from 'react-simple-soundcloud-widget'
import Section from '../common/section/section'

export interface InterviewsProps {
  className?: string
}

export interface InterviewsState {
  currentSoundId: number | null
  soundCloudInfos: SoundCloudInformationType | null
}

interface SoundCloudInformationType {
  title: string
  description: string
}

export default class Interviews extends React.Component<
  InterviewsProps,
  InterviewsState
> {
  constructor(props: InterviewsProps) {
    super(props)
    this.state = {
      currentSoundId: null,
      soundCloudInfos: null
    }
  }

  handlePlay(soundId: number) {
    if (soundId !== this.state.currentSoundId) {
      fetch(
        `https://api.soundcloud.com/tracks/${soundId}?client_id=88858454eff3af1661236f7b728ad7fd`
      )
        .then(response => response.json())
        .then(json =>
          this.setState({
            soundCloudInfos: {
              title: json.title,
              description: json.description
            }
          })
        )
    }
  }

  renderDescription() {
    const { soundCloudInfos } = this.state

    return soundCloudInfos ? (
      <div>
        <h2>{soundCloudInfos.title}</h2>
        <p>{soundCloudInfos.description}</p>
      </div>
    ) : null
  }

  render() {
    return (
      <Section
        className={`jlw-interviews ${this.props.className || ''}`}
        title={'interviews'}
      >
        <div className="jlw-interviews-description">
          I interview people that I'm interested in during my spare time.
          Typically these people are local artists / business folks. But I'm
          branching out more. I was inspired to do interviews after spending
          time with my good friend and mentor Gerry Fialka. Many questions I use
          are ones he has been accumulating his whole life but I write a lot of
          my own specific questions as well.
        </div>
        <div className="jlw-interviews-content">
          <div>
            <SoundCloud
              url={'https://soundcloud.com/joseph_weidinger/sets/interviews'}
              config={{ visual: true, sharing: false }}
              onPlay={info => this.handlePlay(info.soundId)}
            />
            {this.renderDescription()}
          </div>
        </div>
      </Section>
    )
  }
}