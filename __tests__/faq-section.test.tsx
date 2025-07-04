// __tests__/faq-section.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { FAQSection } from "@/components/faq-section";

describe("FAQSection", () => {
  beforeEach(() => {
    render(<FAQSection />);
  });

  it("renders FAQ questions from internal array", () => {
    expect(screen.getByText("What is Prizeet?")).toBeInTheDocument();
    expect(
      screen.getByText("How do I track my order after purchase?")
    ).toBeInTheDocument();
    expect(
      screen.getByText("What payment methods do you accept?")
    ).toBeInTheDocument();
  });

  it("reveals answer when a question is clicked", () => {
    const question = screen.getByText("What is Prizeet?");
    fireEvent.click(question);

    expect(
      screen.getByText(/Prizeet is a smart shopping platform/i)
    ).toBeInTheDocument();
  });

  it("toggles between plus and minus icons", () => {
    const question = screen.getByText("What is Prizeet?");

    // Initially plus icon should be shown
    expect(screen.getAllByTestId("faq-icon-plus").length).toBeGreaterThan(0);

    fireEvent.click(question);

    // After click, minus icon should be shown
    expect(screen.getAllByTestId("faq-icon-minus").length).toBeGreaterThan(0);
  });

  it("renders the Contact Support button", () => {
    const button = screen.getByRole("button", { name: /contact support/i });
    expect(button).toBeInTheDocument();
  });

  it("matches the rendered structure snapshot", () => {
    const { container } = render(<FAQSection />);
    expect(container).toMatchSnapshot();
  });
});
