import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App Component", () => {
  test("renders the correct child components", () => {
    const { container } = render(<App />);

    expect(container.querySelector(".App")).toBeInTheDocument();
    expect(container.querySelector(".App header")).toBeInTheDocument();
    expect(container.querySelector(".App aside")).toBeInTheDocument();
    expect(container.querySelector(".App main")).toBeInTheDocument();
  });

  test("renders the blog title", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1 })
    ).toBeInTheDocument();
  });

  test("renders the blog description", () => {
    render(<App />);

    expect(
      screen.getByText(/blog about learning react/i)
    ).toBeInTheDocument();
  });

  test("renders at least one article", () => {
    const { container } = render(<App />);

    expect(container.querySelectorAll("article").length).toBeGreaterThan(0);
  });
});