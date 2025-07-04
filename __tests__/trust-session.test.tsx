import { render, screen } from "@testing-library/react";
import { TrustSection } from "@/components/trust-section";

// Mock Testimonial component to isolate TrustSection
jest.mock("@/components/testimonial", () => ({
  Testimonial: () => (
    <div data-testid="testimonial-section">Testimonial Section</div>
  ),
}));

describe("TrustSection", () => {
  beforeEach(() => {
    render(<TrustSection />);
  });

  it("renders section heading and intro paragraph", () => {
    expect(
      screen.getByRole("heading", {
        name: /tailored features designed just for you/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/we’ve built prizeet around your comfort, safety/i)
    ).toBeInTheDocument();
  });

  it("renders all 6 trust feature titles", () => {
    const titles = [
      "Trusted Payment",
      "24/7 Customer Support",
      "Advanced Search Filters",
      "Real-Time Order Tracking",
      "Wishlist & Save for Later",
      "Back-in-Stock Alerts",
    ];

    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it("renders all trust feature descriptions", () => {
    const descriptions = [
      /pay with ease through whatsapp/i,
      /24\/7 customer support/i,
      /refine your shopping experience/i,
      /stay updated on your purchase/i,
      /save your favorite items/i,
      /back-in-stock notifications/i,
    ];

    descriptions.forEach((descRegex) => {
      expect(screen.getByText(descRegex)).toBeInTheDocument();
    });
  });

  it("renders exactly 6 feature cards", () => {
    const cards = screen.getAllByText(
      /Trusted Payment|24\/7 Customer Support|Advanced Search Filters|Real-Time Order Tracking|Wishlist & Save for Later|Back-in-Stock Alerts/
    );
    expect(cards.length).toBe(6);
  });

  it("renders the Testimonial section", () => {
    expect(screen.getByTestId("testimonial-section")).toBeInTheDocument();
  });
});
