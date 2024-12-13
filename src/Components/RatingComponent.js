import React, { useState } from "react";
import { Star } from "./Star";
import "../Css/Star.css";

const STAR_ARRAY = [0, 1, 2, 3, 4];

export const RatingComponent = () => {
  const [starIndex, setStarIndex] = useState(-1);

  const onStarClicked = (index) => {
    setStarIndex(index);
  };

  const getStar = () => {
    return STAR_ARRAY.map((starid) => (
      <Star
        key={starid}
        isRatedState={starid <= starIndex}
        starid={starid}
        onStarClicked={onStarClicked}
      />
    ));
  };
  return (
    <>
      <div className="Text"> Please provide rating </div>
      <div className="rating">{getStar()}</div>
    </>
  );
};
