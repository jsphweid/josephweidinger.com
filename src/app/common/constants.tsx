import * as React from 'react'
import { ProjectTempateType, ImageSizeType, IconObjType } from './types'
import ScheduleMakerLaunchButton from './scheduleMakerLaunchButton'

export const smoothScroll: any = { duration: 200, smooth: true, offset: -122 }
export const instantScroll: any = { duration: 0, smooth: false }

export const genericImage = `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1517456998/generic-project_h2za5h.png`

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

// TODO:
// all the recent projects need pictures. Compare inflections and fiber map will need some 
// love too. Also compare inflections will need the site hosted...

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
        projectName: `josephweidinger.com`,
        expandedName: `josephweidinger.com`,
        liveLink: `http://www.josephweidinger.com/`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1517527503/Screen_Shot_2018-02-01_at_5.23.55_PM_tzcnqa.png`,
        date: `February 2016, January 2018`,
        tags: [],
        getModalContent: function () {
            return <div>
                <p>
                    Pardon the self-referential nature of this project, but I consider this site a
                    project in and of itself. The original site was created a few years ago.
                    It was mostly copied from some <a href="https://blackrockdigital.github.io/startbootstrap-freelancer/">Bootstrap
                    template</a> and hosted on a Digital Ocean box. I had <u>almost</u> no idea what I
                    was doing and my older brother Clay had to help me with many things.
                </p>
                <p>
                    In Jan. 2018, armed with much more knowledge about building frontend sites, I rebuilt the
                    entire thing from scratch with React while keeping the basic look. As this site is just static content, I used
                    React-Static to pre-render the html so that the site was more performant. Finally,
                    I migrated all of my site over to AWS. All of my projects use the aws-cli to dump
                    their artifacts into a bucket. Cloudfront uses this bucket to cache files around the
                    globe and serve them gzipped
                    for <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fjosephweidinger.com&tab=mobile">incredibly
                    fast delivery.</a>
                </p>
            </div>
        }
    },
    {
        projectName: `blindfoldChessTrainer`,
        expandedName: `Blindfold Chess Trainer`,
        liveLink: `https://www.josephweidinger.com/blindfoldChessTrainer`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1518147976/Screen_Shot_2018-02-08_at_7.58.35_PM_pyofsk.png`,
        date: `January - Februrary 2018`,
        tags: [],
        getModalContent: function () {
            return <div>
                <p>
                    Over the years I've read stories from people I admire with exceptional visual / mental
                    abilities. Some of these people mention that one of their parents taught them
                    how to play mental / blindfold chess when they were children. A bit saddened that
                    I hadn't had the same opportunity, I decided to make it for myself. I stiched
                    together a few libraries (chess.js, react-chessboard) and integrated it with my
                    own logic and the Web Speech API.
                </p>
                <p>
                    It's completely client-side built with React / Typescript.
                    You can <a href={this.liveLink}>try it here!</a> The source code is
                    located <a href="https://github.com/jsphweid/blindfold-chess-trainer">here.</a>
                </p>
            </div>
        }
    },
    {
        projectName: `pianoLearningStream`,
        expandedName: `Piano Learning Stream`,
        liveLink: `https://github.com/jsphweid/piano-learning-stream`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1518148183/Screen_Shot_2018-02-08_at_9.48.46_PM_gwxj1e.png`,
        date: `November - December 2017`,
        tags: ['music'],
        getModalContent: function () {
            return <div>
                <p>
                    The goal of this project was to learn about using Convolutional Neural Networks with the
                    ambition of getting a neural net to be able to transcribe raw piano audio. To be honest,
                    at this time it isn't very effective because the neural net is not well formed. I do believe,
                    however, that I've discovered some technical insight: a technique for
                    formulating and preparing data for the CNN's inputs and labels using a hand-rolled python
                    module written in C / C++.
                </p>
                <p>
                    This module uses specially prepared midi files to assemble raw audio
                    (with the help of a free piano sample library). This raw audio is transformed into inputs (FFT spectrum)
                    and labels (calculated amplitude scores) and fed into the neural network. All this work
                    is done on-the-fly and in-memory to prevent the need for constantly hitting the disk.
                </p>
                <p>
                Source code for this ongoing research is <a href={this.liveLink}>here.</a>
                </p>
            </div>
        }
    },
    {
        projectName: `whichString`,
        expandedName: `Which String`,
        liveLink: `http://www.github.com/jsphweid/whichString`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1517525918/Screen_Shot_2018-02-01_at_4.54.22_PM_nrxo2q.png`,
        date: `May 2017 - Dec 2017`,
        tags: ['music'],
        getModalContent: function () {
            return <div>
                <p>
                    whichString is an app that uses a Neural Network to listen to a user playing a violin
                    in real-time and predict the exact spot on the neck being depressed. It uses a fairly
                    basic model built with <a href="https://www.tensorflow.org/">Google's TensorFlow.</a> This
                    model is exported and used client-side <a href="http://deeplearnjs.org/">by deeplearnjs.</a>
                    The client code is written in React / Typescript.
                </p>
                <p>
                    <a href={this.liveLink}>Here</a> is the
                    source code. At this time, a live version does not exist as I have not devised a way to
                    upload the model efficiently (it's rather huge). You can download the source code and build
                    the model yourself fairly easily. More info on that link.
                </p>
            </div>
        }
    },
    {
        projectName: `react-fft-flipbook`,
        expandedName: `React FFT Flipbook`,
        liveLink: `http://www.josephweidinger.com/react-fft-flipbook`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1517457470/Screen_Shot_2018-01-31_at_9.56.43_PM_kst1d5.png`,
        date: `October, December 2017`,
        tags: ['music'],
        getModalContent: function () {
            return <div>
                <p>
                    fftFlipBook is an app where one can load a wav file into their browser. It is similar
                    to other audio players in that you can visualize the frequency spectrum as it plays, but
                    this has the added bonus of being able to stop and loop on whichever buffer you choose
                    and view the spectrum as it is there. This alone isn't that novel, but one day
                    I hope to create the ability to slow down the music and the visual spectrum to an infinite
                    degree so that the music is capable of being suspended at any point "in mid-air". To do this
                    without chopping / stitching the wavefrom repeatedly will require either clever techniques involving
                    neural networks or some sophisticated insight in Digital Signal Processing, but I believe it
                    can be done.
                </p>
                <p>
                    This project is a package <a href="https://www.npmjs.com/package/react-fft-flipbook">in the</a> npm
                    registry. A live demo can be found <a href="https://josephweidinger.com/react-fft-flipbook/">here.</a> And
                    the source code is located <a href="https://github.com/jsphweid/react-fft-flipbook">here.</a>
                </p>
            </div>
        }
    },
    {
        projectName: `fiberMap`,
        expandedName: `Fiber Map`,
        liveLink: ``,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1518184505/Screen_Shot_2018-02-09_at_7.54.19_AM_mwaiii.png`,
        date: `July - August 2017`,
        tags: [],
        getModalContent: function () {
            return <div>
                <p>
                    fiberMap was a project I worked on with my co-worker, Brian Fitzgerald. I was looking for
                    houses in Columbia, MO with fiber internet and found it tedious to check several ISP's for fiber
                    coverage at each location. We devised an app that would scrape the local ISP's websites, store
                    relevant plan/price information in a database, and present it in a graphical way.
                </p>
                <p>
                    We did manage to
                    scrape info on 3 companies for just about every address in Columbia. It worked like this:
                    we wrote algorithms to process postal routes from Melissa Data into real addresses. We 
                    spun up headless clients to hit Google APIs to validate the addresses and extract lat/lng information.
                    For each of these addresses, we spun up more headless clients and extracted information from those ISPs.
                    I set up an automated job processing system in node with Kue LINK and ran it on a digital ocean ubuntu
                    instance for weeks to gather all the data.
                </p>
                <p>
                    At this time the frontend has not been fully completed and the source code is not open.
                </p>
            </div>
        }
    },
    {
        projectName: `scheduleMaker`,
        expandedName: `Schedule Maker`,
        liveLink: `https://www.github.com/jsphweid/scheduleMakerSpring`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1486747894/Screen_Shot_2017-02-10_at_11.30.21_AM_d8gyep.png`,
        date: `January-February 2017`,
        tags: [],
        getModalContent: function () {
            return <div>
                <p>
                    This webapp WAS built with Spring MVC, Spring Security, MySQL, React, and
                    served up by Tomcat on my personal server. The goal of this app was to prove I could
                    build an app in those technologies and get a job at Carfax (the goal was reached). Prior to
                    working at Carfax, I worked at several food joints over the years. Based on inefficiencies I saw,
                    I decided to see if this was a problem that could be solved with a webapp.
                    This app gives real-time data-oriented feedback with regards to their
                    scheduling decisions.
                </p>
                <p>
                    The source code can be found here: <a href={this.liveLink}>on GitHub.</a> I wrote an AWS Lambda to spin up an instance with Tomcat / Mysql. Be my guest... try it out!
                </p>
                <ScheduleMakerLaunchButton />
            </div>
        }
    },
    {
        projectName: `AintIFunny`,
        expandedName: `Ain't I Funny`,
        liveLink: `https://www.josephweidinger.com/AintIFunny`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1485187194/Screen_Shot_2017-01-23_at_9.59.07_AM_p2xz4r.png`,
        date: `January 2017`,
        tags: [],
        getModalContent: function () {
            return <div>
                <p>
                    "Ain't I funny" is an ambitious app that seeks to generate jokes algorithmically and allow
                    people to vote on which ones are the best. The MVP was to get one formula to work and I stopped
                    after I achieved that.
                </p>
                <p>
                    But you can still check it out <a href={this.liveLink}>HERE.</a> And
                    on <a href="//github.com/jsphweid/AintIFunny">GitHub</a>
                </p>
            </div>
        }
    },
    {
        projectName: `aMuseMe`,
        expandedName: `A-'Muse' Me`,
        liveLink: `https://josephweidinger.com/aMuseMe`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1484884631/Screen_Shot_2017-01-19_at_9.55.37_PM_y0szwe.png`,
        date: `January 2017`,
        tags: [],
        getModalContent: function () {
            return <div>
                <p>
                    This webapp is built with TypeScript, Angular 2, and Firebase. It's aim is
                    to stimulate your creativity or help 'flesh out' an idea by asking you lots
                    of questions systemmatically. At least that's the idea... You can also submit
                    your own questions and those questions can be voted on by other users as
                    well! Those high ranking questions make their way in to the line-up of
                    questions for future 'sessions.'
                </p>
                <p>
                    The live
                    site <a href={this.liveLink}>is hosted here</a> and
                    the source can be <a href="//github.com/jsphweid/aMuseMe">found
                    on GitHub.</a>
                </p>
            </div>
        }
    },
    {
        projectName: `browserTranscribe`,
        expandedName: `Browser Transcribe`,
        liveLink: `http://www.josephweidinger.com/browserTranscribe`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1484871388/browserTranscribe_yrcler.png`,
        date: `December 2016`,
        tags: ['music'],
        getModalContent: function () {
            return <div>
                <p>
                    browserTranscribe is a webapp that allows you to easily manipulate a sound file for the purposes
                    of transcribing its contents: music, speech or otherwise. I wanted to build
                    something like the very
                    professional <a href="https://www.seventhstring.com/xscribe/overview.html">'Transcribe!'</a> except
                    with just the basic functionality for the web browser. You can slow it down while
                    preserving the pitch, start and stop on a dime, loop, and
                    more.
                </p>
                <p>
                    <a href={this.liveLink}>Here is a link</a> to the live website. The
                    project is hosted <a href="//github.com/jsphweid/browserTranscribe">on
                    GitHub.</a>
                </p>
            </div>
        }
    },
    {
        projectName: `compareInflections`,
        expandedName: `Compare Inflections`,
        liveLink: `https://www.josephweidinger.com/compareInflections`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1517455449/compareInflections_vbtmxo.png`,
        date: `October - November 2016`,
        tags: ['audio'],
        getModalContent: function () {
            return <div>
                <p>
                    Someone was trying to teach me how to correctly inflect a few words in Chinese
                    once and I was having trouble getting it just right. So I figured I could write
                    an app to help me visualize the difference between what I was doing and what they
                    were doing.
                </p>
                <p>
                    I made an MVP and it is <a href={this.liveLink}>here</a> but my understanding of pitch
                    detection was primitive when I wrote this and hence it isn't too effective (unless your
                    voice sounds like a sine wave...). Source Code is
                    available <a href="https://github.com/jsphweid/compareInflections">here.</a>
                </p>
            </div>
        }
    },
    {
        projectName: `playEquation`,
        expandedName: `Play Equation`,
        liveLink: `http://www.josephweidinger.com/playEquation`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1485141822/Screen_Shot_2017-01-22_at_9.20.04_PM_uppjjg.png`,
        date: `Fall 2016`,
        tags: ['music'],
        getModalContent: function () {
            return <div>
                <p>
                    I was learning about audio synthesis and learned how all periodic sounds can
                    very accurately be described as some mathematical equation. I couldn't find a
                    tool online that would allow me to "see / hear" an equation so I built
                    one. It's a basic javascript / jQuery App using the Web Audio API to generate
                    a 2 second sample area from an equation. I also used a few other libraries to
                    display the equation elegantly and accurately display the graph.
                </p>
                <p>
                    The link to the live website is <a href={this.liveLink}>HERE.</a> And
                    the source code: <a href="//github.com/jsphweid/playEquation">GitHub.</a>
                </p>
            </div>
        }
    },
    {
        projectName: `VAIL`,
        expandedName: `Visual and Intuitive Learning`,
        liveLink: `https://www.josephweidinger.com/VAIL`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1485141863/Screen_Shot_2017-01-22_at_9.19.11_PM_zpaggn.png`,
        date: `November 2016`,
        tags: ['audio'],
        getModalContent: function () {
            return <div>
                <p>
                    Visual And Intuitive Learning (VAIL) is a set of planned sketches that utilize the P5js
                    drawing library to provide an interactive series of slides on any topic, in an effort to
                    understand it far quicker. Somewhere in between a one-on-one with a professor
                    and a YouTube video is the style I aim for.
                </p>
                <p>
                    The site <a href={this.liveLink}>is
                    here</a> and it is hosted <a href="//github.com/jsphweid/VAIL">on Github Here.</a>
                </p>
            </div>
        }
    },
    {
        projectName: `justInTune`,
        expandedName: `Just In Tune`,
        liveLink: `http://www.josephweidinger.com/justInTune`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1484871108/justIntonation_nlcdwk.png`,
        date: `Spring 2015, then Fall 2016`,
        tags: ['audio'],
        getModalContent: function () {
            return <div>
                <p>
                    A webapp that takes inputed musical notes and algorithmically finds the
                    simplest ratio between the notes for an on-the-fly Just Intonation
                    system. Originally written in SuperCollider (SCLang), I rewrote it
                    javascript / jquery with the help of some web audio / midi libraries.
                </p>
                <p>
                    The project is located <a href={this.liveLink}>HERE</a> and <a href="https://github.com/jsphweid/justInTune">on
                    Github.</a>
                </p>
            </div>
        }
    },
    {
        projectName: `bookletMacro`,
        expandedName: `Booklet Macro`,
        liveLink: `http://github.com/jsphweid/bookletMacro`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1484871103/bookletMacro_wjaqo2.jpg`,
        date: `October 2015`,
        tags: ['audio'],
        getModalContent: function () {
            return <div>
                <p>
                    bookletMacro is a cross-platform wrapper that simplifies and automates
                    certain commands in Michael Schierl's jPDFTweak. The whole purpose is to
                    transform a group of music part PDFs into two highly organized PDF files
                    that print the fronts and backs of the booklets. It automates the
                    pagination process and makes booklet printing extremely easy and
                    quick.
                </p>
                <p>
                    Here is a <a href="//youtube.com/watch?v=Jiq5TR0RN-A">
                    youtube demonstration.</a> And the project is hosted
                    on <a href={this.liveLink}>Github.</a>
                </p>
            </div>
        }
    },
    {
        projectName: `processingSketches`,
        expandedName: `Processing Sketches`,
        liveLink: `http://www.youtube.com/watch?v=f7jjcGldl_o`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1484871107/processing_bqeqo8.jpg`,
        date: `August - October 2015`,
        tags: ['audio'],
        getModalContent: function () {
            return <div>
                <p>
                    Processing is built on top of Java. It uses PApplet and a few shortcuts to
                    easily draw things with code. Of course, things can quickly get complicated and
                    fun!
                </p>
                <p>
                    I've created many "sketches" but my biggest project so far was creating
                    visuals for a 10-minute music set for India Nite 2015. I hooked my Macbook Pro up
                    to MU Jesse Hall's giant projector and a friend triggered different sketches while
                    we performed some tunes. The sketches create visual art that is influenced primarily
                    by incoming audio information (amplitude, FFT analysis) and even webcam data.
                </p>
                <p>
                    A video of the performance can be found on <a href={this.liveLink}>Youtube.</a>
                </p>
            </div>
        }
    },
    {
        projectName: `hotkeyGrid`,
        expandedName: `Hotkey Grid`,
        liveLink: `http://github.com/jsphweid/hotkey-grid`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1484871108/hotkey-grid_eru7ne.png`,
        date: `June - August 2015`,
        tags: [],
        getModalContent: function () {
            return <div>
                <p>
                    Hotkey Grid is an abstraction and cross-platform version of the Finale Hotkey Grid. The
                    idea behind this project is that instead of learning special hotkeys for every program,
                    you can have a visual intermediary program that maps hotkeys / shortcuts to the host
                    program.
                </p>
                <p>
                    My brother, <a href="//clayweidinger.com">Clay Weidinger</a>, wrote most
                    of the code for this using Electron -- framework that allows you to write desktop
                    applications with web languages (html, css, javascript, etc.). The Grid is easily
                    configurable with the GUI. Currently, this requires some setup and only works on OSX. This
                    project is hosted on <a href={this.liveLink}>Github.</a>
                </p>
            </div>
        }
    },
    {
        projectName: `finaleHotkeyGrid`,
        expandedName: `Finale Hotkey Grid`,
        liveLink: `http://github.com/jsphweid/Finale-Hotkey-Grid`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1484871107/finale-hotkey-grid_sznsni.png`,
        date: `December 2014 - April 2015`,
        tags: ['music'],
        getModalContent: function () {
            return <div>
                <p>
                    Finale Hotkey Grid was my first "grid" hotkey prototype. It's windows only and is
                    written completely in AutoHotkey. It only works in conjunction with the music notation
                    application that I use, Finale.
                </p>
                <p>
                    More information (along with a demo and the
                    source code) can be found on <a href={this.liveLink}>Github.</a>
                </p>
            </div>
        }
    },
    {
        projectName: `feedCalc`,
        expandedName: `Feed Calculator`,
        liveLink: `https://www.josephweidinger.com/feedCalc/`,
        imgUrl: `https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1484871105/feedCalc_effijp.png`,
        date: `October 2014`,
        tags: [],
        getModalContent: function () {
            return <div>
                <p>
                    For a brief moment in my life, I dreamed of being a farmer with a bunch of chickens...
                    So I bought a couple hundred layers and broilers and began experimenting with
                    custom feed rations from the local mixer. Chickens have certain minimal protein and
                    calcium requirements, among other things. Knowing the price and protein content of these seeds, I
                    created a tool that generates new combinations of feed that satisfy the minimal
                    requirements for the chickens and satisfies a price point also. This was one of my
                    very first creations with code and I think my brother for helping me a lot on this.
                </p>
                <p>
                    The webapp can be found <a href={this.liveLink}>HERE.</a>
                </p>
            </div>
        }
    }

]
