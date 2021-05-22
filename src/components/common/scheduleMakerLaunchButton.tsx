import React from "react";
import axios from "axios";

const maxAttempts: number = 50;
const millisecondsInBetweenAttempts: number = 3000;
const additionalWait: number = 15000;

enum LaunchButtonState {
  Initial,
  Live,
  Thinking,
  Pending,
  Error
}

const { Initial, Live, Thinking, Pending, Error } = LaunchButtonState;

export interface ScheduleMakerLaunchButtonState {
  buttonState: LaunchButtonState;
  liveUrl: string;
  attempts: number;
}

export default class ScheduleMakerLaunchButton extends React.Component<
  any,
  ScheduleMakerLaunchButtonState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      buttonState: Initial,
      liveUrl: "",
      attempts: 0
    };
  }

  makeBootRequest = () => {
    const { attempts, buttonState } = this.state;
    if (buttonState === Error || buttonState === Live) return;

    return axios
      .get(
        "https://2911tgpt68.execute-api.us-east-1.amazonaws.com/prod/boot-tomcat-apps"
      )
      .then(response => {
        const { liveUrl, state } = response.data.body;
        switch (true) {
          case liveUrl && liveUrl !== "":
            const wait = attempts === 0 ? 0 : additionalWait;
            return setTimeout(
              () =>
                this.setState({
                  buttonState: Live,
                  liveUrl: `http://${liveUrl}:8080/scheduleMaker/`,
                  attempts: 0
                }),
              wait
            );
          case state === "pending" && attempts >= maxAttempts:
            return this.setState({ buttonState: Error });
          default:
          case state === "pending":
            this.setState({
              buttonState: Pending,
              attempts: this.state.attempts + 1
            });
            return setTimeout(
              this.makeBootRequest,
              millisecondsInBetweenAttempts
            );
        }
      })
      .catch(error => {
        console.log("error....", error);
        this.setState({ buttonState: Error });
      });
  };

  handleInitialButtonClick = () => {
    this.setState({ buttonState: Thinking });
    this.makeBootRequest();
  };

  getStatus = () => {
    switch (this.state.buttonState) {
      default:
      case Initial:
        return {
          shout: "Spin up server",
          description:
            "Click the button to spin up an AWS EC2 instance with the demo on it... Should take 15-30 seconds.",
          spinner: false
        };
      case Thinking:
        return {
          shout: "Thinking...",
          description: "Checking to see if the server is running already...",
          spinner: true
        };
      case Live:
        return {
          shout: "Live!",
          description:
            "The instance is ready to go. Click the button to go to the app!",
          spinner: false
        };
      case Pending:
        return {
          shout: "Booting!",
          description: "Booting up an EC2 instance...",
          spinner: true
        };
      case Error:
        return {
          shout: "Error!",
          description:
            "Not sure what is wrong... please let me know: jsphweid@gmail.com",
          spinner: false
        };
    }
  };

  render() {
    const { liveUrl } = this.state;
    const status = this.getStatus();
    const spinner = status.spinner ? <div className="jlw-spinner" /> : null;
    const spinningClass = status.spinner
      ? "jlw-project--scheduleMakerButtonSpinning"
      : "";

    const buttonOnClick = liveUrl
      ? () => (window.location.href = liveUrl)
      : this.handleInitialButtonClick;

    return (
      <div className={`jlw-project--scheduleMakerButton ${spinningClass}`}>
        <button
          className={spinningClass}
          onClick={buttonOnClick}
          disabled={!!spinner}
        >
          <div>{status.shout}</div>
          {spinner}
        </button>
        <div>{status.description}</div>
      </div>
    );
  }
}
