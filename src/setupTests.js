import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { WheelTitle } from "./Components/WheelTitle";
import { NavigationButton } from "./Components/NavigationButton";
import { NAVIGATION_BUTTON_LIST } from "./Constants/WheelConstant";
import { WheelSummary } from "./Components/WheelSummary";

test("Title Div to be Present", () => {
  render(<WheelTitle />);
  const linkElement = screen.getByText(/WHEELS/i);
  expect(linkElement).toBeInTheDocument();
});

test("Summary Div to be Present", () => {
  render(<WheelSummary />);
  const linkElement = screen.getByText(
    /Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation./i
  );
  expect(linkElement).toBeInTheDocument();
});

test("Navigation Next Button to be Present", () => {
  const { id: rigthId, buttonText: rightButtonText } =
    NAVIGATION_BUTTON_LIST.next;
  render(
    <NavigationButton
      type={rigthId}
      buttonText={rightButtonText}
      isDisabled={false}
      onButtonClick={() => {}}
    />
  );
  const linkElement = screen.getByText(/>/i);
  expect(linkElement).toBeInTheDocument();
});

test("Navigation Previous Button to be Present", () => {
  const { id: leftId, buttonText: leftButtonText } =
    NAVIGATION_BUTTON_LIST.previous;
  render(
    <NavigationButton
      type={leftId}
      buttonText={leftButtonText}
      isDisabled={false}
      onButtonClick={() => {}}
    />
  );
  const linkElement = screen.getByText(/</i);
  expect(linkElement).toBeInTheDocument();
});

test("Navigation Previous Button to be Present", () => {
  const { id: leftId, buttonText: leftButtonText } =
    NAVIGATION_BUTTON_LIST.previous;
  render(
    <NavigationButton
      type={leftId}
      buttonText={leftButtonText}
      isDisabled={true}
      onButtonClick={() => {}}
    />
  );
  const linkElement = screen.getByText(/</i);
  expect(linkElement).toBeInTheDocument();
});
