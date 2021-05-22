import React from "react";

import Section from "../common/section/section";

export interface OtherProps {
  className?: string;
}

export default class Other extends React.Component<OtherProps> {
  constructor(props: OtherProps) {
    super(props);
  }

  render() {
    return (
      <Section
        className={`jlw-other ${this.props.className || ""}`}
        title="other"
      />
    );
  }
}
