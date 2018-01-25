import * as React from 'react'
import { ProjectTempateType, ImageSizeType, IconObjType } from './types'

export const smoothScroll: any = { duration: 200, smooth: true, offset: -168 }
export const instantScroll: any = { duration: 0, smooth: false }

export const icons: IconObjType = {
    facebook: { class: 'facebook', unicode: '&#xf09a;' },
    github: { class: 'github-circled', unicode: '&#xf09b;' },
    youtube: { class: 'youtube', unicode: '&#xf167;' },
    soundcloud: { class: 'soundcloud', unicode: '&#xf348;' }
}

export const projectSmallPicSize: ImageSizeType = {
    width: 296,
    height: 216
}

export const projectLargePicSize: ImageSizeType = {
    width: 900,
    height: 650
}

export const skills: any = {
    'Languages': ['Javascript / ES6 / Typescript', 'C / C++ / Python', 'HTML / CSS', 'Java / Groovy', 'Lua / AutoHotkey'],
    'Frameworks / Libraries': ['libsndfile / boost', 'Spring MVC / Grails', 'React / Redux / Angular 2', 'jQuery / Bootstrap'],
    'Tools': ['Git', 'IntelliJ, CLion, VS Code', 'Webpack / Grunt / Yeoman', 'Terraform', 'Mac / Windows / Ubuntu'],
    'Devops': ['AWS Route 53 / S3 / CloudFront', 'Nginx', 'Digital Ocean'],
    'Databases': ['Firebase', 'MySQL / Oracle', 'PostgreSQL'],
    'Audio/Visual Tools': ['Web Audio API', 'Web Speech API', 'Processing / P5js', 'SuperCollider', 'Flockingjs', 'WaveSurfer', 'Cubase Pro']
}

export const projects: ProjectTempateType[] =  [
    {
        projectName: `bookletMacro`,
        expandedName: `Booklet Macro`,
        liveLink: `http://github.com/jsphweid/bookletMacro`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1484871103/bookletMacro_wjaqo2.jpg`,
        date: `October 2015`,
        getModalContent: function() {
            return <div>
                bookletMacro is a cross-platform wrapper that simplifies and automates
                certain commands in Michael Schierl's jPDFTweak. The whole purpose is to
                transform a group of music part PDFs into two highly organized PDF files
                that print the fronts and backs of the booklets. It automates the
                pagination process and makes booklet printing extremely easy and
                quick. Here is a <a href="//youtube.com/watch?v=Jiq5TR0RN-A">
                youtube demonstration.</a> And the project is hosted
                on <a href={this.liveLink}>Github.</a>
            </div>
        }
    },
    {
        projectName: `finaleHotkeyGrid`,
        expandedName: `Finale Hotkey Grid`,
        liveLink: `http://github.com/jsphweid/Finale-Hotkey-Grid`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1484871107/finale-hotkey-grid_sznsni.png`,
        date: `December 2013 - April 2014`,
        getModalContent: function() {
            return <div>
                Finale Hotkey Grid was my first "grid" hotkey prototype. It's windows only and is
                written completely in AutoHotkey. It only works in conjunction with the music notation
                application that I use, Finale. This source code is hosted
                on <a href={this.liveLink}>Github.</a>
            </div>
        }
    },
    {
        projectName: `hotkeyGrid`,
        expandedName: `Hotkey Grid`,
        liveLink: `http://github.com/jsphweid/hotkey-grid`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1484871108/hotkey-grid_eru7ne.png`,
        date: `June - August 2015`,
        getModalContent: function() {
            return <div>
                Hotkey Grid is an abstraction and cross-platform version of the Finale Hotkey Grid. The
                idea behind this project is that instead of learning special hotkeys for every program,
                you can have a visual intermediary program that maps hotkeys / shortcuts to the host
                program. My brother, <a href="//clayweidinger.com">Clay Weidinger</a>, wrote most
                of the code for this using Electron -- framework that allows you to write desktop
                applications with web languages (html, css, javascript, etc.). The Grid is easily
                configurable with the GUI. Currently, this requires some setup and only works on OSX. This
                project is hosted on <a href={this.liveLink}>Github.</a>
            </div>
        }
    },
    {
        projectName: `processingSketches`,
        expandedName: `Processing Sketches`,
        liveLink: `http://www.youtube.com/watch?v=f7jjcGldl_o`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1484871107/processing_bqeqo8.jpg`,
        date: `August - October 2015`,
        getModalContent: function() {
            return <div>
                Processing is built on top of Java. It uses PApplet and a few shortcuts to
                easily draw things with code. Of course, things can quickly get complicated and
                fun! I've created many "sketches" but my biggest project so far was creating
                visuals for a 10-minute music set for India Nite 2015. I hooked my Macbook Pro up
                to MU Jesse Hall's giant projector and a friend triggered different sketches while
                we performed some tunes. The sketches create visual art that is influenced primarily
                by incoming audio information (amplitude, FFT analysis) and even webcam data. A
                video of the performance can be found
                on <a href={this.liveLink}>Youtube.</a>
            </div>
        }
    },
    {
        projectName: `feedCalc`,
        expandedName: `Feed Calculator`,
        liveLink: `https://www.josephweidinger.com/feedCalc/`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1484871105/feedCalc_effijp.png`,
        date: `October 2014`,
        getModalContent: function() {
            return <div>
                When I dreamed of being a farmer with a bunch of chickens... I began experimenting with
                custom feed rations from the local mixer. Chickens have certain minimal protein and
                calcium requirements, among other things. Knowing the price and protein % of these seeds, I
                created a tool that generates new combinations of feed that satisfy the minimal
                requirements for the chickens and satisfies a price point also. My brother wrote
                the front-end with bootstrap and angularJS and I wrote the backend and logic in
                JavaScript. The web-app can be
                found <a href="//josephweidinger.com/feedCalc/">HERE.</a>
            </div>
        }
    },
    {
        projectName: `justInTune`,
        expandedName: `Just In Tune`,
        liveLink: `http://www.josephweidinger.com/justInTune`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1484871108/justIntonation_nlcdwk.png`,
        date: `Spring 2015, then Fall 2016`,
        getModalContent: function() {
            return <div>
                A web-app that takes inputed musical notes and algorithmically finds the
                simplest ratio between the notes for an on-the-fly Just Intonation
                system. Originally written in SuperCollider (SCLang), I rewrote it
                javascript / jquery with the help of some web audio/midi libraries. The
                project is located <a href={this.liveLink}>HERE.</a>
            </div>
        }
    },
    {
        projectName: `playEquation`,
        expandedName: `Play Equation`,
        liveLink: `http://www.josephweidinger.com/playEquation`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1485141822/Screen_Shot_2017-01-22_at_9.20.04_PM_uppjjg.png`,
        date: `Fall 2016`,
        getModalContent: function() {
            return <div>
                I was learning about audio synthesis and learned how all periodic sounds can
                very accurately be described as some mathematical equation. I couldn't find a
                tool online that would allow me to "see / hear" an equation so I built
                one. It's a basic javascript / jQuery App using the Web Audio API to generate
                a 2 second sample area from an equation. I also used a few other libraries to
                display the equation elegantly and accurately display the graph. The link
                to the live website is <a href={this.liveLink}>HERE.</a> And
                the source code: <a href="//github.com/jsphweid/playEquation">GitHub.</a>
            </div>
        }
    },
    {
        projectName: `VAIL`,
        expandedName: `Visual and Intuitive Learning`,
        liveLink: `https://www.josephweidinger.com/VAIL`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1485141863/Screen_Shot_2017-01-22_at_9.19.11_PM_zpaggn.png`,
        date: `November 2016`,
        getModalContent: function() {
            return <div>
                Visual And Intuitive Learning (VAIL) is a set of planned sketches that utilize the P5js
                drawing library to provide an interactive series of slides on any topic, in an effort to
                understand it far quicker. Somewhere in between a lecture and a YouTube video is the style
                I aim for. The site <a href={this.liveLink}>is Here</a> and it
                is hosted <a href="//github.com/jsphweid/VAIL">on Github Here.</a>
            </div>
        }
    },
    {
        projectName: `AintIFunny`,
        expandedName: `Ain't I Funny`,
        liveLink: `https://www.josephweidinger.com/AintIFunny`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1485187194/Screen_Shot_2017-01-23_at_9.59.07_AM_p2xz4r.png`,
        date: `January 2017`,
        getModalContent: function() {
            return <div>
                "Ain't I funny" is an ambitious app that seeks to generate jokes algorithmically and allow
                people to vote on which ones are the best. Check it out <a href={this.liveLink}>HERE. </a>And
                on <a href="//github.com/jsphweid/AintIFunny">GitHub</a>
            </div>
        }
    },
    {
        projectName: `browserTranscribe`,
        expandedName: `Browser Transcribe`,
        liveLink: `http://www.josephweidinger.com/browserTranscribe`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1484871388/browserTranscribe_yrcler.png`,
        date: `December 2016`,
        getModalContent: function() {
            return <div>
                A web-app that allows you to easily manipulate a sound file for the purposes
                of transcribing its contents: music, speech or otherwise. I wanted to build
                something like the very
                professional <a href="https://www.seventhstring.com/xscribe/overview.html">'Transcribe!'</a> except
                with just the basic functionality for the web browser. You can slow it down while
                preserving the pitch, start and stop on a dime, loop, and
                more. <a href={this.liveLink}>Here is
                a link</a> to the live website. The project is hosted <a href="//github.com/jsphweid/browserTranscribe">on
                GitHub.</a>
            </div>
        }
    },
    {
        projectName: `aMuseMe`,
        expandedName: `A-'Muse' Me`,
        liveLink: `https://josephweidinger.com/aMuseMe`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1484884631/Screen_Shot_2017-01-19_at_9.55.37_PM_y0szwe.png`,
        date: `January 2017`,
        getModalContent: function() {
            return <div>
                This web-app is built with TypeScript, Angular 2, and Firebase. It's aim is
                to stimulate your creativity or help 'flesh out' an idea by asking you lots
                of questions systemmatically. At least that's the idea... You can also submit
                your own questions and those questions can be voted on by other users as
                well! Those high ranking questions make their way in to the line-up of
                questions for future 'sessions.' The live
                site <a href={this.liveLink}>is hosted here</a> and
                the source can be <a href="//github.com/jsphweid/aMuseMe">found
                on GitHub.</a>
            </div>
        }
    },
    {
        projectName: `scheduleMaker`,
        expandedName: `Schedule Maker`,
        liveLink: `www.github.com/jsphweid/scheduleMakerSpring`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1486747894/Screen_Shot_2017-02-10_at_11.30.21_AM_d8gyep.png`,
        date: `January-February 2017`,
        getModalContent: function() {
            return <div>
                This web-app WAS built with Spring MVC, Spring Security, MySQL, React, and
                served up by Tomcat on my personal server. The goal of this app was to prove I could
                build an app in those technologies and get a job at Carfax (which was successful). But
                the functionality was to to assist a person in charge of making schedules at a food
                place. It's a tool that gives real-time data-oriented feedback with regards to their
                scheduling choices. The app is no longer hosted (because I don't want to maintain the
                necessary infrastructure) but the source code can be found here: <a href={this.liveLink}>on GitHub.</a>
            </div>
        }
    }

]
