import { render, screen } from "@testing-library/react";
import { VendorSection } from "@/components/vendor-section";

describe("VendorSection", () => {
  beforeEach(() => {
    render(<VendorSection />);
  });

  it("renders the 'For Vendors' badge and main heading", () => {
    expect(screen.getByText(/for vendors/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /start selling in 4 simple steps/i })
    ).toBeInTheDocument();
  });

  it("renders the vendor introduction paragraph", () => {
    expect(
      screen.getByText(/Join hundreds of successful vendors on Prizeet/i)
    ).toBeInTheDocument();
  });

  it("renders all 4 vendor steps with correct titles and descriptions", () => {
    const steps = [
      {
        title: "Get your products listed",
        description: /Add your gadgets, set prices/i,
      },
      {
        title: "Receive purchase orders",
        description: /Get notified when customers place orders/i,
      },
      {
        title: "Process purchase orders",
        description: /Confirm, package, and hand over/i,
      },
      {
        title: "Get paid instantly",
        description: /Enjoy fast payouts/i,
      },
    ];

    steps.forEach(({ title, description }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(description)).toBeInTheDocument();
    });
  });

  it("renders floating vendor stats cards", () => {
    expect(screen.getByText("500+")).toBeInTheDocument();
    expect(screen.getByText(/active vendors/i)).toBeInTheDocument();

    expect(screen.getByText("₦2M+")).toBeInTheDocument();
    expect(screen.getByText(/monthly sales/i)).toBeInTheDocument();
  });

  it("renders the CTA button", () => {
    expect(
      screen.getByRole("button", { name: /discover prizeet for vendors/i })
    ).toBeInTheDocument();
  });

  it("renders the vendor banner image", () => {
    expect(
      screen.getByAltText("Happy vendors and customers")
    ).toBeInTheDocument();
  });
});
