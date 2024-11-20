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
  render(
    <NavigationButton
      type={NAVIGATION_BUTTON_LIST.next}
      isDisabled={false}
      onButtonClick={() => {}}
    />
  );
  const linkElement = screen.getByText(/>/i);
  expect(linkElement).toBeInTheDocument();
});

test("Navigation Previous Button to be Present", () => {
  render(
    <NavigationButton
      type={NAVIGATION_BUTTON_LIST.previous}
      isDisabled={false}
      onButtonClick={() => {}}
    />
  );
  const linkElement = screen.getByText(/</i);
  expect(linkElement).toBeInTheDocument();
});

test("Navigation Previous Button to be Present", () => {
  render(
    <NavigationButton
      type={NAVIGATION_BUTTON_LIST.previous}
      isDisabled={true}
      onButtonClick={() => {}}
    />
  );
  const linkElement = screen.getByText(/</i);
  expect(linkElement).toBeInTheDocument();
});
