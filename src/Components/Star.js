import React from "react";
import "../Css/Star.css";

export const Star = (props) => {
  const { starid, onStarClicked, isRatedState } = props;

  const onstarClicked = () => {
    onStarClicked(starid);
  };
  return (
    <div
      className={isRatedState ? "yellowStar" : "greyStar"}
      onClick={onstarClicked}
    >
      {starid + 1} star
    </div>
  );
};

// Requirement

// Rating Stars
// 5 stars
// expected behabiour
// initial state ->  all 3 in same color - grey
// click on star n ->  star 1...n should be yellow and remaining should  be grey

// Component Architecture
// Overall component -> accomodate all stars
// Star Component -> showing start [ rated / unrated]
