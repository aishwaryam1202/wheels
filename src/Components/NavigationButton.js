import React from "react";
import "./../Css/NavigationButton.css";

export const NavigationButton = (props) => {
  const { buttonText, onButtonClick, type, isDisabled } = props;
  const className = isDisabled ? "Button-div disabled" : "Button-div";
  return (
    <div className={className} onClick={() => onButtonClick(type)}>
      {buttonText}
    </div>
  );
};
