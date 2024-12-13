import React, { Component } from "react";
import "./../Css/WheelSummary.css";
import OnlineContext from "../Utils/OnlineContext";

export class WheelSummary extends Component {
  render() {
    return (
      <div className="wheel-text-div">
        <div>
          <OnlineContext.Consumer>
            {(data) => {
              return <h1>{data.userName}</h1>;
            }}
          </OnlineContext.Consumer>
           
        </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </div>
    );
  }
}
