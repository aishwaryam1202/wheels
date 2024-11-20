import React from "react";
import "./../Css/NavigationButton.css";
import { NAVIGATION_BUTTON_LIST } from "./../Constants/WheelConstant";

export const NavigationButton = (props) => {
  const { onButtonClick, type, isDisabled } = props;
  const className = isDisabled ? "Button-div disabled" : "Button-div";
  const iconClassName =
    type === NAVIGATION_BUTTON_LIST.previous
      ? "fa fa-chevron-left "
      : "fa fa-chevron-right";
  return (
    <div className={className} onClick={() => onButtonClick(type)}>
      <i class={iconClassName}></i>
    </div>
  );
};
