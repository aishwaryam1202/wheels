import React, { useContext } from "react";
import "./../Css/WheelDisplay.css";
import OnlineContext from "../Utils/OnlineContext";

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

  const userNAme = useContext(OnlineContext);

  
  console.log('userNAme: ', userNAme);
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
        userNAme.setUseN("JB");
        onWheelClick(index);
      }}
    >
      <div className={isActiveWheel ? "rotate" : ""}>
        <img src={imgSrc} style={imgStyle} alt={name} loading="lazy" />
      </div>
      <div>{userNAme.userName}</div>
      <div className="wheel-info-1">{userNAme.onlineStatus}</div>
      <div className="wheel-info-2">{fWDType}</div>
      <div className="wheel-name">{userNAme.onlineStatus}</div>
    </div>
  );
};


export const ActiveWheelDisplay = (WheelDisplayComponent) => {
  return (props) => {
    return (
      <>
        <WheelDisplayComponent {...props} />
        {/* <div>Active Wheel</div> */}
      </>
    );
  };
};
