import React from "react";

import { ProjectTempateType, ImageSizeType, IconObjType } from "./types";
import ScheduleMakerLaunchButton from "./scheduleMakerLaunchButton";

export const smoothScroll: any = { duration: 200, smooth: true, offset: -122 };
export const instantScroll: any = { duration: 0, smooth: false };

export const PAPIO_LINK = "https://papio.io";

export const genericImage =
  "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1517456998/generic-project_h2za5h.png";

export const icons: IconObjType = {
  facebook: { class: "facebook", unicode: "&#xf09a;" },
  github: { class: "github-circled", unicode: "&#xf09b;" },
  youtube: { class: "youtube", unicode: "&#xf167;" },
  soundcloud: { class: "soundcloud", unicode: "&#xf348;" }
};

export const projectSmallPicSize: ImageSizeType = {
  width: 296,
  height: 216
};

export const projectLargePicSize: ImageSizeType = {
  width: 900,
  height: 650
};

export const skills: any = {
  Languages: [
    "Typescript / Javascript",
    "Python",
    "HTML / CSS / SCSS",
    "Java / Groovy",
    "C / C++ / Go",
    "Bash / Lua / AutoHotkey"
  ],
  "Frameworks / Libraries": [
    "React / Angular 2",
    "Redux / MobX",
    "Gatsby / React-Static",
    "libsndfile / boost"
  ],
  Tools: [
    "Git",
    "VSCode / IntelliJ",
    "Terraform / Serverless",
    "Webpack / Grunt",
    "Mac / Windows / Linux"
  ],
  Devops: ["AWS w/ CDK / Terraform", "Nginx", "Jenkins", "Digital Ocean"],
  Databases: ["DynamoDB", "Redis", "MySQL / Oracle", "PostgresSQL", "Firebase"],
  "Audio/Visual Tools": [
    "Web Audio API",
    "Web Speech API",
    "Processing / P5js",
    "SuperCollider",
    "Flockingjs",
    "WaveSurfer",
    "Cubase Pro"
  ]
};

export const projects: ProjectTempateType[] = [
  {
    projectName: "NotRSS",
    expandedName: "NotRSS",
    liveLink: "https://github.com/jsphweid/notrss",
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1616975208/notrss_i0stbq.jpg",
    date: "March 2021",
    tags: [],
    getModalContent: function() {
      return (
        <div>
          <p>
            I'm interested in the progression of the{" "}
            <a href="https://en.wikipedia.org/wiki/Music_information_retrieval">
              Music Information Retrieval
            </a>{" "}
            field. Following the field involves keeping tabs on a number of
            websites that only occasionally post new information. The problem is
            that it's tedious to check these websites manually to see if
            anything new exists for a number of reasons. I figured it'd be much
            better to have the process automated such that I could simply get an
            email of the diff soon after the site was updated somehow.
          </p>
          <p>
            I found a nice paid service that allows you to do just that, but the
            price was too much for what is a simple problem. So I architected my
            own serverless solution that runs for pennies in AWS.
          </p>
          <p>
            It works by running a lambda regularly that scans a sparse dynamodb
            index for a list of sites to compare against previous versions.
            Using a queue and another lambda, a headless browser navigates to
            the site and takes a snapshot of the site. If there is a difference
            detected, it records the new snapshot and sends you (and anyone else
            who is subscribed) an email with a picture of the diff. A simple
            GraphQL API is also provided to help manage the database.
          </p>
          <p>
            The stack was written in CDK for Typescript and you can check it all
            out <a href={this.liveLink}>here!</a>
          </p>
        </div>
      );
    }
  },
  {
    projectName: "units",
    expandedName: '"Units" Library for GraphQL',
    liveLink:
      "https://medium.com/@jsphweid/introducing-unit-types-in-graphql-344974213e6",
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1583079729/Screen_Shot_2020-03-01_at_10.22.03_AM_sjhlem.png",
    date: "May 2019 - October 2019",
    tags: [],
    getModalContent: function() {
      return (
        <div>
          <p>
            For this one, I'd just read the{" "}
            <a href={this.liveLink}>Medium article.</a>
          </p>
        </div>
      );
    }
  },
  {
    projectName: "best soundboard",
    expandedName: "Best Soundboard",
    liveLink: "https://bestsoundboard.com",
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1555955576/Bildschirmfoto_2019-04-22_um_12.49.10_tkbgdc.png",
    date: "March 2019",
    tags: [],
    getModalContent: function() {
      return (
        <div>
          <p>
            I started an experimental podcast with a friend of mine and we
            thought it would be interesting to incorporate canned sounds into
            the mix in real time. I tried some other soundboard webapps but was
            not satisfied with any of them so I decided to write my own.
          </p>
          <p>
            The novelty of this app is the ability to easily create a board full
            of sound buttons, move them around and execute them intuitively, and
            share instantly. All in all, I'm happy with the way it turned out!
          </p>
          <p>
            It's a pretty straight forward modern webapp created statically with
            Gatsby. The sharing functionality was written with DynamoDB and API
            Gateway via the Serverless framework. Try it out{" "}
            <a href={this.liveLink}>here!</a>
          </p>
        </div>
      );
    }
  },
  {
    projectName: "papio",
    expandedName: "PAPIO",
    liveLink: PAPIO_LINK,
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1555984757/Bildschirmfoto_2019-04-22_um_20.58.36_inwrrw.png",
    date: "November 2018 - March 2019",
    tags: [],
    getModalContent: function() {
      return (
        <div>
          <p>
            PAPIO is a site I envisioned and created as a means to share my
            interviews. Early on I simply uploaded them to SoundCloud and called
            it a day but I wanted a more immersive experience. In particular, I
            wanted a way to search all of my interviews effortlessly and
            quickly.
          </p>
          <p>
            To conquer that feat, I built a cloud pipeline to prep and
            transcribe raw audio files. These transcriptions are rendered
            statically via the webapp. This makes it very easy for search
            engines to make sense of what initially was only an audio
            experience.
          </p>
          <p>
            I also used Algolia Search to index all the content in those
            interviews so that one could easily search for random words / topics
            and jump right into a specific part of a relevant interview.
          </p>
          <p>
            Check it out <a href={this.liveLink}>here!</a>
          </p>
        </div>
      );
    }
  },
  {
    projectName: "infinite meme",
    expandedName: "The Infinite Meme",
    liveLink: "https://infinitememe.com",
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1540857186/the-infinite-meme_oksvka.png",
    date: "October 2018",
    tags: [],
    getModalContent: function() {
      return (
        <div>
          <p>
            In 2013, I spent a lot of time on the Venice Beach in LA. I remember
            once watching a bird fly above my head and in the distance hearing a
            plane. I liked the contradiction of hearing a plane and seeing the
            bird. And thought it would make a good experimental film.
          </p>
          <p>But I'm not an experimental film maker, I'm a programmer.</p>
          <p>
            "The Infinite Meme" is a project that automates the process of
            making derivative videos / memes: where the template is a video and
            the audio is your own. You can save / upload your creations and
            share them with others.
          </p>
          <p>
            It uses GatsbyJS for static rendering, AppSync for the API, S3 for
            audio storage, MobX for state management, and React for interactive
            UI components. See it live in action{" "}
            <a href={this.liveLink}>here!</a>
          </p>
        </div>
      );
    }
  },
  {
    projectName: "gosamosa",
    expandedName: "go:samosa",
    liveLink: "https://www.gosamosa.com",
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1534472748/computers-small_iv4tyg.png",
    date: "August 2018",
    tags: [],
    getModalContent: function() {
      return (
        <div>
          <p>
            go:samosa was an app that I was inspired to build when watching pro
            Fortnite players stream scrim matches.
          </p>
          <p>
            Lobbies in Fortnite are quite random and often a bunch of people try
            to click "start" at the exact same moment to increase their odds of
            getting in the same lobby. Usually this is done by one human
            counting down to 0 on a discord channel but I figured I could
            automate the process and deliver a greater degree of accuracy. It
            also automates the process of informing everyone where each person
            landed up.
          </p>
          <p>
            I wanted to build this without servers so I used AWS AppSync to
            transmit real time data to each connected client via subscriptions.
            When a countdown is started, each person in the "lobby" receives the
            time and synchronizes with a common clock to provide a very accurate
            experience for everyone regardless of their device, latency, or
            browser.
          </p>
          <p>
            As far as the name is concerned, I was coming up with an acronym and
            arrived on "SAMOSA" -- Simple Accurate MOment Synchronization App --
            which is also the name of one of my favorite Indian foods. It's also
            a food that one of my Indian friends (the same friend whose wedding
            I attended in India just the year before) and I attempted to make a
            few years ago (we were successful but it took 5 hours). I renamed it
            "go:samosa" when I saw an opening for the domain gosamosa.com and
            went ahead and based the visual look off the Indian flag.
          </p>
          <p>
            You can use it <a href={this.liveLink}>here.</a>
          </p>
        </div>
      );
    }
  },
  {
    projectName: "reimagine",
    expandedName: "reimagine",
    liveLink: "https://www.josephweidinger.com/reimagine",
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1533437829/reimagine_aeolyh.png",
    date: "March 2018 - May 2018",
    tags: ["music"],
    getModalContent: function() {
      return (
        <div>
          <p>
            This is somewhat of a grand ambitious project still in progress but
            some of the foundations are there... The premise behind this is to
            create an app automates the process of music performance and
            composition.
          </p>
          <p>
            The first stage of this idea is to create a system that breaks down
            midi files into segments and stores them. The app randomly assigns a
            visitor to the site a segment to perform into a microphone. If the
            user does that and is happy with their performance, they can upload
            it. When that recording of a segment is uploaded, it is stored and
            cataloged until all the segments of the piece have been performed,
            recorded, and uploaded. Then all of those wavs can be strategically
            synthesized to form an interesting interpretation of the original
            midi file.{" "}
            <a href="https://soundcloud.com/joseph_weidinger/reimagine-hello-world-bach-invention-1-cover">
              Here is the very first thing produced by this process.
            </a>
          </p>
          <p>
            Lots of technologies are used in this app. I developed several
            libraries. One is a synthesizer written in golang and served up by
            AWS Lambda. Two public libraries:{" "}
            <a href="https://github.com/jsphweid/react-midi-visualizer">
              React Midi Visualizer
            </a>{" "}
            and{" "}
            <a href="https://github.com/jsphweid/react-conductor">
              React Conductor
            </a>
            . These AWS services were used: DynamoDB, AppSync, RDS, S3, Lambda,
            and Cognito.
          </p>
        </div>
      );
    }
  },
  {
    projectName: "josephweidinger.com",
    expandedName: "josephweidinger.com",
    liveLink: "https://www.josephweidinger.com/",
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1517527503/Screen_Shot_2018-02-01_at_5.23.55_PM_tzcnqa.png",
    date: "February 2016, January 2018",
    tags: [],
    getModalContent: function() {
      return (
        <div>
          <p>
            Pardon the self-referential nature of this project, but I consider
            this site a project in and of itself. The original site was created
            a few years ago. It was mostly copied from some{" "}
            <a href="https://blackrockdigital.github.io/startbootstrap-freelancer/">
              Bootstrap template
            </a>{" "}
            and hosted on a Digital Ocean box. I had <u>almost</u> no idea what
            I was doing and my older brother Clay had to help me with many
            things.
          </p>
          <p>
            In Jan. 2018, armed with much more knowledge about building frontend
            sites, I rebuilt the entire thing from scratch with React while
            keeping the basic look. As this site is just static content, I used
            React-Static to pre-render the html so that the site was more
            performant. Finally, I migrated all of my site over to AWS. All of
            my projects use the aws-cli to dump their artifacts into a bucket.
            Cloudfront uses this bucket to cache files around the globe and
            serve them gzipped for{" "}
            <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fjosephweidinger.com&tab=mobile">
              incredibly fast delivery.
            </a>
          </p>
        </div>
      );
    }
  },
  {
    projectName: "blindfoldChessTrainer",
    expandedName: "Blindfold Chess Trainer",
    liveLink: "https://www.josephweidinger.com/blindfoldChessTrainer",
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1518147976/Screen_Shot_2018-02-08_at_7.58.35_PM_pyofsk.png",
    date: "January - Februrary 2018",
    tags: [],
    getModalContent: function() {
      return (
        <div>
          <p>
            Over the years I've read stories from people I admire with
            exceptional visual / mental abilities. Some of these people mention
            that one of their parents taught them how to play mental / blindfold
            chess when they were children. A bit saddened that I hadn't had the
            same opportunity, I decided to make it for myself. I stiched
            together a few libraries (chess.js, react-chessboard) and integrated
            it with my own logic and the Web Speech API.
          </p>
          <p>
            It's completely client-side built with React / Typescript. You can{" "}
            <a href={this.liveLink}>try it here!</a> The source code is located{" "}
            <a href="https://github.com/jsphweid/blindfold-chess-trainer">
              here.
            </a>
          </p>
        </div>
      );
    }
  },
  {
    projectName: "pianoLearningStream",
    expandedName: "Piano Learning Stream",
    liveLink: "https://github.com/jsphweid/piano-learning-stream",
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1518148183/Screen_Shot_2018-02-08_at_9.48.46_PM_gwxj1e.png",
    date: "November - December 2017",
    tags: ["music"],
    getModalContent: function() {
      return (
        <div>
          <p>
            The goal of this project was to learn about using Convolutional
            Neural Networks with the ambition of getting a neural net to be able
            to transcribe raw piano audio. To be honest, at this time it isn't
            very effective because the neural net is not well formed. I do
            believe, however, that I've discovered some technical insight: a
            technique for formulating and preparing data for the CNN's inputs
            and labels using a hand-rolled python module written in C / C++.
          </p>
          <p>
            This module uses specially prepared midi files to assemble raw audio
            (with the help of a free piano sample library). This raw audio is
            transformed into inputs (FFT spectrum) and labels (calculated
            amplitude scores) and fed into the neural network. All this work is
            done on-the-fly and in-memory to prevent the need for constantly
            hitting the disk.
          </p>
          <p>
            Source code for this ongoing research is{" "}
            <a href={this.liveLink}>here.</a>
          </p>
        </div>
      );
    }
  },
  {
    projectName: "whichString",
    expandedName: "Which String",
    liveLink: "https://www.github.com/jsphweid/whichString",
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1517525918/Screen_Shot_2018-02-01_at_4.54.22_PM_nrxo2q.png",
    date: "May 2017 - Dec 2017",
    tags: ["music"],
    getModalContent: function() {
      return (
        <div>
          <p>
            whichString is an app that uses a Neural Network to listen to a user
            playing a violin in real-time and predict the exact spot on the neck
            being depressed. It uses a fairly basic model built with{" "}
            <a href="https://www.tensorflow.org/">Google's TensorFlow.</a> This
            model is exported and used client-side{" "}
            <a href="https://js.tensorflow.org/">by deeplearnjs.</a>
            The client code is written in React / Typescript.
          </p>
          <p>
            <a href={this.liveLink}>Here</a> is the source code. At this time, a
            live version does not exist as I have not devised a way to upload
            the model efficiently (it's rather huge). You can download the
            source code and build the model yourself fairly easily. More info on
            that link.
          </p>
        </div>
      );
    }
  },
  {
    projectName: "react-fft-flipbook",
    expandedName: "React FFT Flipbook",
    liveLink: "https://www.josephweidinger.com/react-fft-flipbook",
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1517457470/Screen_Shot_2018-01-31_at_9.56.43_PM_kst1d5.png",
    date: "October, December 2017",
    tags: ["music"],
    getModalContent: function() {
      return (
        <div>
          <p>
            fftFlipBook is an app where one can load a wav file into their
            browser. It is similar to other audio players in that you can
            visualize the frequency spectrum as it plays, but this has the added
            bonus of being able to stop and loop on whichever buffer you choose
            and view the spectrum as it is there. This alone isn't that novel,
            but one day I hope to create the ability to slow down the music and
            the visual spectrum to an infinite degree so that the music is
            capable of being suspended at any point "in mid-air". To do this
            without chopping / stitching the wavefrom repeatedly will require
            either clever techniques involving neural networks or some
            sophisticated insight in Digital Signal Processing, but I believe it
            can be done.
          </p>
          <p>
            This project is a package{" "}
            <a href="https://www.npmjs.com/package/react-fft-flipbook">
              in the
            </a>{" "}
            npm registry. A live demo can be found{" "}
            <a href="https://josephweidinger.com/react-fft-flipbook/">here.</a>{" "}
            And the source code is located{" "}
            <a href="https://github.com/jsphweid/react-fft-flipbook">here.</a>
          </p>
        </div>
      );
    }
  },
  {
    projectName: "fiberMap",
    expandedName: "Fiber Map",
    liveLink: "",
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1518184505/Screen_Shot_2018-02-09_at_7.54.19_AM_mwaiii.png",
    date: "July - August 2017",
    tags: [],
    getModalContent: function() {
      return (
        <div>
          <p>
            fiberMap was a project I worked on with my co-worker, Brian
            Fitzgerald. I was looking for houses in Columbia, MO with fiber
            internet and found it tedious to check several ISP's for fiber
            coverage at each location. We devised an app that would scrape the
            local ISP's websites, store relevant plan/price information in a
            database, and present it in a graphical way.
          </p>
          <p>
            We did manage to scrape info on 3 companies for just about every
            address in Columbia. It worked like this: we wrote algorithms to
            process postal routes from Melissa Data into real addresses. We spun
            up headless clients to hit Google APIs to validate the addresses and
            extract lat/lng information. For each of these addresses, we spun up
            more headless clients and extracted information from those ISPs. I
            set up an automated job processing system in node with Kue LINK and
            ran it on a digital ocean ubuntu instance for weeks to gather all
            the data.
          </p>
          <p>
            At this time the frontend has not been fully completed and the
            source code is not open.
          </p>
        </div>
      );
    }
  },
  {
    projectName: "scheduleMaker",
    expandedName: "Schedule Maker",
    liveLink: "https://www.github.com/jsphweid/scheduleMakerSpring",
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1486747894/Screen_Shot_2017-02-10_at_11.30.21_AM_d8gyep.png",
    date: "January-February 2017",
    tags: [],
    getModalContent: function() {
      return (
        <div>
          <p>
            This webapp is built with Spring MVC, Spring Security, MySQL, React,
            and served up by Tomcat on my personal server. The goal of this app
            was to prove I could build an app in those technologies and get a
            job at Carfax (the goal was reached). Prior to working at Carfax, I
            worked at several food joints over the years. Based on
            inefficiencies I saw, I decided to see if this was a problem that
            could be solved with a webapp. This app gives real-time
            data-oriented feedback with regards to their scheduling decisions.
          </p>
          <p>
            The source code can be found here:{" "}
            <a href={this.liveLink}>on GitHub.</a> I wrote an AWS Lambda to spin
            up an instance with Tomcat / Mysql. Be my guest... try it out!
          </p>
          <ScheduleMakerLaunchButton />
        </div>
      );
    }
  },
  {
    projectName: "AintIFunny",
    expandedName: "Ain't I Funny",
    liveLink: "https://www.josephweidinger.com/AintIFunny",
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1485187194/Screen_Shot_2017-01-23_at_9.59.07_AM_p2xz4r.png",
    date: "January 2017",
    tags: [],
    getModalContent: function() {
      return (
        <div>
          <p>
            "Ain't I funny" is an ambitious app that seeks to generate jokes
            algorithmically and allow people to vote on which ones are the best.
            The MVP was to get one formula to work and I stopped after I
            achieved that.
          </p>
          <p>
            But you can still check it out <a href={this.liveLink}>HERE.</a> And
            on <a href="//github.com/jsphweid/AintIFunny">GitHub</a>
          </p>
        </div>
      );
    }
  },
  {
    projectName: "aMuseMe",
    expandedName: "A-'Muse' Me",
    liveLink: "https://josephweidinger.com/aMuseMe",
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1484884631/Screen_Shot_2017-01-19_at_9.55.37_PM_y0szwe.png",
    date: "January 2017",
    tags: [],
    getModalContent: function() {
      return (
        <div>
          <p>
            This webapp is built with TypeScript, Angular 2, and Firebase. It's
            aim is to stimulate your creativity or help 'flesh out' an idea by
            asking you lots of questions systemmatically. At least that's the
            idea... You can also submit your own questions and those questions
            can be voted on by other users as well! Those high ranking questions
            make their way in to the line-up of questions for future 'sessions.'
          </p>
          <p>
            The live site <a href={this.liveLink}>is hosted here</a> and the
            source can be{" "}
            <a href="//github.com/jsphweid/aMuseMe">found on GitHub.</a>
          </p>
        </div>
      );
    }
  },
  {
    projectName: "browserTranscribe",
    expandedName: "Browser Transcribe",
    liveLink: "http://www.browsertranscribe.com",
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1484871388/browserTranscribe_yrcler.png",
    date: "December 2016",
    tags: ["music"],
    getModalContent: function() {
      return (
        <div>
          <p>
            browserTranscribe is a webapp that allows you to easily manipulate a
            sound file for the purposes of transcribing its contents: music,
            speech or otherwise. I wanted to build something like the very
            professional{" "}
            <a href="https://www.seventhstring.com/xscribe/overview.html">
              'Transcribe!'
            </a>{" "}
            except with just the basic functionality for the web browser. You
            can slow it down while preserving the pitch, start and stop on a
            dime, loop, and more.
          </p>
          <p>
            <a href={this.liveLink}>Here is a link</a> to the live website. The
            project is hosted{" "}
            <a href="//github.com/jsphweid/browserTranscribe">on GitHub.</a>
          </p>
        </div>
      );
    }
  },
  {
    projectName: "compareInflections",
    expandedName: "Compare Inflections",
    liveLink: "https://www.josephweidinger.com/compareInflections",
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1517455449/compareInflections_vbtmxo.png",
    date: "October - November 2016",
    tags: ["audio"],
    getModalContent: function() {
      return (
        <div>
          <p>
            Someone was trying to teach me how to correctly inflect a few words
            in Chinese once and I was having trouble getting it just right. So I
            figured I could write an app to help me visualize the difference
            between what I was doing and what they were doing.
          </p>
          <p>
            I made an MVP and it is <a href={this.liveLink}>here</a> but my
            understanding of pitch detection was primitive when I wrote this and
            hence it isn't too effective (unless your voice sounds like a sine
            wave...). Source Code is available{" "}
            <a href="https://github.com/jsphweid/compareInflections">here.</a>
          </p>
        </div>
      );
    }
  },
  {
    projectName: "playEquation",
    expandedName: "Play Equation",
    liveLink: "https://www.josephweidinger.com/playEquation",
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1485141822/Screen_Shot_2017-01-22_at_9.20.04_PM_uppjjg.png",
    date: "Fall 2016",
    tags: ["music"],
    getModalContent: function() {
      return (
        <div>
          <p>
            I was learning about audio synthesis and learned how all periodic
            sounds can very accurately be described as some mathematical
            equation. I couldn't find a tool online that would allow me to "see
            / hear" an equation so I built one. It's a basic javascript / jQuery
            App using the Web Audio API to generate a 2 second sample area from
            an equation. I also used a few other libraries to display the
            equation elegantly and accurately display the graph.
          </p>
          <p>
            The link to the live website is <a href={this.liveLink}>HERE.</a>{" "}
            And the source code:{" "}
            <a href="//github.com/jsphweid/playEquation">GitHub.</a>
          </p>
        </div>
      );
    }
  },
  {
    projectName: "VAIL",
    expandedName: "Visual and Intuitive Learning",
    liveLink: "https://www.josephweidinger.com/VAIL",
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1485141863/Screen_Shot_2017-01-22_at_9.19.11_PM_zpaggn.png",
    date: "November 2016",
    tags: ["audio"],
    getModalContent: function() {
      return (
        <div>
          <p>
            Visual And Intuitive Learning (VAIL) is a set of planned sketches
            that utilize the P5js drawing library to provide an interactive
            series of slides on any topic, in an effort to understand it far
            quicker. Somewhere in between a one-on-one with a professor and a
            YouTube video is the style I aim for.
          </p>
          <p>
            The site <a href={this.liveLink}>is here</a> and it is hosted{" "}
            <a href="//github.com/jsphweid/VAIL">on Github Here.</a>
          </p>
        </div>
      );
    }
  },
  {
    projectName: "justInTune",
    expandedName: "Just In Tune",
    liveLink: "https://www.josephweidinger.com/justInTune",
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1484871108/justIntonation_nlcdwk.png",
    date: "Spring 2015, then Fall 2016",
    tags: ["audio"],
    getModalContent: function() {
      return (
        <div>
          <p>
            A webapp that takes inputed musical notes and algorithmically finds
            the simplest ratio between the notes for an on-the-fly Just
            Intonation system. Originally written in SuperCollider (SCLang), I
            rewrote it javascript / jquery with the help of some web audio /
            midi libraries.
          </p>
          <p>
            The project is located <a href={this.liveLink}>HERE</a> and{" "}
            <a href="https://github.com/jsphweid/justInTune">on Github.</a>
          </p>
        </div>
      );
    }
  },
  {
    projectName: "bookletMacro",
    expandedName: "Booklet Macro",
    liveLink: "https://github.com/jsphweid/bookletMacro",
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1484871103/bookletMacro_wjaqo2.jpg",
    date: "October 2015",
    tags: ["audio"],
    getModalContent: function() {
      return (
        <div>
          <p>
            bookletMacro is a cross-platform wrapper that simplifies and
            automates certain commands in Michael Schierl's jPDFTweak. The whole
            purpose is to transform a group of music part PDFs into two highly
            organized PDF files that print the fronts and backs of the booklets.
            It automates the pagination process and makes booklet printing
            extremely easy and quick.
          </p>
          <p>
            Here is a{" "}
            <a href="//youtube.com/watch?v=Jiq5TR0RN-A">
              youtube demonstration.
            </a>{" "}
            And the project is hosted on <a href={this.liveLink}>Github.</a>
          </p>
        </div>
      );
    }
  },
  {
    projectName: "processingSketches",
    expandedName: "Processing Sketches",
    liveLink: "https://www.youtube.com/watch?v=f7jjcGldl_o",
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1484871107/processing_bqeqo8.jpg",
    date: "August - October 2015",
    tags: ["audio"],
    getModalContent: function() {
      return (
        <div>
          <p>
            Processing is built on top of Java. It uses PApplet and a few
            shortcuts to easily draw things with code. Of course, things can
            quickly get complicated and fun!
          </p>
          <p>
            I've created many "sketches" but my biggest project so far was
            creating visuals for a 10-minute music set for India Nite 2015. I
            hooked my Macbook Pro up to MU Jesse Hall's giant projector and a
            friend triggered different sketches while we performed some tunes.
            The sketches create visual art that is influenced primarily by
            incoming audio information (amplitude, FFT analysis) and even webcam
            data.
          </p>
          <p>
            A video of the performance can be found on{" "}
            <a href={this.liveLink}>Youtube.</a>
          </p>
        </div>
      );
    }
  },
  {
    projectName: "hotkeyGrid",
    expandedName: "Hotkey Grid",
    liveLink: "https://github.com/jsphweid/hotkey-grid",
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1484871108/hotkey-grid_eru7ne.png",
    date: "June - August 2015",
    tags: [],
    getModalContent: function() {
      return (
        <div>
          <p>
            Hotkey Grid is an abstraction and cross-platform version of the
            Finale Hotkey Grid. The idea behind this project is that instead of
            learning special hotkeys for every program, you can have a visual
            intermediary program that maps hotkeys / shortcuts to the host
            program.
          </p>
          <p>
            My brother, <a href="//clayweidinger.com">Clay Weidinger</a>, wrote
            most of the code for this using Electron -- framework that allows
            you to write desktop applications with web languages (html, css,
            javascript, etc.). The Grid is easily configurable with the GUI.
            Currently, this requires some setup and only works on OSX. This
            project is hosted on <a href={this.liveLink}>Github.</a>
          </p>
        </div>
      );
    }
  },
  {
    projectName: "finaleHotkeyGrid",
    expandedName: "Finale Hotkey Grid",
    liveLink: "https://github.com/jsphweid/Finale-Hotkey-Grid",
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1484871107/finale-hotkey-grid_sznsni.png",
    date: "December 2014 - April 2015",
    tags: ["music"],
    getModalContent: function() {
      return (
        <div>
          <p>
            Finale Hotkey Grid was my first "grid" hotkey prototype. It's
            windows only and is written completely in AutoHotkey. It only works
            in conjunction with the music notation application that I use,
            Finale.
          </p>
          <p>
            More information (along with a demo and the source code) can be
            found on <a href={this.liveLink}>Github.</a>
          </p>
        </div>
      );
    }
  },
  {
    projectName: "feedCalc",
    expandedName: "Feed Calculator",
    liveLink: "https://www.josephweidinger.com/feedCalc/",
    imgUrl:
      "https://res.cloudinary.com/dx6f6g5cv/image/upload/---cloudinaryStyleString---/v1484871105/feedCalc_effijp.png",
    date: "October 2014",
    tags: [],
    getModalContent: function() {
      return (
        <div>
          <p>
            For a brief moment in my life, I dreamed of being a farmer with a
            bunch of chickens... So I bought a couple hundred layers and
            broilers and began experimenting with custom feed rations from the
            local mixer. Chickens have certain minimal protein and calcium
            requirements, among other things. Knowing the price and protein
            content of these seeds, I created a tool that generates new
            combinations of feed that satisfy the minimal requirements for the
            chickens and satisfies a price point also. This was one of my very
            first creations with code and I thank{" "}
            <a href="http://clayweidinger.com">my brother Clay</a> for helping
            me a lot on this.
          </p>
          <p>
            The webapp can be found <a href={this.liveLink}>HERE.</a>
          </p>
          <p>
            May 2021 Update: I talked to some people who live around where I
            used to live all those years ago and they mentioned they had still
            been using the custom ration I created with this app... and the
            chickens love it!
          </p>
        </div>
      );
    }
  }
];
