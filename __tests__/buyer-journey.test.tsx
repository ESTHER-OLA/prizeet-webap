import { render, screen } from "@testing-library/react";
import { BuyerJourney } from "@/components/buyer-journey";

describe("BuyerJourney", () => {
  beforeEach(() => {
    render(<BuyerJourney />);
  });

  it("renders 'What We Offer' heading and description", () => {
    expect(
      screen.getByRole("heading", { name: /what we offer/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/we bring together a wide range of smartphones/i)
    ).toBeInTheDocument();
  });

  it("renders all 4 offer highlights", () => {
    const highlights = [
      "Wide selection of verified smartphones from trusted vendors.",
      "Real-time comparison of features, prices, and offers.",
      "Transparent checkout and secure multiple payment options.",
      "Seamless delivery and order tracking to your doorstep.",
    ];

    highlights.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it("renders '4 simple steps' section title and description", () => {
    expect(
      screen.getByRole("heading", {
        name: /find your perfect gadget in 4 simple steps/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /our streamlined process makes smartphone shopping effortless/i
      )
    ).toBeInTheDocument();
  });

  it("renders all 4 buyer journey steps", () => {
    const stepTitles = [
      "Tell us what you need",
      "Choose a vendor",
      "Order through Prizeet",
      "Leave it to us",
    ];

    stepTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it("renders the 'Discover Prizeet for Buyers' CTA button", () => {
    expect(
      screen.getByRole("button", { name: /discover prizeet for buyers/i })
    ).toBeInTheDocument();
  });

  it("renders customer rating and fast delivery floating cards", () => {
    expect(screen.getByText("4.8★")).toBeInTheDocument();
    expect(screen.getByText("Customer Rating")).toBeInTheDocument();
    expect(screen.getByText("24h")).toBeInTheDocument();
    expect(screen.getByText("Fast Delivery")).toBeInTheDocument();
  });

  it("renders the buyer image with correct alt text", () => {
    expect(
      screen.getByAltText("Happy customer using smartphone")
    ).toBeInTheDocument();
  });
});
