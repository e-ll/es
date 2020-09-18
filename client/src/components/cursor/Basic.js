import React, {Component} from "react";
import ReactCursorPosition from "react-cursor-position";

import PositionLabel from "./PositionLabel";
import InstructionsLabel from "./InstructionsLabel";

export default class Basic extends Component {
  render() {
    return (
      <ReactCursorPosition
        {...{
          className: "example__target example__target--basic",
        }}
      >
        <PositionLabel />
        <InstructionsLabel className="example__instructions" />
      </ReactCursorPosition>
    );
  }
}
