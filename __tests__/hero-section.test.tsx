import { render, screen, fireEvent } from "@testing-library/react";
import { HeroSection } from "@/components/hero-section";

// Prevent carousel-related crash in tests due to Embla use of matchMedia
beforeAll(() => {
  window.matchMedia ||= () => ({
    matches: false,
    media: "",
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  });
});

describe("HeroSection", () => {
  it("renders main headline and subheading", () => {
    render(<HeroSection />);
    expect(screen.getByText("Find Your Perfect")).toBeInTheDocument();
    expect(screen.getByText("Smartphone Deal")).toBeInTheDocument();
    expect(
      screen.getByText(/Compare prices, discover exclusive deals/i)
    ).toBeInTheDocument();
  });

  it("renders search input, select, and search button", () => {
    render(<HeroSection />);

    expect(
      screen.getByPlaceholderText(/Search for smartphones/i)
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
    expect(screen.getByText(/Price Range/i)).toBeInTheDocument();
  });

  it("updates search input value on change", () => {
    render(<HeroSection />);
    const input = screen.getByPlaceholderText(
      /Search for smartphones/i
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: "Samsung" } });
    expect(input.value).toBe("Samsung");
  });

  it("updates search input when popular button is clicked", () => {
    render(<HeroSection />);
    const button = screen.getByText("iPhone 15");

    fireEvent.click(button);

    const input = screen.getByPlaceholderText(
      /Search for smartphones/i
    ) as HTMLInputElement;
    expect(input.value).toBe("iPhone 15");
  });

  it("logs search query when Search button is clicked", () => {
    const spy = jest.spyOn(console, "log").mockImplementation(() => {});
    render(<HeroSection />);

    fireEvent.click(screen.getByRole("button", { name: /search/i }));
    expect(spy).toHaveBeenCalledWith("Search:", {
      query: "",
      priceRange: "",
    });

    spy.mockRestore();
  });

  it("renders marketplace badge", () => {
    render(<HeroSection />);
    expect(
      screen.getByText("Nigeria's #1 Smartphone Marketplace")
    ).toBeInTheDocument();
  });

  it("displays statistics correctly", () => {
    render(<HeroSection />);

    expect(screen.getByText("10,000+")).toBeInTheDocument();
    expect(screen.getByText("500+")).toBeInTheDocument();
    expect(screen.getByText("50,000+")).toBeInTheDocument();
  });

  it("renders CTA section", () => {
    render(<HeroSection />);

    expect(
      screen.getByText("Ready to find your next smartphone?")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /Start Exploring/i })
    ).toBeInTheDocument();
  });
});
