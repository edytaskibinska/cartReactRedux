import "@testing-library/jest-dom/extend-expect"; 
import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders button with correct text", () => {
  render(<Button>Hello, Test!</Button>);
  const textElement = screen.getByText("Hello, Test!");
  expect(textElement).toBeInTheDocument();
});

test("renders button with correct CSS class", () => {
  render(<Button className="custom-button">Click me</Button>);
  const buttonElement = screen.getByText("Click me");
  expect(buttonElement).toHaveClass("custom-button");
});

test("renders disabled button when disabled prop is true", () => {
  render(<Button disabled>Click me</Button>);
  const buttonElement = screen.getByText("Click me");
  expect(buttonElement).toBeDisabled();
});
