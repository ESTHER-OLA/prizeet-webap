import { render, screen } from "@testing-library/react";
import { FeaturesSection } from "@/components/features-section";

describe("FeaturesSection", () => {
  beforeEach(() => {
    render(<FeaturesSection />);
  });

  it("renders the section heading and description", () => {
    expect(
      screen.getByRole("heading", { name: /why choose prizeet/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/We’ve built a platform that puts your needs first/i)
    ).toBeInTheDocument();
  });

  it("renders all feature cards with titles and descriptions", () => {
    const features = [
      {
        title: "Trusted Payment",
        description: /Secure transactions with multiple payment options/i,
      },
      {
        title: "Advanced Search",
        description: /Find exactly what you need with powerful filters/i,
      },
      {
        title: "24/7 Support",
        description: /Round-the-clock customer support/i,
      },
      {
        title: "Order Tracking",
        description: /Real-time tracking from purchase to delivery/i,
      },
    ];

    features.forEach(({ title, description }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(description)).toBeInTheDocument();
    });
  });

  it("renders exactly 4 feature cards", () => {
    const cards = screen.getAllByRole("heading", { level: 3 });
    expect(cards).toHaveLength(4);
  });
});
