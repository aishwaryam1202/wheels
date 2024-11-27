import React, { useEffect } from "react";
import "./../Css/WheelDisplay.css";

export const WheelDisplay = (props) => {
  const {
    imgSrc,
    metaInfo,
    fWDType,
    name,
    className,
    onWheelClick,
    index,
    isActiveWheel,
  } = props;
  const imgStyle = isActiveWheel
    ? {
        height: 300,
        width: 300,
      }
    : {
        height: 200,
        width: 200,
      };
  return (
    <div
      className={className}
      onClick={() => {
        onWheelClick(index);
      }}
    >
      <div className={isActiveWheel ? "rotate" : ""}>
        <img src={imgSrc} style={imgStyle} alt={name} loading="lazy" />
      </div>
      <div className="wheel-info-1">{metaInfo}</div>
      <div className="wheel-info-2">{fWDType}</div>
      <div className="wheel-name">{name}</div>
    </div>
  );
};
