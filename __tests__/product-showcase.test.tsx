import { render, screen, fireEvent } from "@testing-library/react";
import { ProductShowcase } from "@/components/product-showcase";

describe("ProductShowcase", () => {
  beforeEach(() => {
    render(<ProductShowcase />);
  });

  it("renders section heading and product details", () => {
    expect(screen.getByText("Latest Smartphones")).toBeInTheDocument();
    expect(screen.getByText("TECNO SPARK 30 PRO")).toBeInTheDocument();
    expect(screen.getByText("₦231,100")).toBeInTheDocument();
  });

  it("navigates to next set of products on pagination button click", () => {
    const nextButton = screen.getAllByRole("button", {
      name: /next products/i,
    })[0];
    fireEvent.click(nextButton);

    expect(screen.getByText("TECNO PHANTOM X")).toBeInTheDocument();
  });

  it("displays product rating and number of reviews", () => {
    expect(screen.getByText("4.5")).toBeInTheDocument();
    expect(screen.getByText("(128 reviews)")).toBeInTheDocument();
  });

  it("shows discount badges for discounted products", () => {
    expect(screen.getByText("-18%")).toBeInTheDocument();
  });

  it("shows new arrival badge when applicable", () => {
    expect(screen.queryByText("New Arrival")).toBeInTheDocument();
  });

  it("displays color badges and +more indicator", () => {
    expect(screen.getByText("Obsidian Edge")).toBeInTheDocument();
    expect(screen.getByText("Arctic Glow")).toBeInTheDocument();
    expect(screen.getByText("+1 more")).toBeInTheDocument();
  });

  it("renders 'View All Products' call-to-action button", () => {
    expect(
      screen.getByRole("button", { name: /view all products/i })
    ).toBeInTheDocument();
  });

  it("displays dot pagination and responds to dot click", () => {
    const dots = screen.getAllByRole("button", { name: /go to slide/i });
    expect(dots.length).toBeGreaterThan(1);

    fireEvent.click(dots[1]);

    expect(screen.getByText("TECNO PHANTOM X")).toBeInTheDocument();
  });
});
