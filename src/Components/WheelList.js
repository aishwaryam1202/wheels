import React, { Component } from "react";
import { NavigationButton } from "./NavigationButton";
import { WheelDisplay } from "./WheelDisplay";
import {
  allWheelList,
  NAVIGATION_BUTTON_LIST,
} from "../Constants/WheelConstant";
import "./../Css/WheelList.css";

export class WheelList extends Component {
  constructor(props) {
    super(props);
    this.onClickingWheel = this.onClickingWheel.bind(this);
    this.onNavigationButtonClick = this.onNavigationButtonClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.state = {
      activeWheelIndex: 0,
      isPreviousBtnDisabled: true,
      isNextBtnDisabled: false,
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyPress, false);
  }

  onKeyPress(e) {
    if (e.key === "ArrowRight") {
      this.onNavigationButtonClick(NAVIGATION_BUTTON_LIST.next);
    } else if (e.key === "ArrowLeft") {
      this.onNavigationButtonClick(NAVIGATION_BUTTON_LIST.previous);
    }
  }
  onClickingWheel(index) {
    if (index !== this.state.activeWheelIndex) {
      this.setState({
        activeWheelIndex: index,
      });
    }
  }

  onNavigationButtonClick(type) {
    const { activeWheelIndex } = this.state;
    if (type === NAVIGATION_BUTTON_LIST.previous) {
      if (activeWheelIndex > 0) {
        this.setState({
          activeWheelIndex: activeWheelIndex - 1,
        });
      }
    } else {
      if (activeWheelIndex <= allWheelList.length - 2)
        this.setState({
          activeWheelIndex: activeWheelIndex + 1,
        });
    }
  }

  getWheelList(wheels) {
    return wheels.map((wheelData, i) => {
      const { name, imgSrc, fWDType, metaInfo, index } = wheelData;
      const { activeWheelIndex } = this.state;
      return (
        <WheelDisplay
          name={name}
          index={index}
          imgSrc={imgSrc}
          fWDType={fWDType}
          metaInfo={metaInfo}
          isActiveWheel={i === activeWheelIndex}
          className={
            i === activeWheelIndex
              ? "wheel-pic-info-parent-selected"
              : "wheel-pic-info-parent"
          }
          onWheelClick={this.onClickingWheel}
        />
      );
    });
  }

  render() {
    const { activeWheelIndex } = this.state;
    return (
      <div className="wheels-img-div">
        <NavigationButton
          type={NAVIGATION_BUTTON_LIST.previous}
          isDisabled={activeWheelIndex === 0}
          onButtonClick={this.onNavigationButtonClick}
        />
        {this.getWheelList(allWheelList)}
        <NavigationButton
          type={NAVIGATION_BUTTON_LIST.next}
          isDisabled={activeWheelIndex === allWheelList.length - 1}
          onButtonClick={this.onNavigationButtonClick}
        />
      </div>
    );
  }
}
